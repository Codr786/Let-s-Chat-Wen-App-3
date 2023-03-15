function addUser() 
{
    
    localStorage.setItem("user_name",user_name);
    window.location = "chat_room.html";
}
function logout() 
{
    window.location = "index.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyAkNGMioEyt6_n8CXCjenovdHEuC6GNNCk",
    authDomain: "let-s-chat-web-app-5cadf.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-5cadf-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-5cadf",
    storageBucket: "let-s-chat-web-app-5cadf.appspot.com",
    messagingSenderId: "600391250165",
    appId: "1:600391250165:web:b4d3e07f0b8a209d4415bc",
    measurementId: "G-06SYQR7S4C"
  };
  
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 
  console.log("Room name - " +  Room_names);
       row = "<div class='Room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML +=row;

 });});}
getData();

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({ 
        purpose:"adding roomn name"
  });

  localStorage.setItem("room_name" , room_name);
  window.location = "chat_room.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
        window.location = "chat_room.html"

}
