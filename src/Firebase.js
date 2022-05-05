import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDgVZUui-ZeP2q_1wDac24Ugv7c9asn2S0",
  authDomain: "facebook-clone-2e8ed.firebaseapp.com",
  projectId: "facebook-clone-2e8ed",
  storageBucket: "facebook-clone-2e8ed.appspot.com",
  messagingSenderId: "49105802113",
  appId: "1:49105802113:web:6d37c4d0f23e79d36f8e80",
  measurementId: "G-9BD89KGN1G"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db; 
