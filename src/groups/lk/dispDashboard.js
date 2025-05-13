import {group} from 'k6';
import {detailDispDashboardRating} from "../../api/modules/dispDashboard/detailRating.js";
import {desktopStatistics} from "../../api/modules/dispDashboard/desktopStatistics.js";
import {desktopInfoWithRatingPreview} from "../../api/modules/dispDashboard/desktopInfoWithRatingPreview.js";

/** Группа тестов сервисов, вызываемых со страницы /demo/dispetcher/dispatcher_work_area/ */
export function dispDashboardGroup(user) {
    group('/demo/dispetcher/dispatcher_work_area/', function () {
        detailDispDashboardRating(user);
        desktopStatistics(user);
        desktopInfoWithRatingPreview(user);
    });
}
