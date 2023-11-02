"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const backup_functions_1 = require("./backup-functions");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Enter the source folder path: ', (path) => {
    (0, backup_functions_1.backupDir)(path, (err) => {
        if (err) {
            console.error();
        }
        else {
            console.log('Directory backup completed successfully');
        }
        rl.close();
    });
});
