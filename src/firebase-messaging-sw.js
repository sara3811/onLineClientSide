importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyCIHtntGaBKJLoinCcZkHBy3n4hQQF7YgE",
    authDomain: "students-1572475062058.firebaseapp.com",
    databaseURL: "https://students-1572475062058.firebaseio.com",
    projectId: "students-1572475062058",
    storageBucket: "students-1572475062058.appspot.com",
    messagingSenderId: "503656160727",
    appId: "1:503656160727:web:1ae9a929be1132fe06bf92",
    measurementId: "G-116RH47161"
});

const messaging = firebase.messaging();