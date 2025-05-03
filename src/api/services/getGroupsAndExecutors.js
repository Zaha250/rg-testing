import {check} from 'k6';
import {PhpRequest} from "../request/phpRequest.js";

export function getGroupsAndExecutors(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const service = 'get_groups_and_executors';

    const response = request.post({
        service
    });
    const responseJson = response.json();

    check(response, {
        [`${service} || Статус 200`]: (r) => r.status === 200,
        [`${service} || Проверка bitrix code`]: () => responseJson.code && responseJson.code === 200,
        [`${service} || Проверка данных`]: () => 'executors' in responseJson[service] && 'groups' in responseJson[service],
    });
}
