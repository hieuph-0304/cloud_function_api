// gkc_hash_code : 01ERNTQXRDAFHMG3Q0VS9Q3CDE
import { Request, Response } from "express";
import { MESSAGE } from "../../../common";
import HttpStatus from "http-status-codes";
import { buildSuccess } from "../../../util/buildResponse";

export const timeNowFirebase = async (req: Request, res: Response) => {
  res
    .status(HttpStatus.OK)
    .json(buildSuccess(MESSAGE.GET_TIME_SERVER_SUCCESSFULLY));
};
