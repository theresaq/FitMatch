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
                    db.collection("users")
                        .where("name", "==", firstFav)
                        .get()
                        .then(function (snap) {
                            snap.forEach(function (doc) {
                                console.log("is from BC: ", doc.data().name);
                                document.getElementById("firstActivity").innerText = doc.data().activity1;
                                var picUrl = doc.data().photo;
                                // $("#firstPic").before("<img src='" + picUrl + "' class='list-img-top'>")
                                $("#firstPic").before("<img src='" + picUrl + "' class='list-img-top'>")
                                
                            })
                        })
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
        function readUserName1(){
            db.collection("users").doc(user.uid)
            .onSnapshot(function(snap){
                var secondFav = snap.data().hearts[1];
                document.getElementById("secondFavName").innerText = snap.data().hearts[1];
                
                // NOW LOOK FOR THE PHOTO AND THE MAIN ACTIVITY
                
                    db.collection("users")
                        .where("name", "==", secondFav)
                        .get()
                        .then(function (snap) {
                            snap.forEach(function (doc) {
                                console.log("is from BC: ", doc.data().name);
                                document.getElementById("secondActivity").innerText = doc.data().activity1;
                                var picUrl = doc.data().photo;
                                $("#firstPic").remove("<img src='" + picUrl + "' class='list-img-top'>")
                                $("#secondPic").before("<img src='" + picUrl + "' class='list-img-top'>")
                                
                            })
                
                        })
            })
        }
        readUserName1();
    } else {
      // do nothing
    }
  });

    // Third FAVORITED USER 
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        function readUserName2(){
            db.collection("users").doc(user.uid)
            .onSnapshot(function(snap){
                var thirdFav = snap.data().hearts[2];
                document.getElementById("thirdFavName").innerText = snap.data().hearts[2];
                
                // NOW LOOK FOR THE PHOTO AND THE MAIN ACTIVITY
                
                    db.collection("users")
                        .where("name", "==", thirdFav)
                        .get()
                        .then(function (snap) {
                            snap.forEach(function (doc) {
                                console.log("is from BC: ", doc.data().name);
                                document.getElementById("thirdActivity").innerText = doc.data().activity1;
                                var picUrl = doc.data().photo;
                                $("#thirdPic").before("<img src='" + picUrl + "' class='list-img-top'>")
                                
                            })
                
                        })
            })
        }
        readUserName2();
    } else {
      // do nothing
    }
  });


//       // fourth FAVORITED USER 
// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         function readUserName3(){
//             db.collection("users").doc(user.uid)
//             .onSnapshot(function(snap){
//                 var fourthFav = snap.data().hearts[3];
//                 document.getElementById("fourthFavName").innerText = snap.data().hearts[3];
                
//                 // NOW LOOK FOR THE PHOTO AND THE MAIN ACTIVITY
                
//                     db.collection("users")
//                         .where("name", "==", fourthFav)
//                         .get()
//                         .then(function (snap) {
//                             snap.forEach(function (doc) {
//                                 console.log("is from BC: ", doc.data().name);
//                                 document.getElementById("thirdActivity").innerText = doc.data().activity1;
//                                 var picUrl = doc.data().photo;
//                                 $("#fourthPic").before("<img src='" + picUrl + "' class='list-img-top'>")
                                
//                             })
                
//                         })
//             })
//         }
//         readUserName();
//     } else {
//       // do nothing
//     }
//   });
