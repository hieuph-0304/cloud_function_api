import { Router } from "express";
import { timeNowFirebase } from "./logic";

const routerCommon = Router();

routerCommon.get("/server-time", timeNowFirebase);

export { routerCommon };
