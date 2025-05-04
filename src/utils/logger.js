import path from "node:path";
import {writeFile} from "node:fs/promises";
import {__dirname} from './const.js';

function resolve(args) {
    return path.resolve(__dirname, '..', '..', args);
}

class Logger {

    /** Вывод данных в консоль */
    info(data) {
        console.log(data);
    }

    /** Логирование в файл */
    async printJson(data) {
        try {
            const fileLogName = `${new Date().toISOString()}.json`;
            const formattedData = JSON.stringify(data, null, 2);

            await writeFile(
                resolve(`logs/${fileLogName}`),
                formattedData
            );
        } catch (e) {
            console.error('Ошибка записи лога в файл: ' + e);
        }
    }
}

export const logger = new Logger();
