import { COLLECTION_COMMONS } from "./collections";

interface Document {
  readonly common: string;
}

export const document: Document = {
  common: `${COLLECTION_COMMONS.COLLECTION_NAME}/{commonId}`,
};
