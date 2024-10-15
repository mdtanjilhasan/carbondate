declare module 'carbondate' {
    export class CarbonDate {
        constructor();

        static init(): CarbonDate;

        now(): CarbonDate;

        format(format: string): CarbonDate;

        toIso(): CarbonDate;

        parse(datetime: string, convert?: boolean): CarbonDate;

        addDay(): CarbonDate;

        addDays(count: number): CarbonDate;

        addWeek(): CarbonDate;

        addWeeks(count: number): CarbonDate;

        addMonth(): CarbonDate;

        addMonths(count: number): CarbonDate;

        addYear(): CarbonDate;

        addYears(count: number): CarbonDate;

        addHour(): CarbonDate;

        addHours(count: number): CarbonDate;

        addMinute(): CarbonDate;

        addMinutes(count: number): CarbonDate;

        addSecond(): CarbonDate;

        addSeconds(count: number): CarbonDate;

        subDay(): CarbonDate;

        subDays(count: number): CarbonDate;

        subWeek(): CarbonDate;

        subWeeks(count: number): CarbonDate;

        subMonth(): CarbonDate;

        subMonths(count: number): CarbonDate;

        subYear(): CarbonDate;

        subYears(count: number): CarbonDate;

        subHour(): CarbonDate;

        subHours(count: number): CarbonDate;

        subMinute(): CarbonDate;

        subMinutes(count: number): CarbonDate;

        subSecond(): CarbonDate;

        subSeconds(count: number): CarbonDate;

        currentTimezone(): CarbonDate;

        diffInDays(date: Date | string): CarbonDate;

        diffInWeeks(date: Date | string): CarbonDate;

        diffInMonths(date: Date | string): CarbonDate;

        diffInYears(date: Date | string): CarbonDate;

        diffInHours(date: Date | string): CarbonDate;

        diffInMinutes(date: Date | string): CarbonDate;

        diffInSeconds(date: Date | string): CarbonDate;

        lessThan(date: Date | string): CarbonDate;

        lessThanOrEqual(date: Date | string): CarbonDate;

        greaterThan(date: Date | string): CarbonDate;

        greaterThanOrEqual(date: Date | string): CarbonDate;

        equalTo(date: Date | string): CarbonDate;

        inBetween(start: Date | string, end: Date | string): CarbonDate;

        checkLeapYear(): CarbonDate;

        diffForHumans(date: Date | string | null): CarbonDate;

        dayCountInMonth(): CarbonDate;

        monthNumber(name: string): CarbonDate;

        startOfYear(): CarbonDate;

        endOfYear(): CarbonDate;

        startOfMonth(): CarbonDate;

        endOfMonth(): CarbonDate;

        startOfDay(): CarbonDate;

        endOfDay(): CarbonDate;

        isSameMonth(date: Date | string): CarbonDate;

        isSameDay(date: Date | string): CarbonDate;

        isSameYear(date: Date | string): CarbonDate;
    }

    export default CarbonDate;
}