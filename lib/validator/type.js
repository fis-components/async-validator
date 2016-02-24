'use strict';

var rules = require('../rule/');

var type = function type(rule, value, callback, source, options) {
  var errors = [];
  rules.type(rule, value, source, errors, options);
  callback(errors);
};

module.exports = type;