#! /usr/bin/env node

'use strict';
const minimatch = require('minimatch');
const shell = require('shelljs');

const argv = require('yargs')
  .option('config', { alias: 'c', required: true, type: 'string' })
  .option('verbose', { alias: 'v', default: false, type: 'boolean' })
  .command('$0 [filenames..]', 'Changed filenames', {})
  .help()
  .argv;

const { filenames = [] } = argv;
const fileMatches = filenames.filter(minimatch.filter("*.+(tsx|jsx|js|ts)", { matchBase: true }));
const shouldExecute = fileMatches.length > 0;

if (!shouldExecute) {
  shell.exit(0);
} else {
  const basePath = shell.pwd().toString();

  shell.cd(basePath);
  
  const child = shell.exec(`npx graphql-codegen --config ${argv.config}`, {
    async: true,
    verbose: argv.verbose
  });
  
  child.stderr.on('data', function (data) {
    console.error(data);
    shell.exit(1);
  });
}
