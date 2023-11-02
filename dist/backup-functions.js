"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backupDir = void 0;
const fs = require("fs");
const fse = require("fs-extra");
function backupDir(path, callback) {
    const root = './xbackup';
    const date = new Date().toLocaleString().replace(/[:/]/g, '_');
    const backupPath = `${root}/xbackup_${date}`;
    fs.mkdir(root, { recursive: true }, (err) => {
        if (err) {
            return callback(err);
        }
        fse.copy(path, backupPath, (copyErr) => {
            if (copyErr) {
                return callback(copyErr);
            }
            console.log(`XBackup directory created: ${backupPath}`);
            callback(null);
        });
    });
}
exports.backupDir = backupDir;
