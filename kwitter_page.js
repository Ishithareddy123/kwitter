//YOUR FIREBASE LINKS
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

user_name=localStorage.getItem("user name ");
room_name=localStorage.getItem("roomname");
console.log(user_name);
console.log(room_name);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            meassage:msg,
            likes:0
      });
      document.getElementById("message").value="";
}