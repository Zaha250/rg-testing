import {check} from 'k6';
import {PhpRequest} from "../request/phpRequest.js";

export function getSidebarComponents(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const service = 'get_components';

    const response = request.post({
        service,
        attributes: {
            category_item: 'left_side_menu_item',
            category_order: 'left_side_menu_order',
        }
    });
    const responseJson = response.json();

    check(response, {
        [`${service} || Статус 200`]: (r) => r.status === 200,
        [`${service} || Проверка bitrix code`]: () => responseJson.code && responseJson.code === 200,
        [`${service} || Список ссылок не пустой`]: () => Object.keys(responseJson[service]).length,
    });
}
