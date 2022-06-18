importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js");

const firebaseConfig = {
    apiKey: "AIzaSyDFLrIzXZY8OmpbHMUvVNOsK7mkvNvxYTw",
    authDomain: "actividadportafolio-1117d.firebaseapp.com",
    databaseURL: "https://actividadportafolio-1117d-default-rtdb.firebaseio.com",
    projectId: "actividadportafolio-1117d",
    storageBucket: "actividadportafolio-1117d.appspot.com",
    messagingSenderId: "174915185558",
    appId: "1:174915185558:web:bb0e2a008f4a79632e0bb7"
};

addEventListener("message", ()=>{
    firebase.initializeApp(firebaseConfig);
    firebase.database().ref("lista").on("value", (e)=>{
        postMessage(e.val());
    })
})