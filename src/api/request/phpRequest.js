import http from 'k6/http';
import {getBasicAuth} from "./utils.js";

const DOMAIN = 'https://test.rozentalgroup.ru';
export const PHP_API_URL = `${DOMAIN}/version2/entry.php`;
export const GO_API_URL = `${DOMAIN}/go`;

export class PhpRequest {
    BASIC_AUTH;

    constructor({login, password}) {
        this.BASIC_AUTH = `Basic ${getBasicAuth(login, password)}`;
    }

    _defaultHeaders = () => {
        return {
            Authorization: this.BASIC_AUTH
        }
    }

    _prepareData = ({service, attributes}) => {
        return JSON.stringify({
            name: service,
            attributes,
        });
    }

    post = ({service, attributes}, options = {}) => {
        const data = this._prepareData({service, attributes});

        return http.post(
            `${PHP_API_URL}?_${service}`,
            data,
            {
                headers: {
                    ...this._defaultHeaders(),
                    'Content-Type': 'application/json',
                    Accept: 'application/json, text/plain, */*',
                    ...(options.headers ? options.headers : {})
                }
            });
    }

    postFormData = (data, options = {}) => {
        return http.post(
            PHP_API_URL,
            data,
            {
                headers: {
                    ...this._defaultHeaders(),
                    'Content-Type': 'multipart/form-data',
                    ...(options.headers ? options.headers : {})
                }
            });
    }
}
