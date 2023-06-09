import HttpStatus from "http-status-codes";
import { isEmpty } from "lodash";
import { buildError } from "./buildResponse";
import { NextFunction, Request, Response } from "express";
import { ERROR_CODE, MESSAGE } from "../common";
import { logger } from "firebase-functions";

const emptyJsonBodyRequest = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { body, method } = req;
  const disallowedHttpHeaders = ["PUT", "POST", "PATCH"];

  if (
    req.is("application/json") &&
    disallowedHttpHeaders.includes(method) &&
    isEmpty(body)
  ) {
    throw new Error(MESSAGE.BODY_EMPTY_JSON);
  }

  next();
};

const notFound = (req: Request, res: Response): void => {
  res.status(HttpStatus.NOT_FOUND).json(
    buildError({
      code: ERROR_CODE.NOT_FOUND,
      message: MESSAGE.NOT_FOUND,
    })
  );
};

const methodNotAllowed = (req: Request, res: Response): void => {
  const error = buildError({
    code: ERROR_CODE.METHOD_NOT_ALLOWED,
    message: MESSAGE.METHOD_NOT_ALLOWED,
  });
  logger.warn(error.errors[0].message, "- Request path:", req.path);
  logger.log(error);

  res.status(HttpStatus.METHOD_NOT_ALLOWED).json(error);
};

const genericErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const error = handleError(err);
  if (error !== null) {
    logger.error(error.errors[0].message, "- Request path:", req.path);
    logger.log(error);
    res.status(res.statusCode).json(error);
  }

  next();
};

const handleError = (err: any) => {
  const error: any = {
    code: ERROR_CODE.SYSTEM_ERROR,
    message: err.message,
    stack: err.stack,
  };

  // Return INTERNAL_SERVER_ERROR for all other cases
  return buildError(error);
};

export {
  emptyJsonBodyRequest,
  notFound,
  methodNotAllowed,
  genericErrorHandler,
};
