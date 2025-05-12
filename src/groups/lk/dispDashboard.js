import {group} from 'k6';
import {detailDispDashboardRating} from "../../api/services/detailRating.js";
import {desktopStatistics} from "../../api/services/desktopStatistics.js";
import {ratingPreview} from "../../api/services/ratingPreview.js";
import {desktopInfo} from "../../api/services/desktopInfo.js";

/** Группа тестов сервисов, вызываемых со страницы /demo/dispetcher/dispatcher_work_area/ */
export function dispDashboardGroup(user) {
    group('/demo/dispetcher/dispatcher_work_area/', function () {
        detailDispDashboardRating(user);
        desktopStatistics(user);
        ratingPreview(user);
        desktopInfo(user);
    });
}
