import {group} from 'k6';
import {getDictionaries} from "../../api/modules/common/index.js";
import {
    intercomAvailableSipAndIntercomRegisterSip
} from "../../api/modules/intercom/index.js";
import {myTreatmentsNoRates} from "../../api/modules/treatments/index.js";
import {myProfileAndCustomerDashboard} from "../../api/modules/user/index.js";
import {mobileBadges} from "../../api/modules/common/mobileBadges.js";

/**
 * Api, вызываемые на главном экране МП жителя
 * */
export function mobileDashboardGroup(user) {
    group('Dashboard МП жителя', function () {
        getDictionaries(user.accessToken);

        mobileBadges(user);
        intercomAvailableSipAndIntercomRegisterSip(user);
        myProfileAndCustomerDashboard(user);
        myTreatmentsNoRates(user);
    });
}
