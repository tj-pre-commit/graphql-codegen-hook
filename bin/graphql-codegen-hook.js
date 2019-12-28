#! /usr/bin/env node

'use strict';

const argv = require('yargs')
  .option('config', { alias: 'c', required: true, type: 'string' })
  .option('verbose', { alias: 'v', default: false, type: 'boolean' })
  .command('$0 [filenames..]', 'Changed filenames', {})
  .help()
  .argv;

const { filenames = [] } = argv;
const shouldExecute = filenames.filter(minimatch.filter("*.+(tsx?|jsx?)", { matchBase: true })).length > 0;

const shell = require('shelljs');
const basePath = shell.pwd().toString();

shell.cd(basePath);

if (!shouldExecute) {
  shell.exit(0);
} else {
  const child = shell.exec(`npx graphql-codegen --config ${argv.config}`, {
    async: true,
    verbose: argv.verbose
  });
  
  child.stderr.on('data', function (data) {
    console.error(data);
    shell.exit(1);
  });
}
