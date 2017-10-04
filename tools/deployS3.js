import { chalkSuccess, chalkInfo } from './chalkConfig';
import s3 from './s3';
import path from 'path';
import dotenv from 'dotenv';

const environment = process.argv[2];
dotenv.config({ path: path.resolve(__dirname, `../.env.${environment}`) });

if (environment) {
  // Get current branch from git
  const exec = require('child_process').exec;
  exec('git symbolic-ref --short HEAD', function (err, stdout, stderr) {
    if (err) {
      throw new Error('ERROR(git): check your local branch.');
      process.exit(1);
    } else {
      const branch = stdout;
      console.log(chalkInfo(`Environment: ${environment}`));
      console.log(chalkInfo(`Branch you're in: ${branch}`));

      // Config readline
      const readline = require('readline');
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      // Confirm deploy action
      rl.question(chalkInfo('Do you want to continue? (y/n): '), function(answer) {
        rl.close();
        if (answer === 'y') {
          console.log(chalkInfo('Deploying to AWS S3...'));
          const client = new s3();
          client.clearBucket().then(() => {
            client.syncDir('../dist').then(() => {
              console.log(chalkSuccess('\nSUCCESS: ./dist folder was deployed to AWS S3'));
            });
          }).catch(err => {
            throw new Error(err);
            process.exit(1);
          });
        }
      });
    }
  });
}
