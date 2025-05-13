import {group} from 'k6';
import {
    myPersonalData,
    getGroupsAndExecutors,
    getFreeExecutors
} from "../../api/modules/user/index.js";
import {
    getSidebarComponents,
    getDictionaries,
    getModulesAndCustomerNavbar,
    getCompaniesAngLabelConfiguration
} from "../../api/modules/common/index.js";
import {
    chatUKGetChatList,
    chatUKGetNewMessages,
    getChatMessages
} from "../../api/modules/chats/index.js";

/** Группа тестов общих сервисов */
export function commonGroup(user) {
    group('Общее api', function () {
        myPersonalData(user);
        getGroupsAndExecutors(user);
        getSidebarComponents(user);
        getCompaniesAngLabelConfiguration(user);
        getModulesAndCustomerNavbar(user);
        chatUKGetChatList(user);
        chatUKGetNewMessages(user);
        getChatMessages(user);

        getDictionaries(user.accessToken);
        getFreeExecutors(user.accessToken);
    });
}
