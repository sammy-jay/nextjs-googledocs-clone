import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAC1NnSuTMcMjUjGChjAQyZs2GK9EjVgsk",
  authDomain: "nextjs--docs-clone.firebaseapp.com",
  projectId: "nextjs--docs-clone",
  storageBucket: "nextjs--docs-clone.appspot.com",
  messagingSenderId: "488999078026",
  appId: "1:488999078026:web:acd0650dfb871123318573"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
