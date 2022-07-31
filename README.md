import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvpmrszHCyA3rndA49pF7lkX4rgouipL8",
  authDomain: "login-app-696c9.firebaseapp.com",
  projectId: "login-app-696c9",
  storageBucket: "login-app-696c9.appspot.com",
  messagingSenderId: "667312531189",
  appId: "1:667312531189:web:dfc173cb3769df4e9c47bc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
