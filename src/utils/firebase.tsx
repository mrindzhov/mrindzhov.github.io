import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAylTwf2REKxnZqyy_7MvHBVFY1XDABQ_w',
  authDomain: 'tinybusinesscard-904d5.firebaseapp.com',
  projectId: 'tinybusinesscard-904d5',
  storageBucket: 'tinybusinesscard-904d5.appspot.com',
  messagingSenderId: '120017452359',
  appId: '1:120017452359:web:1c5734ae39ff48b1036062',
  measurementId: 'G-0Z23P0DX2W',
  databaseURL: 'https://tinybusinesscard-904d5-default-rtdb.europe-west1.firebasedatabase.app/',
});

export const firebaseDatabase = firebaseApp.database();
export const firebaseAuth = firebaseApp.auth();
