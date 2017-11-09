'use strict';

var rule = require('../../../lib/rules/valid-name');

var RuleTester = require('eslint').RuleTester;
var ruleTester = new RuleTester();

ruleTester.run('Non-ascii', rule, {
  valid : [
    { code: 'function name(argument) {}' },
    { code: 'var test;' },
    { code: 'var object = { a: 1 };' }
  ],

  invalid : [
    { 
        code: 'function nаme(argumеnt) {}',
        errors: [
            { message: 'Non-ascii character а found in nаme' },
            { message: 'Non-ascii character е found in argumеnt' }
        ]
    },
    {
        code : 'var tеst;',
        errors: [{ message: 'Non-ascii character е found in tеst' }]
    },
    {
        code : 'var objеct = { а: 1 };',
        errors: [
            { message: 'Non-ascii character е found in objеct' },
            { message: 'Non-ascii character а found in а' }
        ]
    }
  ]
});
