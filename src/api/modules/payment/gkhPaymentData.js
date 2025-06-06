import {check} from 'k6';
import {PhpRequest} from "../../request/phpRequest.js";

export function gkhPaymentData(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const service = 'gkh_payment_data';

    const response = request.post({
        service,
        attributes: {
            source: 'mobile'
        }
    });
    const responseJson = response.json();

    check(response, {
        [`${service} || Статус 200`]: (r) => r.status === 200,
        [`${service} || Проверка bitrix code`]: () => responseJson.code && responseJson.code === 200
    });
}
