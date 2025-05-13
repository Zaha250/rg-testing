import {check} from 'k6';
import {PhpRequest} from "../../request/phpRequest.js";

export function getCompaniesAngLabelConfiguration(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const response = request.postFormData({
        service: {
            0: {
                name: 'get_companies'
            },
            1: {
                name: 'get_components',
                attributes: {
                    category: 'configuration'
                }
            }
        }
    });

    check(response, {
        [`get_companies + get_components || Статус 200`]: (r) => r.status === 200
    });
}
