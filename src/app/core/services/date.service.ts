import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

  days = Array.from(new Array(31), ( val, index) => index + 1);
  months = new Array('January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December');

  day: number;
  month: string;
  year: number;

  constructor() {}

  createDate(day: number, month: string, year: number) {
    const monthIndex = this.months.indexOf(month);
    return new Date(year, monthIndex, day);
  }

  parseDate(date: Date) {
   date = new Date(date);
   this.day = date.getDate();
   this.month = this.months[date.getMonth()];
   this.year = date.getFullYear();
  }

  getDays() {
    return this.days;
  }

  getMonths() {
    return this.months;
  }

  addDaysToDate(date = new Date(), days = 0) {
    if (!date || !days) {
      return new Date();
    }
    date = new Date(date);
    const newTimeStamp = date.setDate(date.getDate() + days);
    return new Date(newTimeStamp);
  }

  daysBetweenDates(date1, date2) {
    if (!date1 || !date2) {
      return 0;
    }
    date1 = new Date(date1);
    date2 = new Date(date2);
    const days = Math.round((date2 - date1) / (1000 * 60 * 60 * 24) );
    return days;
  }

}
