import {check} from 'k6';
import {Request} from "../../request/request.js";

export function auth(user, device) {
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
            device
        });
        const responseJson = response.json();
        console.log({authData: responseJson})

        check(response, {
            [`${url} || Статус 200`]: (r) => r.status === 200,
            [`${url} || Проверка status`]: () => responseJson.status,
        });

        return responseJson.data;
    } catch (e) {
        throw new Error(`${url} ${e.message}`);
    }
}
