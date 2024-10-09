# carbondate
A simple DateTime Package based on dayjs. Also supports timezone. Developer friendly syntax.

# Installation
```bash
npm i carbondate
```

# Uses
import this in your project
```bash
import CarbonDate from "carbondate";
```
#### Initialization
```bash
CarbonDate.init().now().format().value;
// 2024-05-27 13:09:59
```
Or
```bash
const datetime = new CarbonDate();
datetime.now().format().value;
// 2024-05-27 13:09:59
```
#### List of all available formats

```bash
CarbonDate.init().now().format('YYYY-MM-DD hh:mm:ss A').value
// 2024-05-27 02:06:21 PM
```

<table>
    <thead>
        <tr>
            <th>Format</th>
            <th>Output</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>YY</code></td>
            <td>18</td>
            <td>Two-digit year</td>
        </tr>
        <tr>
            <td><code>YYYY</code></td>
            <td>2018</td>
            <td>Four-digit year</td>
        </tr>
        <tr>
            <td><code>M</code></td>
            <td>1-12</td>
            <td>The month, beginning at 1</td>
        </tr>
        <tr>
            <td><code>MM</code></td>
            <td>01-12</td>
            <td>The month, 2-digits</td>
        </tr>
        <tr>
            <td><code>MMM</code></td>
            <td>Jan-Dec</td>
            <td>The abbreviated month name</td>
        </tr>
        <tr>
            <td><code>MMMM</code></td>
            <td>January-December</td>
            <td>The full month name</td>
        </tr>
        <tr>
            <td><code>D</code></td>
            <td>1-31</td>
            <td>The day of the month</td>
        </tr>
        <tr>
            <td><code>DD</code></td>
            <td>01-31</td>
            <td>The day of the month, 2-digits</td>
        </tr>
        <tr>
            <td><code>d</code></td>
            <td>0-6</td>
            <td>The day of the week, with Sunday as 0</td>
        </tr>
        <tr>
            <td><code>dd</code></td>
            <td>Su-Sa</td>
            <td>The min name of the day of the week</td>
        </tr>
        <tr>
            <td><code>ddd</code></td>
            <td>Sun-Sat</td>
            <td>The short name of the day of the week</td>
        </tr>
        <tr>
            <td><code>dddd</code></td>
            <td>Sunday-Saturday</td>
            <td>The name of the day of the week</td>
        </tr>
        <tr>
            <td><code>H</code></td>
            <td>0-23</td>
            <td>The hour</td>
        </tr>
        <tr>
            <td><code>HH</code></td>
            <td>00-23</td>
            <td>The hour, 2-digits</td>
        </tr>
        <tr>
            <td><code>h</code></td>
            <td>1-12</td>
            <td>The hour, 12-hour clock</td>
        </tr>
        <tr>
            <td><code>hh</code></td>
            <td>01-12</td>
            <td>The hour, 12-hour clock, 2-digits</td>
        </tr>
        <tr>
            <td><code>m</code></td>
            <td>0-59</td>
            <td>The minute</td>
        </tr>
        <tr>
            <td><code>mm</code></td>
            <td>00-59</td>
            <td>The minute, 2-digits</td>
        </tr>
        <tr>
            <td><code>s</code></td>
            <td>0-59</td>
            <td>The second</td>
        </tr>
        <tr>
            <td><code>ss</code></td>
            <td>00-59</td>
            <td>The second, 2-digits</td>
        </tr>
        <tr>
            <td><code>SSS</code></td>
            <td>000-999</td>
            <td>The millisecond, 3-digits</td>
        </tr>
        <tr>
            <td><code>Z</code></td>
            <td>+05:00</td>
            <td>The offset from UTC, ±HH:mm</td>
        </tr>
        <tr>
            <td><code>ZZ</code></td>
            <td>+0500</td>
            <td>The offset from UTC, ±HHmm</td>
        </tr>
        <tr>
            <td><code>A</code></td>
            <td>AM PM</td>
            <td></td>
        </tr>
        <tr>
            <td><code>a</code></td>
            <td>am pm</td>
            <td></td>
        </tr>
    </tbody>
</table>

# Parsing

```bash
CarbonDate.init().parse(new Date()).format().value
// 2024-05-27 13:10:11
```
Or
```bash
CarbonDate.init().parse(CarbonDate.init().now().value).format().value
// 2024-05-27 13:10:20
```
Or
```bash
CarbonDate.init().parse('2022').format().value
// 2022-01-01 00:00:00
```
Or
```bash
CarbonDate.init().parse('2022-05').format().value
// 2022-05-01 00:00:00
```
Or
```bash
CarbonDate.init().parse('2022-05-08').format().value
// 2022-05-08 00:00:00
```
Or
```bash
CarbonDate.init().parse('10:55:10').format().value
// 2024-05-27 10:55:10
```
Or
```bash
CarbonDate.init().parse('20:55:10').format('YYYY-MM-DD hh:mm:ss A').value
// 2024-05-27 08:55:10 PM
```
Or
```bash
CarbonDate.init().parse('2023-05-04 20:55:10').format('YYYY-MM-DD hh:mm:ss A').value
// 2023-05-04 08:55:10 PM
```

# Addition

Add One Day
```bash
CarbonDate.init().now().addDay().format().value
// 2024-05-28 13:19:59
```
Add More than one Day
```bash
CarbonDate.init().now().addDays(2).format().value
// 2024-05-29 13:20:50
```
#### List of all methods

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Params</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>addDay</code></td>
            <td>--</td>
            <td>Add One Day to a date</td>
        </tr>
        <tr>
            <td><code>addDays</code></td>
            <td>count as integer: example <code>addDays(5)</code></td>
            <td>Add custom day count to a date</td>
        </tr>
        <tr>
            <td><code>addWeek</code></td>
            <td>--</td>
            <td>Add One Week to a date</td>
        </tr>
        <tr>
            <td><code>addWeeks</code></td>
            <td>count as integer: example <code>addWeeks(5)</code></td>
            <td>Add custom week count to a date</td>
        </tr>
        <tr>
            <td><code>addMonth</code></td>
            <td>--</td>
            <td>Add One month to a date</td>
        </tr>
        <tr>
            <td><code>addMonths</code></td>
            <td>count as integer: example <code>addMonths(5)</code></td>
            <td>Add custom month count to a date</td>
        </tr>
        <tr>
            <td><code>addYear</code></td>
            <td>--</td>
            <td>Add One year to a date</td>
        </tr>
        <tr>
            <td><code>addYears</code></td>
            <td>count as integer: example <code>addYears(5)</code></td>
            <td>Add custom year count to a date</td>
        </tr>
        <tr>
            <td><code>addHour</code></td>
            <td>--</td>
            <td>Add One hour to a time</td>
        </tr>
        <tr>
            <td><code>addHours</code></td>
            <td>count as integer: example <code>addHours(5)</code></td>
            <td>Add custom hour count to a time</td>
        </tr>
        <tr>
            <td><code>addMinute</code></td>
            <td>--</td>
            <td>Add One minute to a time</td>
        </tr>
        <tr>
            <td><code>addMinutes</code></td>
            <td>count as integer: example <code>addMinutes(5)</code></td>
            <td>Add custom minute count to a time</td>
        </tr>
        <tr>
            <td><code>addSecond</code></td>
            <td>--</td>
            <td>Add One second to a time</td>
        </tr>
        <tr>
            <td><code>addSeconds</code></td>
            <td>count as integer: example <code>addSeconds(5)</code></td>
            <td>Add custom second count to a time</td>
        </tr>
    </tbody>
</table>

# Subtract

Subtract One Day
```bash
CarbonDate.init().now().subDay().format().value
// 2024-05-26 13:19:59
```
Subtract More than one Day
```bash
CarbonDate.init().now().subDays(2).format().value
// 2024-05-25 13:20:50
```
#### List of all methods

<table>
    <thead>
    <tr>
        <th>Method</th>
        <th>Params</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>subDay</code></td>
        <td>--</td>
        <td>Subtract One Day to a date</td>
    </tr>
    <tr>
        <td><code>subDays</code></td>
        <td>count as integer: example <code>subDays(5)</code></td>
        <td>Subtract custom day count to a date</td>
    </tr>
    <tr>
        <td><code>subWeek</code></td>
        <td>--</td>
        <td>Subtract One Week to a date</td>
    </tr>
    <tr>
        <td><code>subWeeks</code></td>
        <td>count as integer: example <code>subWeeks(5)</code></td>
        <td>Subtract custom week count to a date</td>
    </tr>
    <tr>
        <td><code>subMonth</code></td>
        <td>--</td>
        <td>Subtract One month to a date</td>
    </tr>
    <tr>
        <td><code>subMonths</code></td>
        <td>count as integer: example <code>subMonths(5)</code></td>
        <td>Subtract custom month count to a date</td>
    </tr>
    <tr>
        <td><code>subYear</code></td>
        <td>--</td>
        <td>Subtract One year to a date</td>
    </tr>
    <tr>
        <td><code>subYears</code></td>
        <td>count as integer: example <code>subYears(5)</code></td>
        <td>Subtract custom year count to a date</td>
    </tr>
    <tr>
        <td><code>subHour</code></td>
        <td>--</td>
        <td>Subtract One hour to a time</td>
    </tr>
    <tr>
        <td><code>subHours</code></td>
        <td>count as integer: example <code>subHours(5)</code></td>
        <td>Subtract custom hour count to a time</td>
    </tr>
    <tr>
        <td><code>subMinute</code></td>
        <td>--</td>
        <td>Subtract One minute to a time</td>
    </tr>
    <tr>
        <td><code>subMinutes</code></td>
        <td>count as integer: example <code>subMinutes(5)</code></td>
        <td>Subtract custom minute count to a time</td>
    </tr>
    <tr>
        <td><code>subSecond</code></td>
        <td>--</td>
        <td>Subtract One second to a time</td>
    </tr>
    <tr>
        <td><code>subSeconds</code></td>
        <td>count as integer: example <code>subSeconds(5)</code></td>
        <td>Subtract custom second count to a time</td>
    </tr>
    </tbody>
</table>

# Difference
Difference in day between two days
```bash
CarbonDate.init().now().diffInDays(CarbonDate.init().now().subDay().value).value
// 1
```
OR
```bash
CarbonDate.init().parse('2024-05-01').diffInDays(CarbonDate.init().parse('2024-05-05').value).value
// 4
```
#### List of all methods

<table>
    <thead>
    <tr>
        <th>Method</th>
        <th>Params</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>diffInDays</code></td>
        <td>Valid date time string or Date Object</td>
        <td>return day count</td>
    </tr>
    <tr>
        <td><code>diffInWeeks</code></td>
        <td>Valid date time string or Date Object</td>
        <td>return week count</td>
    </tr>
    <tr>
        <td><code>diffInMonths</code></td>
        <td>Valid date time string or Date Object</td>
        <td>return month count</td>
    </tr>
    <tr>
        <td><code>diffInYears</code></td>
        <td>Valid date time string or Date Object</td>
        <td>return year count</td>
    </tr>
    <tr>
        <td><code>diffInHours</code></td>
        <td>Valid date time string or Date Object</td>
        <td>return hour count</td>
    </tr>
    <tr>
        <td><code>diffInMinutes</code></td>
        <td>Valid date time string or Date Object</td>
        <td>return minute count</td>
    </tr>
    <tr>
        <td><code>diffInSeconds</code></td>
        <td>Valid date time string or Date Object</td>
        <td>return second count</td>
    </tr>
    </tbody>
</table>

# Comparison
Comparing two dates
```bash
CarbonDate.init().parse('2024-05-01').lessThan(CarbonDate.init().parse('2024-05-05').value).value
// true
```
OR
```bash
CarbonDate.init().now().lessThan(CarbonDate.init().parse('2024-05-05').value).value
// false
```

#### List of all methods
<table>
    <thead>
    <tr>
        <th>Method</th>
        <th>Params</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>lessThan</code></td>
        <td>Valid date time string or Date Object</td>
        <td>return Boolean</td>
    </tr>
    <tr>
        <td><code>lessThanOrEqual</code></td>
        <td>Valid date time string or Date Object</td>
        <td>return Boolean</td>
    </tr>
    <tr>
        <td><code>greaterThan</code></td>
        <td>Valid date time string or Date Object</td>
        <td>return Boolean</td>
    </tr>
    <tr>
        <td><code>greaterThanOrEqual</code></td>
        <td>Valid date time string or Date Object</td>
        <td>return Boolean</td>
    </tr>
    <tr>
        <td><code>equalTo</code></td>
        <td>Valid date time string or Date Object</td>
        <td>return Boolean</td>
    </tr>
    <tr>
        <td><code>inBetween</code></td>
        <td>Valid date time string or Date Object</td>
        <td>return Boolean</td>
    </tr>
    <tr>
        <td><code>isSameMonth</code></td>
        <td>Valid date time string or Date Object</td>
        <td>return Boolean</td>
    </tr>
    <tr>
        <td><code>isSameDay</code></td>
        <td>Valid date time string or Date Object</td>
        <td>return Boolean</td>
    </tr>
    <tr>
        <td><code>isSameYear</code></td>
        <td>Valid date time string or Date Object</td>
        <td>return Boolean</td>
    </tr>
    </tbody>
</table>

# Leap Year
```bash
CarbonDate.init().now().checkLeapYear().value
// true
```

# Days in month
```bash
CarbonDate.init().now().dayCountInMonth().value
// as now is May so output is: 31
```

# Start of month
```bash
CarbonDate.init().now().startOfMonth().format('YYYY-MM-DD').value
// 2024-05-01
```

# End of month
```bash
CarbonDate.init().now().endOfMonth().format('YYYY-MM-DD').value
// 2024-05-31
```

# Diff for human
```bash
CarbonDate.init().now().diffForHumans().value
// a few seconds ago
```
Or
```bash
CarbonDate.init().now().diffForHumans(CarbonDate.init().now().subHour().value).value
// in an hour
```

# Month Number
* be careful with the month name spelling
 ```bash
 CarbonDate.init().monthNumber('January').value
 // 01
 ```
OR
 ```bash
 CarbonDate.init().monthNumber('jan').value
 // 01
 ```

# Timezone

#### List of all available [timezones](docs/TIMEZONE.md).
Set your own Timezone

```bash
CarbonDate.init('America/Los_Angeles').now().format().value;
// 2024-05-28 06:12:26
```
Or
```bash
const datetime = new CarbonDate('America/Los_Angeles');
datetime.now().format().value;
// 2024-05-28 06:12:26
```

if you are not using any timezone. then it will take system timezone by default.

if you wish to use ```.env``` file for timezone; for central timezone for your app

1. Install ```dotenv``` package. using ```npm i dotenv```
2. Create ```.env``` file to the root of your project
3. set timezone ```APP_DATETIMEZONE='America/Los_Angeles'```

After following this steps you can use like the example bellow:

```bash
CarbonDate.init().now().format().value;
// 2024-05-28 06:12:26 this is the time for America/Los_Angeles
```
Or
```bash
const datetime = new CarbonDate();
datetime.now().format().value;
// 2024-05-28 06:12:26 this is the time for America/Los_Angeles
```


# Current Timezone
```bash
CarbonDate.init('America/Los_Angeles').currentTimezone().value
// America/Los_Angeles
```

if you are not using ```.env``` file
```bash
CarbonDate.init().currentTimezone().value
// Asia/Dhaka my current timezone
```

# Convert date time to a specific timezone
```bash
CarbonDate.init('America/Los_Angeles').parse('2024-05-10 10:00:50', true).format('YYYY-MM-DD hh:ss:mm A').value
// 2024-05-09 09:50:00 PM
```
if you are using ```.env``` file
```bash
CarbonDate.init().parse('2024-05-10 10:00:50', true).format('YYYY-MM-DD hh:ss:mm A').value
// 2024-05-09 09:50:00 PM
```
