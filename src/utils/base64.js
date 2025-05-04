export function encodeBase64(str) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    let encoded = '';
    let i = 0;

    while (i < str.length) {
        const c1 = str.charCodeAt(i++);
        const c2 = str.charCodeAt(i++);
        const c3 = str.charCodeAt(i++);

        const e1 = c1 >> 2;
        const e2 = ((c1 & 3) << 4) | (c2 >> 4);
        const e3 = isNaN(c2) ? 64 : (((c2 & 15) << 2) | (c3 >> 6));
        const e4 = isNaN(c3) ? 64 : (c3 & 63);

        encoded += chars.charAt(e1) + chars.charAt(e2) + chars.charAt(e3) + chars.charAt(e4);
    }

    return encoded;
}
