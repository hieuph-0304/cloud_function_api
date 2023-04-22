export const FUNCTION_RUNTIME = {
  OPTS_DEFAULT: {
    timeoutSeconds: 120,
    memory: "256MB",
  },
};

export enum REGION {
  ASIA_SOUTHEAST1 = "asia-southeast1-a",
}

export enum TIME_ZONE {
  ASIA_SINGAPORE = "Asia/Singapore",
}

export enum DIFF_UNIT {
  SECONDS = "seconds",
  MINUTES = "minutes",
  HOURS = "hours",
  DAYS = "days",
  MONTHS = "months",
  YEARS = "years",
}

export enum CRON_TIME {
  COMMON = "* * * * *",
}
