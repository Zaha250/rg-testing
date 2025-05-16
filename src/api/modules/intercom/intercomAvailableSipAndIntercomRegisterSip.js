import {check} from 'k6';
import {PhpRequest} from "../../request/phpRequest.js";

export function intercomAvailableSipAndIntercomRegisterSip(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const response = request.postFormData({
        service: {
            0: {
                name: 'intercom_available_sip'
            },
            1: {
                name: 'intercom_register_sip'
            },
        }
    });

    check(response, {
        [`intercom_available_sip + intercom_register_sip || Статус 200`]: (r) => r.status === 200
    });
}
