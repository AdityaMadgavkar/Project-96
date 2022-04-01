//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyDg6w0GrbBtqHybaKU2RhtQcBMlE0YALVY",
      authDomain: "kwitter-94d94.firebaseapp.com",
      databaseURL: "https://kwitter-94d94-default-rtdb.firebaseio.com",
      projectId: "kwitter-94d94",
      storageBucket: "kwitter-94d94.appspot.com",
      messagingSenderId: "663675092016",
      appId: "1:663675092016:web:7235cc706e111b655701f5"
    };

     firebase.initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";

}
