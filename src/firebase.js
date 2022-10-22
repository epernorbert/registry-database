import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCS2mJXh51mqSEtF6VKqFsb7u0UP8UV4yo",
  authDomain: "movie-firebase-4abf1.firebaseapp.com",
  databaseURL: "https://movie-firebase-4abf1-default-rtdb.firebaseio.com",
  projectId: "movie-firebase-4abf1",
  storageBucket: "movie-firebase-4abf1.appspot.com",
  messagingSenderId: "639250383627",
  appId: "1:639250383627:web:eafa08a5bed0adfeb6180e"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);