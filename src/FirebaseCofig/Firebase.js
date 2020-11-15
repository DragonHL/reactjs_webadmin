
import firebase from 'firebase/app';
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBRuH1YiiJRwrQVge9tuDh80GzIJpwVAWY",
    authDomain: "projectfinal-db031.firebaseapp.com",
    databaseURL: "https://projectfinal-db031.firebaseio.com",
    projectId: "projectfinal-db031",
    storageBucket: "projectfinal-db031.appspot.com",
    messagingSenderId: "588075255846",
    appId: "1:588075255846:web:02a53bfc925ab73bcfbee7",
    measurementId: "G-BWJX1X84CL"
});

export const auth = app.auth();
export default app;