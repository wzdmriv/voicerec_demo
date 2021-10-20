const firebaseConfig = {
    apiKey: "AIzaSyDoHRQUxGHQzz4L6mxFjB2DBWSISHrZxNw",
    authDomain: "rec-radio-demo.firebaseapp.com",
    projectId: "rec-radio-demo",
    storageBucket: "rec-radio-demo.appspot.com",
    messagingSenderId: "876873665397",
    appId: "1:876873665397:web:788fc18294dc4e447aa13c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
var storageRef = storage.ref();