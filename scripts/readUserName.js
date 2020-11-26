firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        function readUserName(){
            db.collection("users").doc(user.uid)
            .onSnapshot(function(snap){
                document.getElementById("UserName").innerText = snap.data().name;
            })
        }

        readUserName();
    } else {
      // do nothing
    }
  });
