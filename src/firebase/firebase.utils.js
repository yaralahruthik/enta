import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDei9MBrGSX8F22p0AM12kwHrlmrbr0rlY',
	authDomain: 'enta-a4925.firebaseapp.com',
	projectId: 'enta-a4925',
	storageBucket: 'enta-a4925.appspot.com',
	messagingSenderId: '552099710207',
	appId: '1:552099710207:web:b0afc9131172767b2138ca',
	measurementId: 'G-7FLHPEZC7H',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;