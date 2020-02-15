import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDjYAgNyJUKg4CL2q_CZPk_juW5kEI6QCw",
  authDomain: "e-clothshop.firebaseapp.com",
  databaseURL: "https://e-clothshop.firebaseio.com",
  projectId: "e-clothshop",
  storageBucket: "e-clothshop.appspot.com",
  messagingSenderId: "1028993509078",
  appId: "1:1028993509078:web:c2f10e42983fbb1d074b77",
  measurementId: "G-3GX6E8ZPJB"
};

export const createProfileDocument = async (userAuth, addData) => {
  if (!userAuth) return;
  // getting our auth data (i.e document or collection)
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const creatAt = new Date();
    try {
      // storing user data of given id in firebase by set()
      await userRef.set({
        displayName,
        email,
        creatAt,
        ...addData
      });
    } catch (error) {
      console.log("Error occured", error.message);
    }
  }
  return userRef;

  // console.log(firestore.doc("users/123gfgf"));
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
