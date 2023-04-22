import { firestore } from "../config";
import momentTz from "moment-timezone";
import { Moment } from "moment";
import { DIFF_UNIT } from "../common";
import { Timestamp } from "../model/type";

function getCurrentTimestamp(): Timestamp {
  return firestore.Timestamp.now();
}

function dateToFirebaseTimestamp(date: Date): Timestamp {
  return firestore.Timestamp.fromDate(date);
}

function convertDateToMomentTimezone(date: Date, timezone: string): Moment {
  return momentTz(date).tz(timezone);
}

function getDiffBetween2Moments(
  fromDate: Moment,
  toDate: Moment,
  unit: DIFF_UNIT
): number {
  return fromDate.diff(toDate, unit);
}

function getThresholdTime(
  moment: Moment,
  offset: number,
  unit: DIFF_UNIT
): Moment {
  return moment.add(offset, unit);
}

function getMomentFormat(moment: Moment, pattern: string): string {
  return moment.format(pattern);
}

export {
  getCurrentTimestamp,
  dateToFirebaseTimestamp,
  convertDateToMomentTimezone,
  getDiffBetween2Moments,
  getThresholdTime,
  getMomentFormat,
};
