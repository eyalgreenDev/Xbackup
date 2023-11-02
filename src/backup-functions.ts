import * as fs from 'fs';
import * as fse from 'fs-extra';
export function backupDir(path: string, callback: (error: Error | null) => void): void {
    const root = './xbackup';
    const date = new Date().toLocaleString().replace(/[:/]/g, '_');
    const backupPath = `${root}/xbackup_${date}`;
    fs.mkdir(root, {recursive: true},(err)=>{
      if(err){
        return callback(err);
      }
      fse.copy(path,backupPath,(copyErr)=>{
        if(copyErr){
          return callback(copyErr);
        }
        console.log(`XBackup directory created: ${backupPath}`);
        callback(null);
      });
    });
  }