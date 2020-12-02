$(".heart.fa").click(function() {
    $(this).toggleClass("fa-heart fa-heart-o");

    if ($("#heart").hasClass('fa-heart')) {
        console.log("ON");
        
        // Save to database
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users").doc(user.uid).update({
                hearts: firebase.firestore.FieldValue.arrayUnion(document.getElementById("UserName").innerText)
            })
        })
    } else {
        console.log("OFF");
        // Remove from database
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users").doc(user.uid).update({
                hearts: firebase.firestore.FieldValue.arrayRemove(document.getElementById("UserName").innerText)
            })
        })
    }
    
});


// FIRST FAVORITED USER 
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        function readUserName(){
            db.collection("users").doc(user.uid)
            .onSnapshot(function(snap){
                var firstFav = snap.data().hearts[0];
                document.getElementById("firstFavName").innerText = snap.data().hearts[0];
                
                // NOW LOOK FOR THE PHOTO AND THE MAIN ACTIVITY
                
                function getUsersWithQuery() {
                    db.collection("users")
                        .where("name", "==", firstFav)
                        .get()
                        .then(function (snap) {
                            snap.forEach(function (doc) {
                                console.log("is from BC: ", doc.data().name);
                                document.getElementById("firstActivity").innerText = doc.data().activity1;
                                var picUrl = doc.data().photo;
                                $("#firstPic").before("<img src='" + picUrl + "' class='list-img-top'>")
                                
                            })
                
                        })
                }
                
                getUsersWithQuery();

            })
        }

        readUserName();
    } else {
      // do nothing
    }
  });

  // SECOND FAVORITED USER 
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        function readUserName(){
            db.collection("users").doc(user.uid)
            .onSnapshot(function(snap){
                var secondFav = snap.data().hearts[1];
                document.getElementById("secondFavName").innerText = snap.data().hearts[1];
                
                // NOW LOOK FOR THE PHOTO AND THE MAIN ACTIVITY
                
                function getUsersWithQuery() {
                    db.collection("users")
                        .where("name", "==", secondFav)
                        .get()
                        .then(function (snap) {
                            snap.forEach(function (doc) {
                                console.log("is from BC: ", doc.data().name);
                                document.getElementById("secondActivity").innerText = doc.data().activity1;
                                var picUrl = doc.data().photo;
                                $("#secondPic").before("<img src='" + picUrl + "' class='list-img-top'>")
                                
                            })
                
                        })
                }
                
                getUsersWithQuery();

            })
        }

        readUserName();
    } else {
      // do nothing
    }
  });
