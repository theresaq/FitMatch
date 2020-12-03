// fourth FAVORITED USER 
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        function readUserName4(){
            db.collection("users").doc(user.uid)
            .onSnapshot(function(snap){
                var fourthFav = snap.data().hearts[3];
                document.getElementById("fourthFavName").innerText = snap.data().hearts[3];
                
                // NOW LOOK FOR THE PHOTO AND THE MAIN ACTIVITY
                
                    db.collection("users")
                        .where("name", "==", fourthFav)
                        .get()
                        .then(function (snap) {
                            snap.forEach(function (doc) {
                                console.log("is from BC: ", doc.data().name);
                                document.getElementById("thirdActivity").innerText = doc.data().activity1;
                                var picUrl = doc.data().photo;
                                $("#fourthPic").before("<img src='" + picUrl + "' class='list-img-top'>")
                                
                            })
                
                        })
            })
        }
        readUserName4();
    } else {
      // do nothing
    }
  });
