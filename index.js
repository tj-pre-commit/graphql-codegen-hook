'use strict';

const argv = require('yargs')
  .option('config', { alias: 'c', default: 'codegen.yml' })
  .option('verbose', { alias: 'v', default: false }).argv;

const { spawn } = require('child_process');
const codeGen = spawn('graphql-codegen', ['--config', argv.config]);

codeGen.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

codeGen.on('close', (code) => {
  if (argv.verbose) {
    console.log(`child process close all stdio with code ${code}`);
  }
});

codeGen.on('exit', (code) => {
  if (argv.verbose) {
    console.log(`child process exited with code ${code}`);
  }
});
