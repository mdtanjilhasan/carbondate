"use strict";

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (root, factory) {
  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // CommonJS
    module.exports = factory(require('dayjs'), require('dayjs/plugin/utc'), require('dayjs/plugin/timezone'), require('dayjs/plugin/isSameOrBefore'), require('dayjs/plugin/isSameOrAfter'), require('dayjs/plugin/isLeapYear'), require('dayjs/plugin/isBetween'), require('dayjs/plugin/relativeTime'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['dayjs', 'dayjs/plugin/utc', 'dayjs/plugin/timezone', 'dayjs/plugin/isSameOrBefore', 'dayjs/plugin/isSameOrAfter', 'dayjs/plugin/isLeapYear', 'dayjs/plugin/isBetween', 'dayjs/plugin/relativeTime'], factory);
  } else {
    // Browser globals (root is the window)
    root.CarbonDate = factory(root.dayjs, root.utc, root.timezone, root.isSameOrBefore, root.isSameOrAfter, root.isLeapYear, root.isBetween, root.relativeTime);
  }
})(typeof self !== 'undefined' ? self : void 0, function (dayjs, utc, timezone, isSameOrBefore, isSameOrAfter, isLeapYear, isBetween, relativeTime) {
  // Register the plugins
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(isSameOrBefore);
  dayjs.extend(isSameOrAfter);
  dayjs.extend(isLeapYear);
  dayjs.extend(isBetween);
  dayjs.extend(relativeTime);

  // Now inside the factory, you have access to `dayjs`
  var _isTime = /*#__PURE__*/new WeakMap();
  var _CarbonDate_brand = /*#__PURE__*/new WeakSet();
  var CarbonDate = /*#__PURE__*/function () {
    function CarbonDate() {
      var _timezone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      _classCallCheck(this, CarbonDate);
      _classPrivateMethodInitSpec(this, _CarbonDate_brand);
      // Protected properties are usually prefixed with an underscore _
      // Private properties and methods are usually prefixed with a hash #
      _classPrivateFieldInitSpec(this, _isTime, false);
      this.value = null;
      _assertClassBrand(_CarbonDate_brand, this, _setTimeZone).call(this, _timezone);
    }
    return _createClass(CarbonDate, [{
      key: "now",
      value: function now() {
        this.value = dayjs().tz(this.timezone);
        return this;
      }
    }, {
      key: "format",
      value: function format() {
        var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'YYYY-MM-DD HH:mm:ss';
        this.value = this.value.format(string);
        return this;
      }
    }, {
      key: "toIso",
      value: function toIso() {
        this.value = this.value.toISOString();
        return this;
      }
    }, {
      key: "parse",
      value: function parse(dateTimeString) {
        var convert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var dateTime = _assertClassBrand(_CarbonDate_brand, this, _getValidData).call(this, dateTimeString);
        if (!dateTime) {
          this.value = null;
        } else {
          var newDateTimeString = _classPrivateFieldGet(_isTime, this) ? this.now().format('YYYY-MM-DD').value + ' ' + dateTimeString : dateTime;
          if (convert) {
            this.value = dayjs(newDateTimeString).tz(this.timezone);
          } else {
            this.value = dayjs(newDateTimeString);
          }
        }
        return this;
      }
    }, {
      key: "addDay",
      value:
      // date manipulation add and sub start

      function addDay() {
        this.value = this.value.add(1, 'day');
        return this;
      }
    }, {
      key: "addDays",
      value: function addDays(count) {
        this.value = this.value.add(count, 'day');
        return this;
      }
    }, {
      key: "addWeek",
      value: function addWeek() {
        this.value = this.value.add(1, 'week');
        return this;
      }
    }, {
      key: "addWeeks",
      value: function addWeeks(count) {
        this.value = this.value.add(count, 'week');
        return this;
      }
    }, {
      key: "addMonth",
      value: function addMonth() {
        this.value = this.value.add(1, 'month');
        return this;
      }
    }, {
      key: "addMonths",
      value: function addMonths(count) {
        this.value = this.value.add(count, 'month');
        return this;
      }
    }, {
      key: "addYear",
      value: function addYear() {
        this.value = this.value.add(1, 'year');
        return this;
      }
    }, {
      key: "addYears",
      value: function addYears(count) {
        this.value = this.value.add(count, 'year');
        return this;
      }
    }, {
      key: "addHour",
      value: function addHour() {
        this.value = this.value.add(1, 'hour');
        return this;
      }
    }, {
      key: "addHours",
      value: function addHours(count) {
        this.value = this.value.add(count, 'hour');
        return this;
      }
    }, {
      key: "addMinute",
      value: function addMinute() {
        this.value = this.value.add(1, 'minute');
        return this;
      }
    }, {
      key: "addMinutes",
      value: function addMinutes(count) {
        this.value = this.value.add(count, 'minute');
        return this;
      }
    }, {
      key: "addSecond",
      value: function addSecond() {
        this.value = this.value.add(1, 'second');
        return this;
      }
    }, {
      key: "addSeconds",
      value: function addSeconds(count) {
        this.value = this.value.add(count, 'second');
        return this;
      }
    }, {
      key: "subDay",
      value: function subDay() {
        this.value = this.value.subtract(1, 'day');
        return this;
      }
    }, {
      key: "subDays",
      value: function subDays(count) {
        this.value = this.value.subtract(count, 'day');
        return this;
      }
    }, {
      key: "subWeek",
      value: function subWeek() {
        this.value = this.value.subtract(1, 'week');
        return this;
      }
    }, {
      key: "subWeeks",
      value: function subWeeks(count) {
        this.value = this.value.subtract(count, 'week');
        return this;
      }
    }, {
      key: "subMonth",
      value: function subMonth() {
        this.value = this.value.subtract(1, 'month');
        return this;
      }
    }, {
      key: "subMonths",
      value: function subMonths(count) {
        this.value = this.value.subtract(count, 'month');
        return this;
      }
    }, {
      key: "subYear",
      value: function subYear() {
        this.value = this.value.subtract(1, 'year');
        return this;
      }
    }, {
      key: "subYears",
      value: function subYears(count) {
        this.value = this.value.subtract(count, 'year');
        return this;
      }
    }, {
      key: "subHour",
      value: function subHour() {
        this.value = this.value.subtract(1, 'hour');
        return this;
      }
    }, {
      key: "subHours",
      value: function subHours(count) {
        this.value = this.value.subtract(count, 'hour');
        return this;
      }
    }, {
      key: "subMinute",
      value: function subMinute() {
        this.value = this.value.subtract(1, 'minute');
        return this;
      }
    }, {
      key: "subMinutes",
      value: function subMinutes(count) {
        this.value = this.value.subtract(count, 'minute');
        return this;
      }
    }, {
      key: "subSecond",
      value: function subSecond() {
        this.value = this.value.subtract(1, 'second');
        return this;
      }
    }, {
      key: "subSeconds",
      value: function subSeconds(count) {
        this.value = this.value.subtract(count, 'second');
        return this;
      }

      // date manipulation add and sub end

      // date timezone start
    }, {
      key: "currentTimezone",
      value: function currentTimezone() {
        this.value = import.meta.env.APP_TIMEZONE ? import.meta.env.APP_TIMEZONE : dayjs.tz.guess();
        return this;
      }
    }, {
      key: "diffInDays",
      value:
      // date timezone end

      // difference start
      function diffInDays(date) {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var diffDate = date !== null && date !== void 0 && date.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
          diffDate = this.parse(diffDate).value;
        }
        this.value = Math.abs(currentVal.diff(diffDate, 'day'));
        return this;
      }
    }, {
      key: "diffInWeeks",
      value: function diffInWeeks(date) {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var diffDate = date !== null && date !== void 0 && date.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
          diffDate = this.parse(diffDate).value;
        }
        this.value = Math.abs(currentVal.diff(diffDate, 'week'));
        return this;
      }
    }, {
      key: "diffInMonths",
      value: function diffInMonths(date) {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var diffDate = date !== null && date !== void 0 && date.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
          diffDate = this.parse(diffDate).value;
        }
        this.value = Math.abs(currentVal.diff(diffDate, 'month'));
        return this;
      }
    }, {
      key: "diffInYears",
      value: function diffInYears(date) {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var diffDate = date !== null && date !== void 0 && date.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
          diffDate = this.parse(diffDate).value;
        }
        this.value = Math.abs(currentVal.diff(diffDate, 'year'));
        return this;
      }
    }, {
      key: "diffInHours",
      value: function diffInHours(date) {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var diffDate = date !== null && date !== void 0 && date.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
          diffDate = this.parse(diffDate).value;
        }
        this.value = Math.abs(currentVal.diff(diffDate, 'hour'));
        return this;
      }
    }, {
      key: "diffInMinutes",
      value: function diffInMinutes(date) {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var diffDate = date !== null && date !== void 0 && date.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
          diffDate = this.parse(diffDate).value;
        }
        this.value = Math.abs(currentVal.diff(diffDate, 'minute'));
        return this;
      }
    }, {
      key: "diffInSeconds",
      value: function diffInSeconds(date) {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var diffDate = date !== null && date !== void 0 && date.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
          diffDate = this.parse(diffDate).value;
        }
        this.value = Math.abs(currentVal.diff(diffDate, 'second'));
        return this;
      }

      // difference end

      // comparison start
    }, {
      key: "lessThan",
      value: function lessThan(date) {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var diffDate = date !== null && date !== void 0 && date.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
          diffDate = this.parse(diffDate).value;
        }
        this.value = currentVal.isBefore(diffDate);
        return this;
      }
    }, {
      key: "lessThanOrEqual",
      value: function lessThanOrEqual(date) {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var diffDate = date !== null && date !== void 0 && date.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
          diffDate = this.parse(diffDate).value;
        }
        this.value = currentVal.isSameOrBefore(diffDate);
        return this;
      }
    }, {
      key: "greaterThan",
      value: function greaterThan(date) {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var diffDate = date !== null && date !== void 0 && date.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
          diffDate = this.parse(diffDate).value;
        }
        this.value = currentVal.isAfter(diffDate);
        return this;
      }
    }, {
      key: "greaterThanOrEqual",
      value: function greaterThanOrEqual(date) {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var diffDate = date !== null && date !== void 0 && date.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
          diffDate = this.parse(diffDate).value;
        }
        this.value = currentVal.isSameOrAfter(diffDate);
        return this;
      }
    }, {
      key: "equalTo",
      value: function equalTo(date) {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var diffDate = date !== null && date !== void 0 && date.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
          diffDate = this.parse(diffDate).value;
        }
        this.value = currentVal.isSame(diffDate);
        return this;
      }
    }, {
      key: "inBetween",
      value: function inBetween(start, end) {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var startDate = start !== null && start !== void 0 && start.value ? start.value : start;
        if (!dayjs.isDayjs(startDate)) {
          startDate = this.parse(startDate).value;
        }
        var endDate = end !== null && end !== void 0 && end.value ? end.value : end;
        if (!dayjs.isDayjs(startDate)) {
          endDate = this.parse(startDate).value;
        }
        this.value = currentVal.isBetween(startDate, endDate);
        return this;
      }

      // comparison end
    }, {
      key: "checkLeapYear",
      value: function checkLeapYear() {
        this.value = this.value.isLeapYear();
        return this;
      }
    }, {
      key: "diffForHumans",
      value: function diffForHumans() {
        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var fromDate = date !== null && date !== void 0 && date.value ? date.value : date;
        if (!fromDate) {
          fromDate = this.now().value;
        }
        if (!dayjs.isDayjs(fromDate)) {
          fromDate = this.parse(fromDate).value;
        }
        this.value = currentVal.from(fromDate);
        return this;
      }
    }, {
      key: "dayCountInMonth",
      value: function dayCountInMonth() {
        this.value = this.value.daysInMonth();
        return this;
      }
    }, {
      key: "monthNumber",
      value: function monthNumber(name) {
        var months = [{
          name: 'january',
          value: '01'
        }, {
          name: 'jan',
          value: '01'
        }, {
          name: 'february',
          value: '02'
        }, {
          name: 'feb',
          value: '02'
        }, {
          name: 'march',
          value: '03'
        }, {
          name: 'mar',
          value: '03'
        }, {
          name: 'april',
          value: '04'
        }, {
          name: 'apr',
          value: '04'
        }, {
          name: 'may',
          value: '05'
        }, {
          name: 'june',
          value: '06'
        }, {
          name: 'jun',
          value: '06'
        }, {
          name: 'july',
          value: '07'
        }, {
          name: 'jul',
          value: '07'
        }, {
          name: 'august',
          value: '08'
        }, {
          name: 'aug',
          value: '08'
        }, {
          name: 'september',
          value: '09'
        }, {
          name: 'sep',
          value: '09'
        }, {
          name: 'october',
          value: '10'
        }, {
          name: 'oct',
          value: '10'
        }, {
          name: 'november',
          value: '11'
        }, {
          name: 'nov',
          value: '11'
        }, {
          name: 'december',
          value: '12'
        }, {
          name: 'dec',
          value: '12'
        }];
        for (var _i = 0, _months = months; _i < _months.length; _i++) {
          var item = _months[_i];
          if (item.name === name.toLowerCase().trim()) {
            this.value = item.value;
            break;
          }
        }
        return this;
      }
    }, {
      key: "startOfYear",
      value: function startOfYear() {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        this.value = currentVal.startOf('year');
        return this;
      }
    }, {
      key: "endOfYear",
      value: function endOfYear() {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        this.value = currentVal.endOf('year');
        return this;
      }
    }, {
      key: "startOfMonth",
      value: function startOfMonth() {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        this.value = currentVal.startOf('month');
        return this;
      }
    }, {
      key: "endOfMonth",
      value: function endOfMonth() {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        this.value = currentVal.endOf('month');
        return this;
      }
    }, {
      key: "startOfDay",
      value: function startOfDay() {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        this.value = currentVal.startOf('day');
        return this;
      }
    }, {
      key: "endOfDay",
      value: function endOfDay() {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        this.value = currentVal.endOf('day');
        return this;
      }
    }, {
      key: "isSameMonth",
      value: function isSameMonth(date) {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var diffDate = date !== null && date !== void 0 && date.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
          diffDate = this.parse(diffDate).value;
        }
        this.value = currentVal.isSame(diffDate, 'month');
        return this;
      }
    }, {
      key: "isSameDay",
      value: function isSameDay(date) {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var diffDate = date !== null && date !== void 0 && date.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
          diffDate = this.parse(diffDate).value;
        }
        this.value = currentVal.isSame(diffDate, 'day');
        return this;
      }
    }, {
      key: "isSameYear",
      value: function isSameYear(date) {
        var currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
          throw new Error('Invalid Object Type.');
        }
        var diffDate = date !== null && date !== void 0 && date.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
          diffDate = this.parse(diffDate).value;
        }
        this.value = currentVal.isSame(diffDate, 'year');
        return this;
      }
    }], [{
      key: "init",
      value: function init() {
        var timezone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        return new CarbonDate(timezone);
      }
    }]);
  }();
  function _getValidData(value) {
    // # refers to private method
    try {
      var dateTime = null,
        dateTimeString = value;
      if (dayjs.isDayjs(dateTimeString)) {
        return dateTimeString.format('YYYY-MM-DD HH:mm:ss');
      }
      if (_assertClassBrand(_CarbonDate_brand, this, _isDate).call(this, dateTimeString)) {
        dateTimeString = dayjs(dateTimeString).format('YYYY-MM-DD HH:mm:ss');
      }
      var array = dateTimeString.split(' ');
      if (array.length === 1) {
        var data = array[0].toLowerCase();
        if (data.search(/t/)) {
          array = data.split('t');
        }
      }
      if (array.length === 1) {
        var val = array[0];
        var timeFound = _assertClassBrand(_CarbonDate_brand, this, _getMatchedTime).call(this, val);
        if (timeFound.length) {
          throw 'Invalid Time String.';
        }
        if (!_assertClassBrand(_CarbonDate_brand, this, _isValidTime).call(this, val)) {
          throw 'Invalid Time String.';
        }
        dateTime = val;
      } else {
        var date = array[0],
          time = array[1];
        if (!_assertClassBrand(_CarbonDate_brand, this, _getMatchedDate).call(this, date).length) {
          throw 'Invalid DateTime String.';
        }
        var parsedTime = _assertClassBrand(_CarbonDate_brand, this, _getMatchedTime).call(this, time);
        if (!parsedTime.length) {
          throw 'Invalid DateTime String.';
        }
        if (!_assertClassBrand(_CarbonDate_brand, this, _isValidTime).call(this, parsedTime[0])) {
          throw 'Invalid DateTime String.';
        }
        _classPrivateFieldSet(_isTime, this, false);
        dateTime = "".concat(date, " ").concat(parsedTime[0]);
      }
      return dateTime;
    } catch (exception) {
      throw new Error(exception);
    }
  }
  function _isDate(data) {
    var dateTime = new Date(data);
    return dateTime instanceof Date && !isNaN(dateTime);
  }
  function _isValidTime(data) {
    var time = data.split(':');
    var hour = time[0],
      minute = time[1],
      second = time[2];
    if (!(hour >= 0 && hour <= 23)) {
      return false;
    }
    if (!(minute >= 0 && minute <= 59)) {
      return false;
    }
    if (!(second >= 0 && second <= 59)) {
      return false;
    }
    _classPrivateFieldSet(_isTime, this, true);
    return true;
  }
  function _getMatchedTime(time) {
    if (!time) return [];
    var matches = time.match(/\d{2}:\d{2}:\d{2}/);
    if (!matches) return [];
    return matches.filter(function (item) {
      return !!item;
    });
  }
  function _getMatchedDate(date) {
    if (!date) return [];
    var matches = date.match(/(\d{4}-\d{2}-\d{2})|(\d{2}-\d{2}-\d{4})|(\d{4}\/\d{2}\/\d{2})|(\d{2}\/\d{2}\/\d{4})|(\d{4}\.\d{2}\.\d{2})|(\d{2}\.\d{2}\.\d{4})/);
    if (!matches) return [];
    return matches.filter(function (item) {
      return !!item;
    });
  }
  function _setTimeZone(timezone) {
    if (timezone && !_assertClassBrand(_CarbonDate_brand, this, _isValidTimeZone).call(this, timezone)) {
      throw new Error('Invalid Timezone String.');
    }
    if (timezone) {
      this.timezone = timezone;
    } else {
      this.timezone = import.meta.env.APP_TIMEZONE ? import.meta.env.APP_TIMEZONE : dayjs.tz.guess();
    }
  }
  function _isValidTimeZone(timezone) {
    return Intl.supportedValuesOf('timeZone').includes(timezone);
  }
  return CarbonDate;
});