import {check} from 'k6';
import {Request} from "../../request/request.js";

export function getFreeExecutors(token) {
    const request = new Request({
        token
    });

    const url = '/executors/get-free-executors';

    try {
        const response = request.get(url);
        const responseJson = response.json();

        check(response, {
            [`${url} || Статус 200`]: (r) => r.status === 200,
            [`${url} || Проверка status`]: () => responseJson.status,
        });
    } catch (e) {
        throw new Error(`${url} ${e.message}`);
    }
}
