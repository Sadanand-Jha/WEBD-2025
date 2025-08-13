import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "app-435e9.firebaseapp.com",
  projectId: "app-435e9",
  storageBucket: "app-435e9.firebasestorage.app",
  messagingSenderId: "60125748324",
  appId: "1:60125748324:web:21b380de244688687d9371",
  databaseURL: 'https://app-435e9-default-rtdb.firebaseio.com/'
};

export const  app = initializeApp(firebaseConfig);