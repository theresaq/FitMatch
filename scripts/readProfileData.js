firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        function readProfileData(){
            db.collection("users").doc(user.uid)
            .onSnapshot(function(snap){
                document.getElementById("Birthday").innerText = snap.data().DOB;
                document.getElementById("City").innerText = snap.data().city;
                document.getElementById("Province").innerText = snap.data().province;
                document.getElementById("Gender").innerText = snap.data().gender;
                document.getElementById("Activity-1").innerText = snap.data().activity1;
                document.getElementById("SkillLevel-1").innerText = snap.data().skill1;

            })
        }

        readProfileData();
    } else {

      console.log("Error reading user data.");
    }
  });