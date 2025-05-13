import {check} from 'k6';
import {PhpRequest} from "../../request/phpRequest.js";

export function chatUKGetNewMessages(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const service = 'chat_uk_get_new_messages';

    const response = request.post({
        service
    });
    const responseJson = response.json();

    check(response, {
        [`${service} || Статус 200`]: (r) => r.status === 200,
        [`${service} || Проверка bitrix code`]: () => responseJson.code && responseJson.code === 200
    });
}
