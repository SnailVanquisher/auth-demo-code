import firebase from "firebase/app";
import 'firebase/auth'

// https://cli.vuejs.org/guide/mode-and-env.html
const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DB_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MSG_SENDER_ID
};

const provider = new firebase.auth.GoogleAuthProvider()
firebase.initializeApp(config);

export {provider};
