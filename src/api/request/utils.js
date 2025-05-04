import {encodeBase64} from "../../utils/base64.js";

export function getBasicAuth(login, password) {
    // return Buffer.from(`${login}:${password}`).toString('base64');
    return encodeBase64(`${login}:${password}`);
}

