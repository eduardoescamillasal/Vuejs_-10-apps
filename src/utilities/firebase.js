import * as firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDLFZ9vHcwiDgkm7r609PNgKWKXdmQwwtw",
    authDomain: "vue-full-course-3f9d1.firebaseapp.com",
    projectId: "vue-full-course-3f9d1",
    storageBucket: "vue-full-course-3f9d1.appspot.com",
    messagingSenderId: "1033794417738",
    appId: "1:1033794417738:web:d473817c8fe9d114b762b3"
};

//use default instead of firebase.initia...??
firebase.default.initializeApp(firebaseConfig);
const db = firebase.default.database();
export const chatsRef  = db.ref('chats');

export default firebase;
