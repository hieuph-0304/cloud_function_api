import { Change, EventContext, logger } from "firebase-functions";

export const onUpdateCommon = async (
  change: Change<any>,
  context: EventContext
) => {
  try {
    const common = change.before.get("common");
    const { commonId } = context.params;
    const changeAfterData = change.after.data();

    console.log(common);
    console.log(commonId);
    console.log(changeAfterData);
  } catch (error: any) {
    logger.error("[ERROR][onUpdate]: common error: ", error.message);
    logger.log(error);
  }
};
