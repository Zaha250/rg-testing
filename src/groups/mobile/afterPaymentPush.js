import {group} from 'k6';
import {getDictionaries} from "../../api/modules/common/index.js";
import {
    intercomAvailableSipAndIntercomRegisterSip
} from "../../api/modules/intercom/index.js";
import {myTreatmentsNoRates} from "../../api/modules/treatments/index.js";
import {gkhPaymentData} from "../../api/modules/payment/index.js";

/**
 * api, вызываемое после перехода по автоматическому пушу о напоминании об оплате
 * */
export function afterPaymentPush(user) {
    group('Переход по пушу о напоминании об оплате', function () {
        getDictionaries(user.accessToken);

        intercomAvailableSipAndIntercomRegisterSip(user);
        gkhPaymentData(user);
        myTreatmentsNoRates(user);
    });
}
