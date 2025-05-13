import {check} from 'k6';
import {PhpRequest} from "../../request/phpRequest.js";

export function getModulesAndCustomerNavbar(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const response = request.postFormData({
        service: {
            0: {
                name: 'modules_enable_list'
            },
            1: {
                name: 'customer_navbar'
            }
        }
    });

    check(response, {
        [`modules_enable_list + customer_navbar || Статус 200`]: (r) => r.status === 200
    });
}
