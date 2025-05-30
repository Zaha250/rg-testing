import {group} from 'k6';
import {getDictionaries} from "../../api/modules/common/index.js";
import {
    intercomAvailableSipAndIntercomRegisterSip
} from "../../api/modules/intercom/index.js";
import {myTreatmentsNoRates} from "../../api/modules/treatments/index.js";
import {metersDashboard, meterData} from "../../api/modules/meters/index.js";

/**
 * api, вызываемое после перехода по автоматическому пушу по передаче показаний
 * */
export function afterMetersPush(user) {
    group('Переход по пушу о передаче показаний', function () {
        getDictionaries(user.accessToken);

        intercomAvailableSipAndIntercomRegisterSip(user);
        metersDashboard(user);
        meterData(user);
        myTreatmentsNoRates(user);
    });
}
