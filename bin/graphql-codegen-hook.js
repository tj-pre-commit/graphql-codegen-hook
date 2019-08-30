#! /usr/bin/env node

'use strict';

const path = require('path');
const process = require('process');
const argv = require('yargs')
  .option('config', { alias: 'c', required: true })
  .option('verbose', { alias: 'v', default: false }).argv;


const { executeCodegen, generate } = require('@graphql-codegen/cli');

const configPath = path.resolve(process.cwd(), argv.config);

executeCodegen({
  configFilePath: configPath,
});
