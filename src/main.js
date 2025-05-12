import {htmlReport} from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import {sleep} from 'k6';
import {USERS} from "./api/request/users.js";
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

    return `${date}-summary.html`;
}

function randomNumber(min = 2, max = 4) {
    return Math.random() * (max - min) + min;
}

export const options = {
    vus: USERS.length,
    iterations: 1,
    // duration: '1m30s',
    thresholds: {
        // http_req_duration: ['p(95)<1000'], //время ответа
    },
    /*scenarios: {
        ramping: { //нагрузочный тест с ростом:
            executor: 'ramping-vus',
            stages: [
                { duration: '30s', target: 10 },
                { duration: '1m', target: 50 },
                { duration: '30s', target: 0 },
            ]
        },
        rate_test: { //ровная нагрузка:
            executor: 'constant-arrival-rate',
            rate: 50,             // 50 итераций/секунду
            timeUnit: '1s',
            duration: '2m',
            preAllocatedVUs: 50,  // сколько VU заранее подготовить
        }
    }*/
};

export default function () {
    const VU_User = USERS[__VU - 1];
    console.log(`🔹 VU ${__VU} → user: ${VU_User.login}`);

    commonGroup(VU_User);
    dispDashboardGroup(VU_User);
}

/** Генерация html документа с визуализацией результатов тестирования */
export function handleSummary(data) {
    return {
        [getSummaryFileName()]: htmlReport(data),
    };
}
