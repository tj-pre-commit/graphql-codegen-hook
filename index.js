'use strict';

const npmRun = require('npm-run');
const argv = require('yargs')
  .option('config', { alias: 'c', default: 'codegen.yml' })
  .option('verbose', { alias: 'v', default: false }).argv;

npmRun.exec('graphql-codegen', {cwd: __dirname}, function (err, stdout, stderr) {
  console.log(`stdout: ${stdout}`);
  if (argv.verbose) {
    if (err) {
      console.log(`Failed to start codeGen. ${err.message}`);
      console.error(err);
    }
    console.log(stderr);
  }
});
