
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCqP4tyghbSqq0qWSvqOyznKNBnwtocM5Y",
    authDomain: "mylinks-2325d.firebaseapp.com",
    projectId: "mylinks-2325d",
    storageBucket: "mylinks-2325d.appspot.com",
    messagingSenderId: "624325374957",
    appId: "1:624325374957:web:ab74ae38c155f563df6de4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };