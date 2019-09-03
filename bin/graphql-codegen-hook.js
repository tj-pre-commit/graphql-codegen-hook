#! /usr/bin/env node

'use strict';

const path = require('path');
const { createConfig } = require('@graphql-codegen/cli/dist/commonjs/config');
const process = require('process');
const argv = require('yargs')
  .option('config', { alias: 'c', required: true })
  .option('verbose', { alias: 'v', default: false }).argv;


const { generate } = require('@graphql-codegen/cli');

const configPath = path.resolve(process.cwd(), argv.config);

const config = createConfig({ config: configPath });

config.then(config => {
  return generate(config)
    .then(() => {
      process.exit(0);
    })
    .catch(error => {
      process.exit(1);
    });
}).catch(error => {
  process.exit(1);
});
