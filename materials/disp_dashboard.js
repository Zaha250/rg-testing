// Creator: WebInspector 537.36

import { sleep, group } from 'k6'
import http from 'k6/http'

import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js'

export const options = {}

export default function main() {
  let formData, response

  group('page_1 - https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/', function () {
    formData = new FormData()
    formData.boundary = '----WebKitFormBoundarydVpBSuQKZowzb51D'
    formData.append('service[0][name]', 'my_personal_data')

    response = http.post('https://rozentalgroup.ru/version2/entry.php?', formData.body(), {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
        Host: 'rozentalgroup.ru',
        Origin: 'https://rozentalgroup.ru',
        Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundarydVpBSuQKZowzb51D',
      },
    })

    response = http.post(
      'https://rozentalgroup.ru/version2/entry.php?',
      '{"name":"get_groups_and_executors"}',
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          Host: 'rozentalgroup.ru',
          Origin: 'https://rozentalgroup.ru',
          Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://rozentalgroup.ru/config/index.php', {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
        Host: 'rozentalgroup.ru',
        Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    formData = new FormData()
    formData.boundary = '----WebKitFormBoundaryDDemAi3WgDceLEgL'
    formData.append('service[0][name]', 'get_components')
    formData.append('service[0][attributes][category_item]', 'left_side_menu_item')
    formData.append('service[0][attributes][category_order]', 'left_side_menu_order')

    response = http.post('https://rozentalgroup.ru/version2/entry.php?', formData.body(), {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
        Host: 'rozentalgroup.ru',
        Origin: 'https://rozentalgroup.ru',
        Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryDDemAi3WgDceLEgL',
      },
    })

    formData = new FormData()
    formData.boundary = '----WebKitFormBoundaryYCZNW1zatwTnIFux'
    formData.append('service[0][name]', 'get_companies')
    formData.append('service[1][name]', 'get_components')
    formData.append('service[1][attributes][category]', 'configuration')

    response = http.post('https://rozentalgroup.ru/version2/entry.php?', formData.body(), {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
        Host: 'rozentalgroup.ru',
        Origin: 'https://rozentalgroup.ru',
        Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryYCZNW1zatwTnIFux',
      },
    })

    formData = new FormData()
    formData.boundary = '----WebKitFormBoundary7KI2SrFs83JnziOB'
    formData.append('service[0][name]', 'modules_enable_list')
    formData.append('service[1][name]', 'customer_navbar')

    response = http.post('https://rozentalgroup.ru/version2/entry.php?', formData.body(), {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
        Host: 'rozentalgroup.ru',
        Origin: 'https://rozentalgroup.ru',
        Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7KI2SrFs83JnziOB',
      },
    })

    response = http.get('https://rozentalgroup.ru/go/executors/get-free-executors', {
      headers: {
        Accept: 'application/json',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
        Host: 'rozentalgroup.ru',
        Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://rozentalgroup.ru/go/settings/config/dictionaries', {
      headers: {
        Accept: 'application/json',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
        Host: 'rozentalgroup.ru',
        Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.post(
      'https://rozentalgroup.ru/version2/entry.php?',
      '{"name":"chat_uk_get_chat_list","attributes":{"mode":"active","page":1,"pageSize":20}}',
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          Host: 'rozentalgroup.ru',
          Origin: 'https://rozentalgroup.ru',
          Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.post(
      'https://rozentalgroup.ru/go/chats/easy-life/get-chat-list',
      '{"query":"","status":"active","pagination":{"page":1,"per_page":20}}',
      {
        headers: {
          Accept: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          Host: 'rozentalgroup.ru',
          Origin: 'https://rozentalgroup.ru',
          Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://rozentalgroup.ru/config/', {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
      },
    })

    response = http.post(
      'https://rozentalgroup.ru/version2/entry.php',
      {
        'service[0][name]': 'detail_rating',
        'service[0][attributes][filters][date][from]': '',
        'service[0][attributes][filters][date][to]': '',
        'service[0][attributes][filters][location][mode]': 'city',
        'service[0][attributes][filters][location][value]': '',
        'service[0][attributes][company]': '4020779',
        'service[0][attributes][page]': '1',
        'service[0][attributes][count]': '10',
      },
      {
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
          Connection: 'keep-alive',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Host: 'rozentalgroup.ru',
          Origin: 'https://rozentalgroup.ru',
          Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'X-Requested-With': 'XMLHttpRequest',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.post(
      'https://rozentalgroup.ru/version2/entry.php',
      {
        'service[0][name]': 'desktop_statistics',
        'service[0][attributes][filters][date][from]': '',
        'service[0][attributes][filters][date][to]': '',
        'service[0][attributes][count]': '15',
        'service[0][attributes][company]': '4020779',
      },
      {
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
          Connection: 'keep-alive',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Host: 'rozentalgroup.ru',
          Origin: 'https://rozentalgroup.ru',
          Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'X-Requested-With': 'XMLHttpRequest',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.post(
      'https://rozentalgroup.ru/version2/entry.php',
      {
        'service[0][name]': 'rating_preview',
        'service[0][attributes][filters][date][from]': '',
        'service[0][attributes][filters][date][to]': '',
        'service[0][attributes][filters][location][mode]': 'city',
        'service[0][attributes][filters][location][value]': '',
        'service[0][attributes][company]': '4020779',
        'service[1][name]': 'desktop_info',
        'service[1][attributes][filters][date][from]': '28.04.2025',
        'service[1][attributes][filters][date][to]': '28.04.2025',
        'service[1][attributes][company]': '4020779',
      },
      {
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
          Connection: 'keep-alive',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Host: 'rozentalgroup.ru',
          Origin: 'https://rozentalgroup.ru',
          Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'X-Requested-With': 'XMLHttpRequest',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.post(
      'https://rozentalgroup.ru/version2/entry.php?',
      '{"name":"chat_uk_get_new_messages"}',
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          Host: 'rozentalgroup.ru',
          Origin: 'https://rozentalgroup.ru',
          Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.post(
      'https://rozentalgroup.ru/version2/entry.php?',
      '{"name":"get_chat_messages"}',
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          Host: 'rozentalgroup.ru',
          Origin: 'https://rozentalgroup.ru',
          Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.post(
      'https://rozentalgroup.ru/version2/entry.php?',
      '{"name":"chat_uk_get_new_messages"}',
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          Host: 'rozentalgroup.ru',
          Origin: 'https://rozentalgroup.ru',
          Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.post(
      'https://rozentalgroup.ru/version2/entry.php?',
      '{"name":"get_chat_messages"}',
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          Host: 'rozentalgroup.ru',
          Origin: 'https://rozentalgroup.ru',
          Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://rozentalgroup.ru/go/chats/easy-life/get-unread-messages', {
      headers: {
        Accept: 'application/json',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        Connection: 'keep-alive',
        Host: 'rozentalgroup.ru',
        Referer: 'https://rozentalgroup.ru/demo/dispetcher/dispatcher_work_area/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
  })

  // Automatically added sleep
  sleep(1)
}
