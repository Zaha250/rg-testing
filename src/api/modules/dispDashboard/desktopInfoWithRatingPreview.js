import {check} from 'k6';
import {PhpRequest} from "../../request/phpRequest.js";
import {pad} from "../../../utils/index.js";

export function desktopInfoWithRatingPreview(user) {
    const request = new PhpRequest({
        login: user.login,
        password: user.password,
    });

    const now = new Date();

    const today = `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()}`;

    const response = request.postFormData({
        service: {
            0: {
                name: 'rating_preview',
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
                    company: user.companyId
                }
            },
            1: {
                name: 'desktop_info',
                attributes: {
                    filters: {
                        date: {
                            from: today,
                            to: today,
                        }
                    },
                    company: user.companyId
                }
            },
        }
    });

    check(response, {
        [`rating_preview + desktop_info || Статус 200`]: (r) => r.status === 200
    });
}
