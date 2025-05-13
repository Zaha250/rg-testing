import {check} from 'k6';
import {PhpRequest} from "../../request/phpRequest.js";
import {pad} from "../../../utils/index.js";

export function desktopInfo(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const now = new Date();

    const today = `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()}`;

    const service = 'desktop_info';

    const response = request.post({
        service,
        attributes: {
            filters: {
                date: {
                    from: today,
                    to: today,
                }
            },
            company: user.companyId
        }
    });
    const responseJson = response.json();

    check(response, {
        [`${service} || Статус 200`]: (r) => r.status === 200,
        [`${service} || Проверка bitrix code`]: () => responseJson.code && responseJson.code === 200
    });
}
