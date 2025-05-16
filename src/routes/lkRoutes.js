import express from 'express';
import {exec} from "node:child_process";
import {getSummaryFileName} from "../utils/getSummaryFileName.js";

export const lkRouter = express.Router();

lkRouter.get('/start-testing', (req, res) => {
    const command = 'PLATFORM=web docker-compose up';

    exec(command, (err, stdout, stderr) => {
        if(err) {
            console.error(`❌ Ошибка запуска ${command}: ${err.message}`);
            res.status(500).send({
                error: 'Ошибка запуска тестирования: ' + err.message
            });
            return;
        }
        console.log(stdout);
        res.send(`${stdout}\n${getSummaryFileName('web')}`);
    });
});
