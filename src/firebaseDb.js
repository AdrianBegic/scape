/* eslint-disable */
import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCkLz1gp2mXGSrTiWvEAIbrzG7Yi6_2uBc",
  authDomain: "scape-c4cb4.firebaseapp.com",
  projectId: "scape-c4cb4",
  storageBucket: "scape-c4cb4.appspot.com",
  messagingSenderId: "1027964343893",
  appId: "1:1027964343893:web:43a4bbe7e80bc3a5e426dc",
  measurementId: "G-PFHY85Y05Q"


}

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

export const db = firebaseApp.firestore();

