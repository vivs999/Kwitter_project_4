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

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });

      document.getElementById("msg").value = "";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
