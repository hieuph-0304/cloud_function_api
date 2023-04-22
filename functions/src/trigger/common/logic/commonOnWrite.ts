import { Change, EventContext, logger } from "firebase-functions";

export const onWriteCommon = async (
  change: Change<any>,
  context: EventContext
) => {
  try {
    const { commonId } = context.params;
    const changeAfterData = change.after.data() || {};

    console.log(commonId);
    console.log(changeAfterData);
  } catch (error: any) {
    logger.error("[ERROR][onWrite]: common error: ", error.message);
    logger.log(error);
  }
};
