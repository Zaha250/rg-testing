import {check} from 'k6';
import {PhpRequest} from "../../request/phpRequest.js";

export function mobileLoginWithConfig(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const response = request.postFormData({
        service: {
            0: {
                name: 'login',
                attributes: {
                    login: user.login,
                    password: user.password,
                }
            },
            1: {
                name: 'mobile_application_customer_access'
            },
            2: {
                name: 'get_components',
                attributes: {
                    category: 'configuration'
                }
            },
            3: {
                name: 'customer_navbar'
            },
            4: {
                name: 'modules_enable_list'
            }
        }
    });

    console.log(response)

    check(response, {
        [`login + mobile_application_customer_access + get_components + customer_navbar + modules_enable_list || Статус 200`]: (r) => r.status === 200
    });
}
