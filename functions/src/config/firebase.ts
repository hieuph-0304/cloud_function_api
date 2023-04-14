import * as functions from "firebase-functions";
import admin from "firebase-admin";

const { firestore } = admin;

// Initialize Firebase App
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

export { admin, functions, firestore };