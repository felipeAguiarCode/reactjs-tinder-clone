import firebase from 'firebase';
import dotenv from 'dotenv';
dotenv.config({path: '../.env'});


const firebaseConfig = {
	apiKey: dotenv.apiKey,
	authDomain: 'tinder-clone-ec03f.firebaseapp.com',
	projectId: 'tinder-clone-ec03f',
	storageBucket: 'tinder-clone-ec03f.appspot.com',
	messagingSenderId: dotenv.messagingSenderId,
	appId: dotenv.appId
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;