import {group} from 'k6';
import {myPersonalData} from "../../api/modules/user/myPersonalData.js";
import {getGroupsAndExecutors} from "../../api/modules/user/getGroupsAndExecutors.js";
import {getSidebarComponents} from "../../api/modules/common/getSidebarComponents.js";
import {getCompanies} from "../../api/modules/user/getCompanies.js";
import {getLabelConfiguration} from "../../api/modules/common/getLabelConfiguration.js";
import {getModules} from "../../api/modules/common/getModules.js";
import {getCustomerNavbar} from "../../api/modules/common/getCustomerNavbar.js";
import {chatUKGetChatList} from "../../api/modules/chats/chatUKGetChatList.js";
import {chatUKGetNewMessages} from "../../api/modules/chats/chatUKGetNewMessages.js";
import {getChatMessages} from "../../api/modules/chats/getChatMessages.js";

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
