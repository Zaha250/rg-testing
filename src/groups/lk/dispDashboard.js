import {group} from 'k6';
import {detailDispDashboardRating} from "../../api/services/detailRating.js";

/** Группа тестов сервисов, вызываемых со страницы /demo/dispetcher/dispatcher_work_area/ */
export function dispDashboardGroup(user) {
    group('/demo/dispetcher/dispatcher_work_area/', function () {
        detailDispDashboardRating(user);
    });
}
