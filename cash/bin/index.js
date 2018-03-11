#!/usr/bin/env node

const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

const config = new Conf();

const argv = process.argv.slice(2);

/***
 * Show the helpers with the usage, commands and examples
 * @param {argument} argv
***/
helpers(argv);

/***
* Command will load a default converter 
***/
const command = {
  'amount': argv[0] || 1,
  'from': argv[1] || config.get('defaultFrom', 'USD'),
  'to':
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP'])
};

/***
 * Call the cash function in the Cash.js file
 * @param {object} command - default parameters 
***/
cash(command);
