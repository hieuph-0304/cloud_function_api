import { getCurrentTimestamp } from "./datetime";

const buildError = (error: any, message = null) => {
  return {
    timestamp: getCurrentTimestamp().toDate(),
    success: false,
    errors: [error],
    message,
  };
};

const buildSuccess = (message: string, data: any = null) => {
  return {
    timestamp: getCurrentTimestamp().toDate(),
    success: true,
    data,
    message,
  };
};

export { buildError, buildSuccess };
