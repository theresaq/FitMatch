firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        function readUserName(){
            db.collection("users").doc(user.uid)
            .onSnapshot(function(snap){
                document.getElementById("Age").innerText = snap.data().DOB;
                document.getElementById("City").innerText = snap.data().city;
                document.getElementById("Gender").innerText = snap.data().gender;
                document.getElementById("activity1").innerText = snap.data().activity1;
                document.getElementById("skill1").innerText = snap.data().skill1;
                
            })
        }
        
        readUserName();
    } else {
      // do nothing
    }
  });