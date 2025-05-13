import {check} from 'k6';
import {PhpRequest} from "../../request/phpRequest.js";

export function desktopStatistics(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const service = 'desktop_statistics';

    const response = request.post({
        service,
        attributes: {
            filters: {
                date: {
                    from: '',
                    to: '',
                }
            },
            company: user.companyId,
            count: 15
        }
    });
    const responseJson = response.json();

    check(response, {
        [`${service} || Статус 200`]: (r) => r.status === 200,
        [`${service} || Проверка bitrix code`]: () => responseJson.code && responseJson.code === 200
    });
}
