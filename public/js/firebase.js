// Initialize Firebase
var config = {
    apiKey: "AIzaSyBQce0nrlup-6npCVtCDprkAnluxBAsJ_g",
    authDomain: "poker-cfe40.firebaseapp.com",
    databaseURL: "https://poker-cfe40.firebaseio.com",
    storageBucket: "poker-cfe40.appspot.com",
    messagingSenderId: "654567084079"
};
firebase.initializeApp(config);

// Get a reference to the database service and expose it as a global variable
window.db = firebase.database();
