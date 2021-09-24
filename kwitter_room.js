
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyC_Y0a-_fIXEYvY_7hmTC-6fltTVh1nqf0",
      authDomain: "kwitter-part-1-ee582.firebaseapp.com",
      databaseURL: "https://kwitter-part-1-ee582-default-rtdb.firebaseio.com",
      projectId: "kwitter-part-1-ee582",
      storageBucket: "kwitter-part-1-ee582.appspot.com",
      messagingSenderId: "1064880053214",
      appId: "1:1064880053214:web:b8e373c33d987818a01b4f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function add_room(){
      room=document.getElementById("room").value;
      firebase.database().ref("/").child(room).update({
            purpose:"Adding the room",
      });
      localStorage.setItem("room name",room);
}