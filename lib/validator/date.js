'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _rule = require('../rule/');

var _rule2 = _interopRequireDefault(_rule);

function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  // console.log('validate on %s value', value);
  if (validate) {
    if (value === undefined && !rule.required) {
      return callback();
    }
    _rule2['default'].required(rule, value, source, errors, options);
    if (value) {
      _rule2['default'].type(rule, value, source, errors, options);
      _rule2['default'].range(rule, value.getTime(), source, errors, options);
    }
  }
  callback(errors);
}

exports['default'] = date;
module.exports = exports['default'];