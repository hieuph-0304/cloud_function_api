// gkc_hash_code : 01ERNTQXRDAFHMG3Q0VS9Q3CDE

import { getCurrentTimestamp } from "./datetime";

const buildError = (error: any, message = null) => {
  return {
    timestamp: getCurrentTimestamp().toDate(),
    success: false,
    errors: [error],
    message: message,
  };
};

const buildSuccess = (message: string, data: any = null) => {
  return {
    timestamp: getCurrentTimestamp().toDate(),
    success: true,
    data: data,
    message: message,
  };
};

export { buildError, buildSuccess };
