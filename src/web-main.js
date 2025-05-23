import {htmlReport} from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import {sleep} from 'k6';
import {USERS} from "./users.js";
import {auth} from "./api/modules/common/auth.js";
import {commonGroup} from "./groups/lk/common.js";
import {dispDashboardGroup} from "./groups/lk/dispDashboard.js";

function getSummaryFileName() {
    const now = new Date();

    function pad(value) {
        if (Number(value) < 10) {
            return '0' + value;
        }
        return value.toString();
    }

    const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;

    return `${date}-summary-web.html`;
}

function randomNumber(min = 2, max = 4) {
    return Math.random() * (max - min) + min;
}

const DISPATCHERS = USERS.filter(user => user.role === 'dispatcher');

export const options = {
    vus: DISPATCHERS.length,
    iterations: DISPATCHERS.length,
    // duration: '1m30s',
    thresholds: {
        http_req_duration: ['p(95)<2000'], // время ответа
        // http_req_failed: ['rate < 0.01'], // Допустимо <1% ошибок
    },
    /*scenarios: {
        ramping: {
            executor: 'ramping-vus', //нагрузочный тест с ростом:
            stages: [
                { duration: '30s', target: 10 },
                { duration: '1m', target: 50 },
                { duration: '30s', target: 0 },
            ]
        },
        /!*rate_test: {
            executor: 'constant-arrival-rate', //ровная нагрузка:
            rate: 50,             // итераций/секунду
            timeUnit: '1s',
            duration: '2m',
            preAllocatedVUs: 50,  // сколько VU заранее подготовить
        }*!/
    }*/
};

export default function () {
    const user = DISPATCHERS[__VU % DISPATCHERS.length];

    try {
        const authData = auth(user, {
            model: 'grafana/k6',
            app_version: '',
            system: 'web',
            firebase_token: '',
        });
        const accessToken = authData['access_token'];

        const expandedUser = {
            ...user,
            accessToken
        }

        commonGroup(expandedUser);

        dispDashboardGroup(expandedUser);
        sleep(randomNumber());
    } catch (error) {
        console.error(`VU ${__VU} failed: ${error}`);
    }
}

/** Генерация html документа с визуализацией результатов тестирования */
export function handleSummary(data) {
    return {
        [getSummaryFileName()]: htmlReport(data),
    };
}
