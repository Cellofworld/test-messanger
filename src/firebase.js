import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { ref } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD90QokTAxrKsVf9LZ5Df6HTDjDlwz5Pq4",
  authDomain: "example-1fc1b.firebaseapp.com",
  projectId: "example-1fc1b",
  storageBucket: "example-1fc1b.appspot.com",
  messagingSenderId: "638317544484",
  appId: "1:638317544484:web:f1a0b702d7693f2eab84b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export const dbf = getFirestore();
export const auth = getAuth();
export const refDb = ref;


