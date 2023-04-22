import { handleLogicCommon } from "@/service/internal/commonService";
import { logger } from "firebase-functions";

export async function commonScheduleOnRun() {
  try {
    await handleLogicCommon();
  } catch (error) {
    logger.log("schedule common error: ", error);
  }
}
