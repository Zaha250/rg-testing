import {getDictionaries} from "../../api/modules/common/index.js";
import {
    intercomAvailableSipAndIntercomRegisterSip
} from "../../api/modules/intercom/index.js";
import {myTreatmentsNoRates} from "../../api/modules/treatments/index.js";
import {myProfileAndCustomerDashboard} from "../../api/modules/user/index.js";
import {mobileBadges} from "../../api/modules/common/mobileBadges.js";

/**
 * Сервисы, роуты, вызываемые на главном экране МП
 * */
export function mobileDashboardGroup(user) {
    getDictionaries(user.accessToken);

    mobileBadges(user);
    intercomAvailableSipAndIntercomRegisterSip(user);
    myProfileAndCustomerDashboard(user);
    myTreatmentsNoRates(user);
}
