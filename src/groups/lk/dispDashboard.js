import {group} from 'k6';
import {
    detailDispDashboardRating,
    desktopInfoWithRatingPreview,
    desktopStatistics
} from "../../api/modules/dispDashboard/index.js";

/** Группа тестов сервисов, вызываемых со страницы /demo/dispetcher/dispatcher_work_area/ */
export function dispDashboardGroup(user) {
    group('/demo/dispetcher/dispatcher_work_area/', function () {
        detailDispDashboardRating(user);
        desktopStatistics(user);
        desktopInfoWithRatingPreview(user);
    });
}
