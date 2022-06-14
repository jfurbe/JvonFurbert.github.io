// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrdZPzDk60SaTT16BdAZ3PHMHgZhSG3IY",
  authDomain: "badbank-f58c3.firebaseapp.com",
  projectId: "badbank-f58c3",
  storageBucket: "badbank-f58c3.appspot.com",
  messagingSenderId: "1020709969241",
  appId: "1:1020709969241:web:851c6a111e55351e418048"
};
// https://firebase.google.com/docs/web/setup#available-libraries


​​import {
​​  GoogleAuthProvider,
​​  getAuth,
​​  signInWithPopup,
​​  signInWithEmailAndPassword,
​​  createUserWithEmailAndPassword,
​​  sendPasswordResetEmail,
​​  signOut,
onAuthStateChanged,
currentUser,
​​} from "firebase/auth";
import {createUser} from './componenets/database';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
​​const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      createUser(user.displayName, user.email, 'googleAuth')
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,

  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
 // sendPasswordReset,
  logout,
};