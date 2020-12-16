import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import dayOfYear from "dayjs/plugin/dayOfYear";
import localizedFormat from "dayjs/plugin/localizedFormat";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import toObject from "dayjs/plugin/toObject";
import utc from "dayjs/plugin/utc";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(advancedFormat);
dayjs.extend(dayOfYear);
dayjs.extend(localizedFormat);
dayjs.extend(quarterOfYear);
dayjs.extend(toObject);
dayjs.extend(utc);
dayjs.extend(weekOfYear);

type DateTimeLike = string | number | dayjs.Dayjs | Carbon;

export class Carbon {
	readonly #instance: dayjs.Dayjs;
	readonly #locale: string | undefined;

	private constructor(value?: DateTimeLike, locale?: string) {
		this.#instance = this.toUTC(value);
		this.#locale = locale;

		if (!locale) {
			locale = "en";
		}

		require(`dayjs/locale/${locale}`);

		this.#instance.locale(locale);
	}

	public static make(value?: DateTimeLike, locale?: string): Carbon {
		return new Carbon(value, locale);
	}

	public setLocale(locale: string): Carbon {
		return Carbon.make(this.valueOf(), locale);
	}

	public isBefore(value: DateTimeLike): boolean {
		return this.#instance.isBefore(this.toUTC(value));
	}

	public isSame(value: DateTimeLike): boolean {
		return this.#instance.isSame(this.toUTC(value));
	}

	public isAfter(value: DateTimeLike): boolean {
		return this.#instance.isAfter(this.toUTC(value));
	}

	public getMillisecond(): number {
		return this.#instance.millisecond();
	}

	public getSecond(): number {
		return this.#instance.second();
	}

	public getMinute(): number {
		return this.#instance.minute();
	}

	public getHour(): number {
		return this.#instance.hour();
	}

	public getDayOfMonth(): number {
		return this.#instance.date();
	}

	public getDay(): number {
		return this.#instance.dayOfYear();
	}

	public getWeek(): number {
		return this.#instance.week();
	}

	public getMonth(): number {
		return this.#instance.month();
	}

	public getQuarter(): number {
		return this.#instance.quarter();
	}

	public getYear(): number {
		return this.#instance.year();
	}

	public setMillisecond(value: number): Carbon {
		return Carbon.make(this.#instance.millisecond(value), this.#locale);
	}

	public setSecond(value: number): Carbon {
		return Carbon.make(this.#instance.second(value), this.#locale);
	}

	public setMinute(value: number): Carbon {
		return Carbon.make(this.#instance.minute(value), this.#locale);
	}

	public setHour(value: number): Carbon {
		return Carbon.make(this.#instance.hour(value), this.#locale);
	}

	public setDayOfMonth(value: number): Carbon {
		return Carbon.make(this.#instance.date(value), this.#locale);
	}

	public setDay(value: number): Carbon {
		return Carbon.make(this.#instance.dayOfYear(value), this.#locale);
	}

	public setWeek(value: number): Carbon {
		return Carbon.make(this.#instance.week(value), this.#locale);
	}

	public setMonth(value: number): Carbon {
		return Carbon.make(this.#instance.month(value), this.#locale);
	}

	public setQuarter(value: number): Carbon {
		return Carbon.make(this.#instance.quarter(value), this.#locale);
	}

	public setYear(value: number): Carbon {
		return Carbon.make(this.#instance.year(value), this.#locale);
	}

	public addMillisecond(): Carbon {
		return this.addMilliseconds(1);
	}

	public addMilliseconds(value: number): Carbon {
		return Carbon.make(this.#instance.add(value, "millisecond"), this.#locale);
	}

	public addSecond(): Carbon {
		return this.addSeconds(1);
	}

	public addSeconds(value: number): Carbon {
		return Carbon.make(this.#instance.add(value, "second"), this.#locale);
	}

	public addMinute(): Carbon {
		return this.addMinutes(1);
	}

	public addMinutes(value: number): Carbon {
		return Carbon.make(this.#instance.add(value, "minute"), this.#locale);
	}

	public addHour(): Carbon {
		return this.addHours(1);
	}

	public addHours(value: number): Carbon {
		return Carbon.make(this.#instance.add(value, "hour"), this.#locale);
	}

	public addDay(): Carbon {
		return this.addDays(1);
	}

	public addDays(value: number): Carbon {
		return Carbon.make(this.#instance.add(value, "day"), this.#locale);
	}

	public addWeek(): Carbon {
		return this.addWeeks(1);
	}

	public addWeeks(value: number): Carbon {
		return Carbon.make(this.#instance.add(value, "week"), this.#locale);
	}

	public addMonth(): Carbon {
		return this.addMonths(1);
	}

	public addMonths(value: number): Carbon {
		return Carbon.make(this.#instance.add(value, "month"), this.#locale);
	}

	public addQuarter(): Carbon {
		return this.addQuarters(1);
	}

	public addQuarters(value: number): Carbon {
		return Carbon.make(this.#instance.add(value, "quarter"), this.#locale);
	}

	public addYear(): Carbon {
		return this.addYears(1);
	}

	public addYears(value: number): Carbon {
		return Carbon.make(this.#instance.add(value, "year"), this.#locale);
	}

	public subMillisecond(): Carbon {
		return this.subMilliseconds(1);
	}

	public subMilliseconds(value: number): Carbon {
		return Carbon.make(this.#instance.subtract(value, "millisecond"), this.#locale);
	}

	public subSecond(): Carbon {
		return this.subSeconds(1);
	}

	public subSeconds(value: number): Carbon {
		return Carbon.make(this.#instance.subtract(value, "second"), this.#locale);
	}

	public subMinute(): Carbon {
		return this.subMinutes(1);
	}

	public subMinutes(value: number): Carbon {
		return Carbon.make(this.#instance.subtract(value, "minute"), this.#locale);
	}

	public subHour(): Carbon {
		return this.subHours(1);
	}

	public subHours(value: number): Carbon {
		return Carbon.make(this.#instance.subtract(value, "hour"), this.#locale);
	}

	public subDay(): Carbon {
		return this.subDays(1);
	}

	public subDays(value: number): Carbon {
		return Carbon.make(this.#instance.subtract(value, "day"), this.#locale);
	}

	public subWeek(): Carbon {
		return this.subWeeks(1);
	}

	public subWeeks(value: number): Carbon {
		return Carbon.make(this.#instance.subtract(value, "week"), this.#locale);
	}

	public subMonth(): Carbon {
		return this.subMonths(1);
	}

	public subMonths(value: number): Carbon {
		return Carbon.make(this.#instance.subtract(value, "month"), this.#locale);
	}

	public subQuarter(): Carbon {
		return this.subQuarters(1);
	}

	public subQuarters(value: number): Carbon {
		return Carbon.make(this.#instance.subtract(value, "quarter"), this.#locale);
	}

	public subYear(): Carbon {
		return this.subYears(1);
	}

	public subYears(value: number): Carbon {
		return Carbon.make(this.#instance.subtract(value, "year"), this.#locale);
	}

	public diffInMilliseconds(value: DateTimeLike): number {
		return this.#instance.diff(this.toUTC(value), "millisecond");
	}

	public diffInSeconds(value: DateTimeLike): number {
		return this.#instance.diff(this.toUTC(value), "second");
	}

	public diffInMinutes(value: DateTimeLike): number {
		return this.#instance.diff(this.toUTC(value), "minute");
	}

	public diffInHours(value: DateTimeLike): number {
		return this.#instance.diff(this.toUTC(value), "hour");
	}

	public diffInDays(value: DateTimeLike): number {
		return this.#instance.diff(this.toUTC(value), "date");
	}

	public diffInWeeks(value: DateTimeLike): number {
		return this.#instance.diff(this.toUTC(value), "week");
	}

	public diffInMonths(value: DateTimeLike): number {
		return this.#instance.diff(this.toUTC(value), "month");
	}

	public diffInQuarters(value: DateTimeLike): number {
		return this.#instance.diff(this.toUTC(value), "quarter");
	}

	public diffInYears(value: DateTimeLike): number {
		return this.#instance.diff(this.toUTC(value), "year");
	}

	public format(value: string): string {
		return this.#instance.format(value);
	}

	public toObject(): {
		years: number;
		months: number;
		date: number;
		hours: number;
		minutes: number;
		seconds: number;
		milliseconds: number;
	} {
		return this.#instance.toObject();
	}

	public toJSON(): string {
		return this.#instance.toJSON();
	}

	public toISOString(): string {
		return this.#instance.toISOString();
	}

	public toString(): string {
		return this.#instance.toString();
	}

	public toUNIX(): number {
		return this.#instance.unix();
	}

	public valueOf(): number {
		return this.#instance.valueOf();
	}

	private toUTC(value?: DateTimeLike): dayjs.Dayjs {
		if (value instanceof Carbon) {
			return dayjs.utc(value.valueOf());
		}

		return dayjs.utc(value);
	}
}
