import {group} from 'k6';
import {myPersonalData} from "../../api/services/myPersonalData.js";
import {getGroupsAndExecutors} from "../../api/services/getGroupsAndExecutors.js";
import {getSidebarComponents} from "../../api/services/getSidebarComponents.js";
import {getCompanies} from "../../api/services/getCompanies.js";
import {getLabelConfiguration} from "../../api/services/getLabelConfiguration.js";
import {getModules} from "../../api/services/getModules.js";
import {getCustomerNavbar} from "../../api/services/getCustomerNavbar.js";
import {chatUKGetChatList} from "../../api/services/chatUKGetChatList.js";
import {chatUKGetNewMessages} from "../../api/services/chatUKGetNewMessages.js";
import {getChatMessages} from "../../api/services/getChatMessages.js";

/** Группа тестов общих сервисов */
export function commonGroup(user) {
    group('Общие PHP сервисы', function () {
        myPersonalData(user);
        getGroupsAndExecutors(user);
        getSidebarComponents(user);
        getCompanies(user);
        getLabelConfiguration(user);
        getModules(user);
        getCustomerNavbar(user);
        chatUKGetChatList(user);
        chatUKGetNewMessages(user);
        getChatMessages(user);
    });
}
