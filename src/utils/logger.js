import path from "node:path";

function resolve(args) {
    return path.resolve(__dirname, '..', '..', args);
}

class Logger {
    defaultLogFilePath = resolve('logs/');

    /** Вывод данных в консоль */
    info(data) {
        console.log(data);
    }

    /** Логирование в файл */
    print(data, path) {

    }
}

export const logger = new Logger();
