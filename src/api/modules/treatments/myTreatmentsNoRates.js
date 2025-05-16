import {check} from 'k6';
import {PhpRequest} from "../../request/phpRequest.js";

export function myTreatmentsNoRates(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const service = 'my_treatments_no_rates';

    const response = request.post({
        service
    });

    check(response, {
        [`${service} || Статус 200`]: (r) => r.status === 200
    });
}
