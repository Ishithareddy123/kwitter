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
room_name=localStorage.getItem("room name");
console.log(user_name);
console.log(room_name);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
user=message_data['name'];
message=message_data['message'];
like=message_data['likes'];
message_name_tag="<h4>"+user+"<img class='user_tick' src='tick.png'> </h4>";
message_body="<h4 class='message_h4'>"+message+"</h4>";
message_likes="<button class='btn btn-warning' value="+like+" id="+firebase_message_id+" onclick='update_likes(this.id)'>";
button_content="<span class='glyphicon glyphicon-thumbs-up'> Likes: "+like+"</span></button><hr>";
row=message_name_tag+message_body+message_likes+button_content;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function update_likes(message_id){
      console.log(message_id);
  likes=document.getElementById(message_id).value;
  likes=Number(likes)+1;
  firebase.database().ref(room_name).child(message_id).update({
        likes:likes
  });
}
function send(){
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            likes:0
      });
      document.getElementById("message").value="";
}