import * as readline from 'readline';
import {backupDir} from './backup-functions';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Enter the source folder path: ',(path: string)=>{
  backupDir(path,(err)=>{
    if(err){
      console.error();
    }else{
      console.log('Directory backup completed successfully');
    }
    rl.close();
  });
});