import {sleep, group} from 'k6';
import http from 'k6/http';
import {SharedArray} from 'k6/data';
import {check} from 'k6';

const courseId = 111;
const lessonId = 22751;

const users = new SharedArray("users", function () {

    return open('./users.csv')
        .split('\n')
        .slice(1)
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .map(line => {
            const [login, password] = line.split(',');
            return {login, password};
        });
});

export const options = {
    stages: [
        {duration: '60s', target: 50},
        {duration: '120s', target: 140},
        {duration: '60s', target: 100},
    ],
    thresholds: {
        http_req_duration: ['p(95)<1000'],
    },
};

const ROUTE_GROUPS = {
    afterlogin: [
        '/api/mobile/settings',
        '/api/capabilities',
        '/api/reference/citizenship',
        '/api/profile/files/education_docs',
        '/api/profile/full/',
        '/api/mobile/settings', // дубль
        '/api/reference/citizenship', // дубль
        '/api/profile/files/education_docs',  // дубль
        '/api/profile/full/', // дубль
        '/api/capabilities',   // дубль
        '/api/profile/rating?my_workplace=0&period=all',
        '/api/avatar',
        '/api/profile/rating?my_workplace=0&period=all',  // дубль
        '/api/profile/full/', // дубль

        '/api/reference/workplace?only_visible=0',
        '/api/reference/workplace?only_visible=0',  // дубль
        '/api/user/banners',
        '/api/banners/duration',
        '/api/user/courses/search',
        '/api/courses/formats/created',
        '/api/user/courses/count',
    ],
    startpagef5: [
        '/api/ping',
        '/api/mobile/settings',
        '/api/capabilities',
        '/api/reference/citizenship',
        '/api/profile/files/education_docs',
        '/api/profile/full/',
        '/api/mobile/settings', // дубль
        '/api/profile/rating?my_workplace=0&period=all',
        '/api/avatar',
        '/api/profile/rating?my_workplace=0&period=all',  // дубль
        '/api/profile/full/', // дубль

        '/api/reference/workplace?only_visible=0',
        '/api/user/banners',
        '/api/banners/duration',
        '/api/user/courses/search',
        '/api/courses/formats/created',
        '/api/user/courses/count',
    ],
    coursescatalog: [
        '/api/profile/rating?my_workplace=0&period=all',
        '/api/profile/full/',
        '/api/capabilities',
        '/api/profile/rating?my_workplace=0&period=all',  // дубль

        '/api/user/banners',
        '/api/banners/duration',
        '/api/courses?course_status=publish&limit=10&offset=0',
        '/api/course-categories',
        '/api/courses/enrolled_status',
        '/api/competences',
        '/api/courses/formats/created',
        '/api/courses/keywords',
        '/api/courses?course_status=publish&limit=10&offset=0'   // дубль

    ],
    rating: [
        '/api/profile/rating?my_workplace=0&period=all',
        '/api/profile/full/',
        '/api/capabilities',
        '/api/profile/rating?my_workplace=0&period=all',  // дубль

        '/api/profile/rating?my_workplace=0&period=week',
        '/api/profile/clubs',
        '/api/rating?offset=0&limit=30&my_workplace=false&period=week',
        '/api/rating?offset=0&limit=31&my_workplace=false&period=week&isFetchAllRatings=true',
    ],
    profile: [
        '/api/profile/rating?my_workplace=0&period=all',
        '/api/profile/rating?my_workplace=0&period=all',  // дубль
        '/api/reference/citizenship',
        '/api/reference/workplace?only_visible=0',
        '/api/profile/files/education_docs',
        '/api/profile/full/',
        '/api/profile/full/',  // дубль
        '/api/capabilities',

        '/api/badges?limit=12&only_received=true',
        '/api/rating/levels',
        '/api/rating/top?limit=10',
    ],
    coursehistory: [
        '/api/profile/rating?my_workplace=0&period=all',
        '/api/profile/full/',
        '/api/profile/courses-history'
    ],
    coursebyid: [
        '/api/ping',
        '/api/mobile/settings',
        '/api/capabilities',
        '/api/reference/citizenship',
        '/api/reference/workplace?only_visible=0',
        '/api/profile/files/education_docs',
        '/api/profile/full/',
        '/api/mobile/settings', // дубль
        '/api/profile/rating?my_workplace=0&period=all',
        '/api/avatar',
        '/api/profile/rating?my_workplace=0&period=all',  // дубль
        '/api/profile/full/', // дубль
        '/api/courses/formats/created',

        `/api/course/${courseId}/visited`,
        `/api/courses/${courseId}`,
        `/api/courses/${courseId}/content`,
        `/api/courses/${courseId}/feedbacks`,
        `/api/courses/${courseId}/competences`,
        `/api/courses/${courseId}/summary`,
        `/api/course/${courseId}/visited`,  // дубль
        `/api/badges?lesson_id=${lessonId}`,
        `/api/badges?lesson_id=${lessonId}`,  // дубль

    ]
};

function randomSleep(min = 2, max = 4) {
    sleep(Math.random() * (max - min) + min);
}

export default function main() {
    const user = users[__VU % users.length];

    group('Авторизация', function () {
        const loginRes = http.post(
            'https://featurey.front.fss.local/api/auth/login',
            JSON.stringify({
                login: user.login,
                password: user.password,
                mobile_application: false,
            }),
            {
                headers: {
                    'content-type': 'application/json',
                },
                tags: {endpoint: '/api/auth/login'},
            }
        );

        const loginOk = check(loginRes, {'Логин успешен': (r) => r.status === 200});
        if (!loginOk) return;

        const accessToken = loginRes.headers['Authorization'];
        const refreshToken = loginRes.headers['Refresh'];
        const cookies = loginRes.cookies;

        const cookieMap = Object.entries(cookies).reduce((acc, [name, value]) => {
            acc[name] = value[0].value;
            return acc;
        }, {});

        cookieMap['jwt_authorization'] = accessToken;
        cookieMap['jwt_refresh'] = refreshToken;

        const cookieHeader = Object.entries(cookieMap)
            .map(([name, value]) => `${name}=${value}`)
            .join('; ');

        const headers = {
            'authorization': `Bearer ${accessToken}`,
            'cookie': cookieHeader,
        };


        const PATCH_ENDPOINTS = [
            `/api/course/${courseId}/visited`
        ];
        for (const [groupName, endpoints] of Object.entries(ROUTE_GROUPS)) {
            group(`Раздел: ${groupName}`, function () {
                //console.log(`▶️ Открываю раздел: ${groupName}`);

                for (const endpoint of endpoints) {
                    const url = `https://featurey.front.fss.local${endpoint}`;
                    let res;
                    if (PATCH_ENDPOINTS.includes(endpoint)) {
                        res = http.patch(url, null, {headers});
                    } else {
                        res = http.get(url, {headers});
                    }
                    const ok = check(res, {[`${endpoint} OK`]: (r) => res.status === 200});

                    if (endpoint === '/api/user/courses/search' && res.status === 200) {
                        try {

                            const body = JSON.parse(res.body)
                            const courses = body.data || []
                            for (const course of courses) {
                                if (course.preview && course.preview.src) {
                                    const imgRes = http.get(course.preview.src, {headers})
                                    check(imgRes, {[`preview ${course.preview.name} OK`]: (res) => res.status === 200})
                                    sleep(0.01)
                                }
                            }
                        } catch (e) {
                            console.error('❌ Ошибка парсинга ответа от /api/user/courses/search', e)
                        }
                    }
                    if (endpoint === '/api/profile/full/' && res.status === 200) {
                        try {
                            const bodyprofile = JSON.parse(res.body)

                            const avatarpath = bodyprofile.data.avatar.path
                            const imgRes = http.get(avatarpath, {headers})
                            check(imgRes, {[`preview ${avatarpath} OK`]: (res) => res.status === 200})
                        } catch (e) {
                            console.error('❌ Ошибка парсинга ответа от/api/profile/full/', e)
                        }
                    }
                }
            });
            randomSleep(); // пауза между группами роутов
        }
    });

    randomSleep(1, 3); // пауза между итерациями
}
