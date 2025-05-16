import {check} from 'k6';
import {PhpRequest} from "../../request/phpRequest.js";

export function myProfileAndCustomerDashboard(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const response = request.postFormData({
        service: {
            0: {
                name: 'customer_dashboard'
            },
            1: {
                name: 'my_profile',
                attributes: {
                    isAddCountObjects: false
                }
            },
        }
    });

    check(response, {
        [`customer_dashboard + my_profile || Статус 200`]: (r) => r.status === 200
    });
}
