import {check} from 'k6';
import {Request} from "../../request/request.js";

export function auth(user) {
    const request = new Request({
        token: ''
    });

    const url = '/auth/login';

    try {
        const response = request.post(url, {
            data: {
                login: user.login,
                password: user.password,
            },
            device: {
                model: 'grafana/k6',
                app_version: '',
                system: 'web',
                firebase_token: '',
            }
        });
        const responseJson = response.json();

        check(response, {
            [`${url} || Статус 200`]: (r) => r.status === 200,
            [`${url} || Проверка status`]: () => responseJson.status,
        });

        return responseJson.data;
    } catch (e) {
        throw new Error(`${url} ${e.message}`);
    }
}
