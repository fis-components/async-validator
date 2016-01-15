'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var formatRegExp = /%[sdj%]/g;

exports['default'] = {
  format: function format() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var i = 1;
    var f = args[0];
    var len = args.length;
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += ' ' + arg;
    }
    return str;
  },

  isEmptyValue: function isEmptyValue(value, type) {
    if (value === undefined || value === null) {
      return true;
    }
    if (type === 'array' && Array.isArray(value) && !value.length) {
      return true;
    }
    if (type === 'string' && !value) {
      return true;
    }
    return false;
  }
};
module.exports = exports['default'];