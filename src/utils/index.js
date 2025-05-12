export function pad(value) {
    if(Number(value) < 10) {
        return '0' + value;
    }
    return value.toString();
}
