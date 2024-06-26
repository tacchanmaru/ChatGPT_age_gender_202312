import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "./config";

export const firebaseApp =initializeApp(firebaseConfig);
export const firebaseDb = getDatabase(firebaseApp);