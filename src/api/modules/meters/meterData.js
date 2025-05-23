import {check} from 'k6';
import {PhpRequest} from "../../request/phpRequest.js";
import {pad} from "../../../utils/index.js";

export function meterData(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const response = request.postFormData({
        service: {
            0: {
                name: 'last_indications',
                attributes: {
                    type: 'water'
                }
            },
            1: {
                name: 'meter_statistics',
                attributes: {
                    type: 'water'
                }
            },
            2: {
                name: 'meter_data',
                attributes: {
                    type: 'water'
                }
            },
        }
    });

    check(response, {
        [`last_indications + meter_statistics + meter_data || Статус 200`]: (r) => r.status === 200
    });
}
