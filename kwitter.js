// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDlLiuDZEvxQ2vJ6jZvKptURIZZTf0n3Q8",
  authDomain: "kwitter-project-67205.firebaseapp.com",
  databaseURL: "https://kwitter-project-67205-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-67205",
  storageBucket: "kwitter-project-67205.appspot.com",
  messagingSenderId: "510024997220",
  appId: "1:510024997220:web:446130521a6606d3138271"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}