import {check} from 'k6';
import {PhpRequest} from "../../request/phpRequest.js";

export function chatUKGetChatList(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const service = 'chat_uk_get_chat_list';

    const response = request.post({
        service,
        attributes: {
            "mode": "active",
            "page": 1,
            "pageSize": 20
        }
    });
    const responseJson = response.json();

    check(response, {
        [`${service} || Статус 200`]: (r) => r.status === 200,
        [`${service} || Проверка bitrix code`]: () => responseJson.code && responseJson.code === 200
    });
}
