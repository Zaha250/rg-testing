import http from 'k6/http';
import { check, group } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import {getOneTodo} from './services/getTodo.js';

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
    group('Тестирование todos', function () {
        getOneTodo(1);
    });
}

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}
