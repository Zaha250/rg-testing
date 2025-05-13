import {group} from 'k6';
import {detailDispDashboardRating} from "../../api/modules/dispDashboard/detailRating.js";
import {desktopStatistics} from "../../api/modules/dispDashboard/desktopStatistics.js";
import {ratingPreview} from "../../api/modules/dispDashboard/ratingPreview.js";
import {desktopInfo} from "../../api/modules/dispDashboard/desktopInfo.js";

/** Группа тестов сервисов, вызываемых со страницы /demo/dispetcher/dispatcher_work_area/ */
export function dispDashboardGroup(user) {
    group('/demo/dispetcher/dispatcher_work_area/', function () {
        detailDispDashboardRating(user);
        desktopStatistics(user);
        ratingPreview(user);
        desktopInfo(user);
    });
}
