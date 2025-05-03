import {group} from 'k6';
import {htmlReport} from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import {myPersonalData} from './api/services/myPersonalData.js';
import {USERS} from "./api/request/users.js";

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
    group('Общие PHP сервисы', function () {
        myPersonalData(USERS[0]);
    });
}

/** Генерация html документа с визуализацией результатов тестирования */
export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}
