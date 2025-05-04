import {htmlReport} from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
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

export const options = {
    scenarios: {
        login: {
            executor: 'per-vu-iterations',
            // vus: users.length,
            iterations: 1,
        },
    },
};

export default function () {
    for(const user of USERS) {
        commonGroup(user);
        dispDashboardGroup(user);
    }
}

/** Генерация html документа с визуализацией результатов тестирования */
export function handleSummary(data) {
    return {
        [getSummaryFileName()]: htmlReport(data),
    };
}
