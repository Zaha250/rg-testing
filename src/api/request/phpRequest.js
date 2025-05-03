import http from 'k6/http';
import {getBasicAuth} from "./utils.js";

const API_URL = 'https://test.rozentalgroup.ru/version2/entry.php';

export class PhpRequest {
    BASIC_AUTH;

    constructor({login, password}) {
        this.BASIC_AUTH = `Basic ${getBasicAuth(login, password)}`;
    }

    _defaultHeaders = () => {
        return {
            Authorization: this.BASIC_AUTH,
            'Content-Type': 'application/json',
            Accept: 'application/json, text/plain, */*',
        }
    }

    _prepareData = ({service, attributes}) => {
        // return packageFormData(service, attributes);
        return JSON.stringify({
            name: service,
            attributes,
        });
    }

    post = ({service, attributes}, options = {}) => {
        const data = this._prepareData({service, attributes});

        return http.post(
            `${API_URL}?_${service}`,
            data,
            {
                headers: {
                    ...this._defaultHeaders(),
                    ...(options.headers ? options.headers : {})
                }
            });
    }
}
