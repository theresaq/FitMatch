var firebaseConfig = {
    apiKey: "AIzaSyAzoHv8rvnN_yh9-xjfa8vVln39PadObo0",
    authDomain: "fit-match.firebaseapp.com",
    databaseURL: "https://fit-match.firebaseio.com",
    projectId: "fit-match",
    storageBucket: "fit-match.appspot.com",
    messagingSenderId: "388515857656",
    appId: "1:388515857656:web:cf47d7d33ba25743f2270d",
    storageBucket: "fit-match.appspot.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Create the Firestore database object
// Henceforce, any reference to the database can be made with "db"
const db = firebase.firestore();

//Create reference to the storage service
var storage = firebase.storage();