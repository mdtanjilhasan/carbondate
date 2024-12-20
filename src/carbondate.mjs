import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import isBetween from 'dayjs/plugin/isBetween';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayOfYear from 'dayjs/plugin/dayOfYear';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isLeapYear);
dayjs.extend(isBetween);
dayjs.extend(relativeTime);
dayjs.extend(dayOfYear);

export default class CarbonDate {

    // Protected properties are usually prefixed with an underscore _
    // Private properties and methods are usually prefixed with a hash #
    #isTime = false;

    constructor(timezone = null) {
        Object.defineProperty(this, 'SUNDAY', {
            value: 0,
            writable: false,
            configurable: false
        });
        Object.defineProperty(this, 'MONDAY', {
            value: 1,
            writable: false,
            configurable: false
        });
        Object.defineProperty(this, 'TUESDAY', {
            value: 2,
            writable: false,
            configurable: false
        });
        Object.defineProperty(this, 'WEDNESDAY', {
            value: 3,
            writable: false,
            configurable: false
        });
        Object.defineProperty(this, 'THURSDAY', {
            value: 4,
            writable: false,
            configurable: false
        });
        Object.defineProperty(this, 'FRIDAY', {
            value: 5,
            writable: false,
            configurable: false
        });
        Object.defineProperty(this, 'SATURDAY', {
            value: 6,
            writable: false,
            configurable: false
        });
        Object.defineProperty(this, 'YEARS_PER_CENTURY', {
            value: 100,
            writable: false,
            configurable: false
        });
        Object.defineProperty(this, 'YEARS_PER_DECADE', {
            value: 10,
            writable: false,
            configurable: false
        });
        Object.defineProperty(this, 'MONTHS_PER_YEAR', {
            value: 12,
            writable: false,
            configurable: false
        });
        Object.defineProperty(this, 'WEEKS_PER_YEAR', {
            value: 52,
            writable: false,
            configurable: false
        });
        Object.defineProperty(this, 'DAYS_PER_WEEK', {
            value: 7,
            writable: false,
            configurable: false
        });
        Object.defineProperty(this, 'HOURS_PER_DAY', {
            value: 24,
            writable: false,
            configurable: false
        });
        Object.defineProperty(this, 'MINUTES_PER_HOUR', {
            value: 60,
            writable: false,
            configurable: false
        });
        Object.defineProperty(this, 'SECONDS_PER_MINUTE', {
            value: 60,
            writable: false,
            configurable: false
        });
        this.#setTimeZone(timezone);
        this.value = timezone ? dayjs().tz(timezone) : dayjs();
    }

    static init(timezone = null) {
        return new CarbonDate(timezone);
    }

    now() {
        this.value = dayjs().tz(this.timezone);
        return this;
    }

    createFromObject({year= new Date().getFullYear(), month= (new Date().getMonth() + 1), day= new Date().getDate(), hour= '00', minute= '00', second= '00'}) {
        let datetime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
        this.value = dayjs(datetime).tz(this.timezone);
        return this;
    }

    yesterday() {
        this.value = dayjs().tz(this.timezone).subtract(1, 'day');
        return this;
    }

    tomorrow() {
        this.value = dayjs().tz(this.timezone).add(1, 'day');
        return this;
    }

    // String Formatting Start

    format(string = 'YYYY-MM-DD HH:mm:ss') {
        this.value = this.value.format(string);
        return this;
    }

    toIso() {
        this.value = this.value.toISOString();
        return this;
    }

    toDateTimeString() {
        this.value = this.value.format('YYYY-MM-DD HH:mm:ss');
        return this;
    }

    toDateString() {
        this.value = this.value.format('YYYY-MM-DD');
        return this;
    }

    toTimeString() {
        this.value = this.value.format('HH:mm:ss');
        return this;
    }

    toDayDateTimeString() {
        this.value = this.value.format('ddd, MMM DD, YYYY hh:mm A');
        return this;
    }

    toFormattedDayDateString() {
        this.value = this.value.format('ddd, MMM DD, YYYY');
        return this;
    }

    toFormattedDateString() {
        this.value = this.value.format('MMM DD, YYYY');
        return this;
    }

    // String Formatting End

    // Getters Start

    getYear() {
        this.value = this.value.format('YY');
        return this;
    }

    getFullYear() {
        this.value = this.value.format('YYYY');
        return this;
    }

    getMonth() {
        this.value = this.value.format('MM');
        return this;
    }

    getMonthName() {
        this.value = this.value.format('MMM');
        return this;
    }

    getFullMonthName() {
        this.value = this.value.format('MMMM');
        return this;
    }

    getDay() {
        this.value = this.value.format('DD');
        return this;
    }

    getDayName() {
        this.value = this.value.format('ddd');
        return this;
    }

    getFullDayName() {
        this.value = this.value.format('dddd');
        return this;
    }

    getHour() {
        this.value = this.value.format('hh');
        return this;
    }

    getHourIn24() {
        this.value = this.value.format('HH');
        return this;
    }

    getMinute() {
        this.value = this.value.format('mm');
        return this;
    }

    getSecond() {
        this.value = this.value.format('ss');
        return this;
    }

    // Getters End

    // Fluent Setters Start

    setYear(year) {
        if (!year) {
            throw new Error('Parameter #1 is required');
        }
        if (!year.toString().match(/\d{4}/)) {
            throw new Error('Must be 4 digits long');
        }
        let date = new Date();
        date.setFullYear(year);
        this.value = dayjs(date.toString());
        return this;
    }

    setMonth(month) {
        if (!month) {
            throw new Error('Parameter #1 is required');
        }
        if (month < 1 || month > 12) {
            throw new Error('Invalid Month');
        }
        let date = new Date(this.value.format('YYYY-MM-DD HH:mm:ss'));
        date.setMonth(month - 1);
        this.value = dayjs(date.toString());
        return this;
    }

    setDay(day) {
        if (!day) {
            throw new Error('Parameter #1 is required');
        }
        if (day < 1 || day > 31) {
            throw new Error('Invalid Day');
        }
        let date = new Date(this.value.format('YYYY-MM-DD HH:mm:ss'));
        date.setDate(day);
        this.value = dayjs(date.toString());
        return this;
    }

    setHour(hour) {
        if (!hour) {
            throw new Error('Parameter #1 is required');
        }
        if (hour < 0 || hour > 23) {
            throw new Error('Invalid Hour');
        }
        let date = new Date(this.value.format('YYYY-MM-DD HH:mm:ss'));
        date.setHours(hour);
        this.value = dayjs(date.toString());
        return this;
    }

    setMinute(minute) {
        if (!minute) {
            throw new Error('Parameter #1 is required');
        }
        if (minute < 0 || minute > 59) {
            throw new Error('Invalid Minute');
        }
        let date = new Date(this.value.format('YYYY-MM-DD HH:mm:ss'));
        date.setMinutes(minute);
        this.value = dayjs(date.toString());
        return this;
    }

    setSecond(second) {
        if (!second) {
            throw new Error('Parameter #1 is required');
        }
        if (second < 0 || second > 59) {
            throw new Error('Invalid Second');
        }
        let date = new Date(this.value.format('YYYY-MM-DD HH:mm:ss'));
        date.setSeconds(second);
        this.value = dayjs(date.toString());
        return this;
    }

    // Fluent Setters End

    parse(dateTimeString, convert = false) {
        let dateTime = this.#getValidData(dateTimeString);
        if (!dateTime) {
            this.value = null;
        } else {
            let newDateTimeString = this.#isTime ? this.now().format('YYYY-MM-DD').value + ' ' + dateTimeString : dateTime;
            if (convert) {
                this.value = dayjs(newDateTimeString).tz(this.timezone);
            } else {
                this.value = dayjs(newDateTimeString);
            }
        }

        return this;
    }

    #getValidData(value) { // # refers to private method
        try {
            let dateTime = null, dateTimeString = value;

            if (dayjs.isDayjs(dateTimeString)) {
                return dateTimeString.format('YYYY-MM-DD HH:mm:ss');
            }

            if (this.#isDate(dateTimeString)) {
                dateTimeString = dayjs(dateTimeString).format('YYYY-MM-DD HH:mm:ss');
            }

            let array = dateTimeString.split(' ');

            if (array.length === 1) {
                let data = array[0].toLowerCase();
                if (data.search(/t/)) {
                    array = data.split('t');
                }
            }

            if (array.length === 1) {
                let val = array[0];
                const timeFound = this.#getMatchedTime(val);

                if (timeFound.length) {
                    throw 'Invalid Time String.';
                }
                if (!this.#isValidTime(val)) {
                    throw 'Invalid Time String.';
                }

                dateTime = val;
            } else {
                const date = array[0], time = array[1];

                if (!this.#getMatchedDate(date).length) {
                    throw 'Invalid DateTime String.';
                }
                const parsedTime = this.#getMatchedTime(time);
                if (!parsedTime.length) {
                    throw 'Invalid DateTime String.';
                }
                if (!this.#isValidTime(parsedTime[0])) {
                    throw 'Invalid DateTime String.';
                }

                this.#isTime = false;
                dateTime = `${date} ${parsedTime[0]}`;
            }

            return dateTime;
        } catch (exception) {
            throw new Error(exception);
        }
    }

    #isDate(data) {
        let dateTime = new Date(data);
        return dateTime instanceof Date && !isNaN(dateTime);
    }

    #isValidTime(data) {
        const time = data.split(':');
        const hour = time[0],
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

        this.#isTime = true;
        return true;
    }

    #getMatchedTime(time) {
        if (!time) return [];
        const matches = time.match(/\d{2}:\d{2}:\d{2}/);
        if (!matches) return [];
        return matches.filter(item => !!item);
    }

    #getMatchedDate(date) {
        if (!date) return [];
        const matches = date.match(/(\d{4}-\d{2}-\d{2})|(\d{2}-\d{2}-\d{4})|(\d{4}\/\d{2}\/\d{2})|(\d{2}\/\d{2}\/\d{4})|(\d{4}\.\d{2}\.\d{2})|(\d{2}\.\d{2}\.\d{4})/);
        if (!matches) return [];
        return matches.filter(item => !!item);
    }

    // date manipulation add and sub start

    addDay() {
        this.value = this.value.add(1, 'day');
        return this;
    }

    addDays(count) {
        this.value = this.value.add(count, 'day');
        return this;
    }

    addWeek() {
        this.value = this.value.add(1, 'week');
        return this;
    }

    addWeeks(count) {
        this.value = this.value.add(count, 'week');
        return this;
    }

    addMonth() {
        this.value = this.value.add(1, 'month');
        return this;
    }

    addMonths(count) {
        this.value = this.value.add(count, 'month');
        return this;
    }

    addYear() {
        this.value = this.value.add(1, 'year');
        return this;
    }

    addYears(count) {
        this.value = this.value.add(count, 'year');
        return this;
    }

    addHour() {
        this.value = this.value.add(1, 'hour');
        return this;
    }

    addHours(count) {
        this.value = this.value.add(count, 'hour');
        return this;
    }

    addMinute() {
        this.value = this.value.add(1, 'minute');
        return this;
    }

    addMinutes(count) {
        this.value = this.value.add(count, 'minute');
        return this;
    }

    addSecond() {
        this.value = this.value.add(1, 'second');
        return this;
    }

    addSeconds(count) {
        this.value = this.value.add(count, 'second');
        return this;
    }

    subDay() {
        this.value = this.value.subtract(1, 'day');
        return this;
    }

    subDays(count) {
        this.value = this.value.subtract(count, 'day');
        return this;
    }

    subWeek() {
        this.value = this.value.subtract(1, 'week');
        return this;
    }

    subWeeks(count) {
        this.value = this.value.subtract(count, 'week');
        return this;
    }

    subMonth() {
        this.value = this.value.subtract(1, 'month');
        return this;
    }

    subMonths(count) {
        this.value = this.value.subtract(count, 'month');
        return this;
    }

    subYear() {
        this.value = this.value.subtract(1, 'year');
        return this;
    }

    subYears(count) {
        this.value = this.value.subtract(count, 'year');
        return this;
    }

    subHour() {
        this.value = this.value.subtract(1, 'hour');
        return this;
    }

    subHours(count) {
        this.value = this.value.subtract(count, 'hour');
        return this;
    }

    subMinute() {
        this.value = this.value.subtract(1, 'minute');
        return this;
    }

    subMinutes(count) {
        this.value = this.value.subtract(count, 'minute');
        return this;
    }

    subSecond() {
        this.value = this.value.subtract(1, 'second');
        return this;
    }

    subSeconds(count) {
        this.value = this.value.subtract(count, 'second');
        return this;
    }

    // date manipulation add and sub end

    // date timezone start
    currentTimezone() {
        this.value = import.meta.env.APP_TIMEZONE ? import.meta.env.APP_TIMEZONE : dayjs.tz.guess();
        return this;
    }

    #setTimeZone(timezone) {
        if (timezone && !this.#isValidTimeZone(timezone)) {
            throw new Error('Invalid Timezone String.');
        }

        if (timezone) {
            this.timezone = timezone;
        } else {
            this.timezone = import.meta.env.APP_TIMEZONE ? import.meta.env.APP_TIMEZONE : dayjs.tz.guess();
        }
    }

    #isValidTimeZone(timezone) {
        return Intl.supportedValuesOf('timeZone').includes(timezone);
    }

    // date timezone end

    // difference start
    diffInDays(date) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let diffDate = date?.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
            diffDate = this.parse(diffDate).value;
        }

        this.value = Math.abs(currentVal.diff(diffDate, 'day'));
        return this;
    }

    diffInWeeks(date) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let diffDate = date?.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
            diffDate = this.parse(diffDate).value;
        }

        this.value = Math.abs(currentVal.diff(diffDate, 'week'));
        return this;
    }

    diffInMonths(date) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let diffDate = date?.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
            diffDate = this.parse(diffDate).value;
        }

        this.value = Math.abs(currentVal.diff(diffDate, 'month'));
        return this;
    }

    diffInYears(date) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let diffDate = date?.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
            diffDate = this.parse(diffDate).value;
        }

        this.value = Math.abs(currentVal.diff(diffDate, 'year'));
        return this;
    }

    diffInHours(date) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let diffDate = date?.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
            diffDate = this.parse(diffDate).value;
        }

        this.value = Math.abs(currentVal.diff(diffDate, 'hour'));
        return this;
    }

    diffInMinutes(date) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let diffDate = date?.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
            diffDate = this.parse(diffDate).value;
        }

        this.value = Math.abs(currentVal.diff(diffDate, 'minute'));
        return this;
    }

    diffInSeconds(date) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let diffDate = date?.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
            diffDate = this.parse(diffDate).value;
        }

        this.value = Math.abs(currentVal.diff(diffDate, 'second'));
        return this;
    }

    // difference end

    // comparison start
    lessThan(date) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let diffDate = date?.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
            diffDate = this.parse(diffDate).value;
        }

        this.value = currentVal.isBefore(diffDate);
        return this;
    }

    lessThanOrEqual(date) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let diffDate = date?.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
            diffDate = this.parse(diffDate).value;
        }

        this.value = currentVal.isSameOrBefore(diffDate);
        return this;
    }

    greaterThan(date) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let diffDate = date?.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
            diffDate = this.parse(diffDate).value;
        }

        this.value = currentVal.isAfter(diffDate);
        return this;
    }

    greaterThanOrEqual(date) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let diffDate = date?.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
            diffDate = this.parse(diffDate).value;
        }

        this.value = currentVal.isSameOrAfter(diffDate);
        return this;
    }

    equalTo(date) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let diffDate = date?.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
            diffDate = this.parse(diffDate).value;
        }

        this.value = currentVal.isSame(diffDate);
        return this;
    }

    notEqualTo(date) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let diffDate = date?.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
            diffDate = this.parse(diffDate).value;
        }

        this.value = !currentVal.isSame(diffDate);
        return this;
    }

    inBetween(start, end) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let startDate = start?.value ? start.value : start;
        if (!dayjs.isDayjs(startDate)) {
            startDate = this.parse(startDate).value;
        }
        let endDate = end?.value ? end.value : end;
        if (!dayjs.isDayjs(startDate)) {
            endDate = this.parse(startDate).value;
        }

        this.value = currentVal.isBetween(startDate, endDate);
        return this;
    }

    isMonday() {
        let date = new Date(this.value.format('YYYY-MM-DD'));
        this.value = date.getDay() === this.MONDAY;
        return this;
    }

    isTuesday() {
        let date = new Date(this.value.format('YYYY-MM-DD'));
        this.value = date.getDay() === this.TUESDAY;
        return this;
    }

    isWednesday() {
        let date = new Date(this.value.format('YYYY-MM-DD'));
        this.value = date.getDay() === this.WEDNESDAY;
        return this;
    }

    isThursday() {
        let date = new Date(this.value.format('YYYY-MM-DD'));
        this.value = date.getDay() === this.THURSDAY;
        return this;
    }

    isFriday() {
        let date = new Date(this.value.format('YYYY-MM-DD'));
        this.value = date.getDay() === this.FRIDAY;
        return this;
    }

    isSaturday() {
        let date = new Date(this.value.format('YYYY-MM-DD'));
        this.value = date.getDay() === this.SATURDAY;
        return this;
    }

    isSunday() {
        let date = new Date(this.value.format('YYYY-MM-DD'));
        this.value = date.getDay() === this.SUNDAY;
        return this;
    }

    isWeekday() {
        let day = new Date(this.value.format('YYYY-MM-DD')).getDay();
        this.value = day > 0 && day < 6; // weekday Monday to Friday
        return this;
    }

    isWeekend() {
        let day = new Date(this.value.format('YYYY-MM-DD')).getDay();
        this.value = [0, '0', 6, '6'].includes(day); // weekend Saturday & Sunday
        return this;
    }

    // comparison end

    checkLeapYear() {
        this.value = this.value.isLeapYear();
        return this;
    }

    diffForHumans(date = null) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let fromDate = date?.value ? date.value : date;

        if (!fromDate) {
            fromDate = this.now().value;
        }

        if (!dayjs.isDayjs(fromDate)) {
            fromDate = this.parse(fromDate).value;
        }

        this.value = currentVal.from(fromDate);
        return this;
    }

    dayCountInMonth() {
        this.value = this.value.daysInMonth();
        return this;
    }

    monthNumber(name) {
        let months = [
            {name: 'january', value: '01'},
            {name: 'jan', value: '01'},
            {name: 'february', value: '02'},
            {name: 'feb', value: '02'},
            {name: 'march', value: '03'},
            {name: 'mar', value: '03'},
            {name: 'april', value: '04'},
            {name: 'apr', value: '04'},
            {name: 'may', value: '05'},
            {name: 'june', value: '06'},
            {name: 'jun', value: '06'},
            {name: 'july', value: '07'},
            {name: 'jul', value: '07'},
            {name: 'august', value: '08'},
            {name: 'aug', value: '08'},
            {name: 'september', value: '09'},
            {name: 'sep', value: '09'},
            {name: 'october', value: '10'},
            {name: 'oct', value: '10'},
            {name: 'november', value: '11'},
            {name: 'nov', value: '11'},
            {name: 'december', value: '12'},
            {name: 'dec', value: '12'},
        ];

        for (let item of months) {
            if (item.name === name.toLowerCase().trim()) {
                this.value = item.value;
                break;
            }
        }

        return this;
    }

    startOfYear() {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        this.value = currentVal.startOf('year');
        return this;
    }

    endOfYear() {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        this.value = currentVal.endOf('year');
        return this;
    }

    startOfMonth() {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        this.value = currentVal.startOf('month');
        return this;
    }

    endOfMonth() {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        this.value = currentVal.endOf('month');
        return this;
    }

    startOfDay() {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        this.value = currentVal.startOf('day');
        return this;
    }

    endOfDay() {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        this.value = currentVal.endOf('day');
        return this;
    }

    isSameMonth(date) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let diffDate = date?.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
            diffDate = this.parse(diffDate).value;
        }
        this.value = currentVal.isSame(diffDate, 'month');
        return this;
    }

    isSameDay(date) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let diffDate = date?.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
            diffDate = this.parse(diffDate).value;
        }

        this.value = currentVal.isSame(diffDate, 'day');
        return this;
    }

    isSameYear(date) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        let diffDate = date?.value ? date.value : date;
        if (!dayjs.isDayjs(diffDate)) {
            diffDate = this.parse(diffDate).value;
        }

        this.value = currentVal.isSame(diffDate, 'year');
        return this;
    }

    dayNumberOfYear() {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        this.value = currentVal.dayOfYear();
        return this;
    }

    dateFormDayNumber(dayNumber) {
        const currentVal = this.value;
        if (!dayjs.isDayjs(currentVal)) {
            throw new Error('Invalid Object Type.')
        }
        this.value = currentVal.dayOfYear(dayNumber);
        return this;
    }
}

// For Node.js CommonJS compatibility, export default explicitly
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = CarbonDate;
}