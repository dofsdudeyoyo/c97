var firebaseConfig = {
      apiKey: "AIzaSyCOiFoFnABWccNOEEz5HA7z-GK21od3i5A",
      authDomain: "class-test-b6b6a.firebaseapp.com",
      databaseURL: "https://class-test-b6b6a-default-rtdb.firebaseio.com",
      projectId: "class-test-b6b6a",
      storageBucket: "class-test-b6b6a.appspot.com",
      messagingSenderId: "185828936340",
      appId: "1:185828936340:web:2484fc3455732b7f748281"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function addRoom(){
          room_name= document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -"+Room_names);
      row="<div class='room_name id="+Room_names+"onclick ='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location="kwitter.html";
}
