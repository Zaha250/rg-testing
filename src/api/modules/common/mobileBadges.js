import {check} from 'k6';
import {PhpRequest} from "../../request/phpRequest.js";

export function mobileBadges(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const response = request.postFormData({
        service: {
            0: {
                name: 'my_new_messages',
                attributes: {
                    is_customer: true
                }
            },
            1: {
                name: 'house_chat_new_messages'
            },
            2: {
                name: 'set_token',
                attributes: {
                    token: 'K6_MOCK_TOKEN',
                    os: 'android'
                }
            },
            3: {
                name: 'mobile_version',
                attributes: {
                    platform: 'android'
                }
            },
            4: {
                name: 'chat_uk_customer_new_messages'
            },
        }
    });

    check(response, {
        [`my_new_messages + house_chat_new_messages + set_token + mobile_version + chat_uk_customer_new_messages || Статус 200`]: (r) => r.status === 200
    });
}
