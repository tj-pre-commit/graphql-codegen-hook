#! /usr/bin/env node

'use strict';

const npmRun = require('npm-run');
const argv = require('yargs')
  .option('config', { alias: 'c', required: true })
  .option('verbose', { alias: 'v', default: false }).argv;

var child = npmRun.spawn('graphql-codegen', [`${argv.config}`], {cwd: __dirname});


child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});


child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
  process.exit(1);
});


child.on('close', (code) => {
  if (code !== 0) {
    console.log(`graphql-codegen-hook process exited with code ${code}`);
  }
});
