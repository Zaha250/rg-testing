import {pad} from "./index.js";

/** Функция, генерирующая название html файла с результатами тестирования */
export function getSummaryFileName (postfix = 'web') {
    const now = new Date();

    const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;

    return `${date}-summary-${postfix}.html`;
}
