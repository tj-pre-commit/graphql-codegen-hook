#! /usr/bin/env node

'use strict';

const npmRun = require('npm-run');
const argv = require('yargs')
  .option('config', { alias: 'c', default: 'codegen.yml' })
  .option('verbose', { alias: 'v', default: false }).argv;

npmRun.exec('graphql-codegen', {cwd: __dirname}, function (err, stdout, stderr) {
  console.log(`stdout: ${stdout}`);
  if (err) {
    console.log(`Failed to start codeGen. ${err.message}`);
    if (argv.verbose) {
      console.error(err);
      console.log(stderr);
    }
  }
});
