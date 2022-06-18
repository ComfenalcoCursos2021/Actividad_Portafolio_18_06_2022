importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js");
importScripts("Plantillas.js");
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
    firebase.database().ref("menu").on("value", (e)=>{
        postMessage({menu: menu(e.val())});
    })
    firebase.database().ref("home").on("value", (e)=>{
        postMessage({home: home(e.val())});
    })
    firebase.database().ref("about").on("value", (e)=>{
        postMessage({about: about(e.val())});
    })
    firebase.database().ref("service").on("value", (e)=>{
        postMessage({service: service(e.val())});
    })
})