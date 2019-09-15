#! /usr/bin/env node

'use strict';

const argv = require('yargs')
  .option('config', { alias: 'c', required: true })
  .option('verbose', { alias: 'v', default: false }).argv;


const shell = require('shelljs');
const basePath = shell.pwd().toString();

shell.cd(basePath);

var child = shell.exec(`graphql-codegen --config ${argv.config}`, { async: true, verbose: argv.verbose });


child.stdout.on('data', function(data) {
  console.log(`Stdout: ${data}`)
});

child.stderr.on('data', function (data) {
  console.error(data);
  shell.exit(1);
});
