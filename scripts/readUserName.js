firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        function readUserName(){
            db.collection("users").doc(user.uid)
            .onSnapshot(function(snap){
                console.log(snap.data());   //print the document fields of "01"
                console.log(snap.data().name);   //spelled EXACTLY as the firestore
                document.getElementById("UserName").innerText = snap.data().name;
            })
        }
        
        readUserName();
    } else {
      // do nothing
    }
  });
