import {exec} from "node:child_process";

const command = 'docker-compose up';

exec(command, (err, stdout, stderr) => {
   if(err) {
       console.error(`❌ Ошибка запуска ${command}: ${err.message}`);
       return;
   }
    console.log(stdout);
});
