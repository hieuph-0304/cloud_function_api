import { firestore } from "../config";

export const getCurrentTimestamp = () => {
  return firestore.Timestamp.now();
};