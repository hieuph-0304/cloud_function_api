import { app, methodNotAllowed, genericErrorHandler } from "../../util";
import { functions } from "../../config";
import { routerCommon } from "./router";
import { FUNCTION_RUNTIME, REGION } from "../../common";
import { RuntimeOptions } from "firebase-functions";

export const commonServer = app();

commonServer.use(routerCommon);

// Error Middlewares
commonServer.use(genericErrorHandler);
commonServer.use(methodNotAllowed);

export const common = functions
  .runWith(FUNCTION_RUNTIME.OPTS_DEFAULT as RuntimeOptions)
  .region(REGION.ASIA_NORTHEAST1)
  .https.onRequest(commonServer);
