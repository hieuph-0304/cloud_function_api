import { DocumentSnapshot } from "firebase-admin/firestore";
import { EventContext, logger } from "firebase-functions";

export const onCreateCommon = async (
  snap: DocumentSnapshot,
  context: EventContext
) => {
  try {
    const { commonId } = context.params;
    const data = snap.data();

    console.log(commonId);
    console.log(data);
  } catch (error: any) {
    logger.error("[ERROR][onCreate]: common error: ", error.message);
    logger.log(error);
  }
};
