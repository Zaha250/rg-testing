import {check} from 'k6';
import {PhpRequest} from "../../request/phpRequest.js";

export function detailDispDashboardRating(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const service = 'detail_rating';

    const response = request.post({
        service,
        attributes: {
            filters: {
                date: {
                    from: '',
                    to: '',
                },
                location: {
                    mode: 'city',
                    value: '',
                }
            },
            company: user.companyId,
            page: 1,
            count: 10
        }
    });
    const responseJson = response.json();

    check(response, {
        [`${service} || Статус 200`]: (r) => r.status === 200,
        [`${service} || Проверка bitrix code`]: () => responseJson.code && responseJson.code === 200,
        [`${service} || Проверка данных`]: () => 'ratings_info' in responseJson[service],
    });
}
