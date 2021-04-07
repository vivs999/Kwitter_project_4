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
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    console.log("Room Name - "+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html"
}
