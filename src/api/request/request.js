import http from 'k6/http';

const DOMAIN = 'https://test.rozentalgroup.ru';
export const GO_API_URL = `${DOMAIN}/go`;

export class Request {
    constructor({token}) {
        this.TOKEN = token;
        this._defaultHeaders = {
            Authorization: `Bearer ${this.TOKEN}`,
            'Content-Type': 'application/json',
            Accept: 'application/json, text/plain, */*',
        };
    }

    _prepareData(data) {
        return JSON.stringify(data);
    }

    get(url, options = {}) {
        const headers = Object.assign({}, this._defaultHeaders, options.headers || {});
        return http.get(
            `${GO_API_URL}${url}`,
            { headers }
        );
    }

    post(url, data = {}, options = {}) {
        const preparedData = this._prepareData(data);
        const headers = Object.assign({}, this._defaultHeaders, options.headers || {});

        return http.post(
            `${GO_API_URL}${url}`,
            preparedData,
            { headers }
        );
    }
}
