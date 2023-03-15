
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_COGuT34bDgKtMQaSJmZD4oaxpRUcp3g",
  authDomain: "react-netflix-clone-2e176.firebaseapp.com",
  projectId: "react-netflix-clone-2e176",
  storageBucket: "react-netflix-clone-2e176.appspot.com",
  messagingSenderId: "816569650883",
  appId: "1:816569650883:web:566016a9636c221ca21c76",
  measurementId: "G-YHZ9HE9GEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);