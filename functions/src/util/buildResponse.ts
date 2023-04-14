import { getCurrentTimestamp } from "./datetime";

const buildError = (message: string | null, error: any) => {
  return {
    timestamp: getCurrentTimestamp().toDate(),
    success: false,
    errors: [error],
    message,
  };
};

const buildSuccess = (message: string, data: any) => {
  return {
    timestamp: getCurrentTimestamp().toDate(),
    success: true,
    data,
    message,
  };
};

export { buildError, buildSuccess };
