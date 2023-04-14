import { Request, Response } from "express";
import { MESSAGE } from "../../../common";
import HttpStatus from "http-status-codes";
import { buildError, buildSuccess } from "../../../util/buildResponse";

export const timeNowFirebase = async (req: Request, res: Response) => {
  try {
    res
      .status(HttpStatus.OK)
      .json(buildSuccess(MESSAGE.GET_TIME_SERVER_SUCCESSFULLY, null));
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json(buildError(null, error));
  }
};