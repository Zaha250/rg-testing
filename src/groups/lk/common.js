import {group} from 'k6';
import {auth} from "../../api/modules/common/auth.js";
import {myPersonalData} from "../../api/modules/user/myPersonalData.js";
import {getGroupsAndExecutors} from "../../api/modules/user/getGroupsAndExecutors.js";
import {getSidebarComponents} from "../../api/modules/common/getSidebarComponents.js";
import {chatUKGetChatList} from "../../api/modules/chats/chatUKGetChatList.js";
import {chatUKGetNewMessages} from "../../api/modules/chats/chatUKGetNewMessages.js";
import {getChatMessages} from "../../api/modules/chats/getChatMessages.js";
import {getCompaniesAngLabelConfiguration} from "../../api/modules/common/getCompaniesAngLabelConfiguration.js";
import {getModulesAndCustomerNavbar} from "../../api/modules/common/getModulesAndCustomerNavbar.js";
import {getDictionaries} from "../../api/modules/common/getDictionaries.js";
import {getFreeExecutors} from "../../api/modules/user/getFreeExecutors.js";

/** Группа тестов общих сервисов */
export function commonGroup(user) {
    group('Общие PHP сервисы', function () {
        const authData = auth(user);
        const accessToken = authData['access_token'];

        myPersonalData(user);
        getGroupsAndExecutors(user);
        getSidebarComponents(user);
        getCompaniesAngLabelConfiguration(user);
        getModulesAndCustomerNavbar(user);
        chatUKGetChatList(user);
        chatUKGetNewMessages(user);
        getChatMessages(user);
        getDictionaries(accessToken);
        getFreeExecutors(accessToken);
    });
}
