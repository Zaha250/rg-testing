import {group} from 'k6';
import {myPersonalData} from "../../api/services/myPersonalData.js";
import {getGroupsAndExecutors} from "../../api/services/getGroupsAndExecutors.js";
import {getSidebarComponents} from "../../api/services/getSidebarComponents.js";

/** Группа тестов общих сервисов */
export function commonGroup(user) {
    group('Общие PHP сервисы', function () {
        myPersonalData(user);
        getGroupsAndExecutors(user);
        getSidebarComponents(user);
    });
}
