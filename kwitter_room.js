var firebaseConfig = {
    apiKey: "AIzaSyDtdtacm3LgAhre9HVorAgw_-I7UcQQ3gw",
    authDomain: "let-s-chat-web-app-83f2e.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-83f2e-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-83f2e",
    storageBucket: "let-s-chat-web-app-83f2e.appspot.com",
    messagingSenderId: "97089235388",
    appId: "1:97089235388:web:032e72444d7162501963b9"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room name-" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="quitter_page.html";
}

function addRoom(){

room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

}

function logOut(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="Index.html";

}


