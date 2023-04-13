// gkc_hash_code : 01ERNTQXRDAFHMG3Q0VS9Q3CDE
import { Router } from "express";
import { timeNowFirebase } from "./logic";

const routerCommon = Router();

routerCommon.get("/server-time", timeNowFirebase);

export { routerCommon };
