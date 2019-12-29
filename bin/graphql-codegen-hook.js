#! /usr/bin/env node

'use strict';
const minimatch = require('minimatch');
const shell = require('shelljs');

const argv = require('yargs')
  .option(
    'config',
    {
      alias: 'c',
      required: true,
      type: 'string',
      description: 'Yaml config file'
    },
  )
  .option(
    'verbose',
    {
      alias: 'v',
      default: false,
      type: 'boolean',
      description: 'Turn on/off verbose output'
    },
  )
  .command(
    '$0 [filenames..]',
    'Runs graphql-codegen based on changes to .(ts/js(x)|graphql) files',
  )
  .help()
  .argv;

const { filenames = [], verbose = false } = argv;
const fileMatches = filenames.filter(
  minimatch.filter("*.+(tsx|jsx|js|ts|graphql)", { matchBase: true }),
);
const shouldExecute = fileMatches.length > 0;

if (!shouldExecute) {
  if (verbose) {
    shell.echo('No matching files found requires: js(x)|ts(x)');
  }
  return 0;
} else {
  if (verbose) {
    shell.echo(`Matching files found: ${fileMatches.join(", ")}`);
  }
  const basePath = shell.pwd().toString();

  shell.cd(basePath);
  
  const child = shell.exec(`npx graphql-codegen --config ${argv.config}`, {
    async: true,
    verbose
  });
  
  child.stderr.on('data', function (data) {
    console.error(data);
    shell.exit(1);
  });
}
