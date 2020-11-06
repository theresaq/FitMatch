var firebaseConfig = {
    apiKey: "AIzaSyAckox_zIqhEH-bpkKPAXbo1W7Xfc8cKOo",
    authDomain: "fitmatch-50907.firebaseapp.com",
    databaseURL: "https://fitmatch-50907.firebaseio.com",
    projectId: "fitmatch-50907",
    storageBucket: "fitmatch-50907.appspot.com",
    messagingSenderId: "964225984537",
    appId: "1:964225984537:web:638cbde4774c79e8682288"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Create the Firestore database object
// Henceforce, any reference to the database can be made with "db"
const db = firebase.firestore();