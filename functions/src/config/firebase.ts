import * as firebaseFunction from "firebase-functions";
import admin from "firebase-admin";

// Initialize Firebase App
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const firestore = admin.firestore;
const functions = firebaseFunction;

export { admin, functions, firestore };