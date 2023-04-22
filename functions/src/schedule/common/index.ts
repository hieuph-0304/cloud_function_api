import {
  CRON_TIME,
  FUNCTION_RUNTIME,
  REGION,
  TIME_ZONE,
} from "@/common/constants";
import { functions } from "@/config/firebase";
import { commonScheduleOnRun } from "./logic";
import { RuntimeOptions } from "firebase-functions";

export const commonSchedule = functions
  .runWith(FUNCTION_RUNTIME.OPTS_DEFAULT as RuntimeOptions)
  .region(REGION.ASIA_SOUTHEAST1)
  .pubsub.schedule(CRON_TIME.COMMON)
  .timeZone(TIME_ZONE.ASIA_SINGAPORE)
  .onRun(commonScheduleOnRun);
