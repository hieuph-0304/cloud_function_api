import { functions } from "../../config";
import { document, FUNCTION_RUNTIME, REGION } from "../../common";
import { RuntimeOptions } from "firebase-functions";
import { onCreateCommon, onUpdateCommon, onWriteCommon } from "./logic";

const commonOnCreate = functions
  .runWith(FUNCTION_RUNTIME.OPTS_DEFAULT as RuntimeOptions)
  .region(REGION.ASIA_SOUTHEAST1)
  .firestore.document(document.common)
  .onCreate(onCreateCommon);

const commonOnUpdate = functions
  .runWith(FUNCTION_RUNTIME.OPTS_DEFAULT as RuntimeOptions)
  .region(REGION.ASIA_SOUTHEAST1)
  .firestore.document(document.common)
  .onUpdate(onUpdateCommon);

const commonOnWrite = functions
  .runWith(FUNCTION_RUNTIME.OPTS_DEFAULT as RuntimeOptions)
  .region(REGION.ASIA_SOUTHEAST1)
  .firestore.document(document.common)
  .onWrite(onWriteCommon);

export { commonOnCreate, commonOnUpdate, commonOnWrite };
