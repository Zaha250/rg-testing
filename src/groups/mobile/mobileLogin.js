import {group} from 'k6';
import {mobileLoginWithConfig} from "../../api/modules/user/index.js";

/** api вызываемое при каждом логине в МП жителя */
export function mobileLogin(user) {
    group('mobileLogin', function () {
        mobileLoginWithConfig(user);
    });
}