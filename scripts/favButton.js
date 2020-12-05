$(".heart.fa").click(function () {
    //Toggles the heart button between filled and empty
    $(this).toggleClass("fa-heart fa-heart-o");

    if ($("#heart").hasClass('fa-heart')) {
        console.log("ON");

        // Add the liked user's name to user's hearts array on Firestore
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users").doc(user.uid).update({
                hearts: firebase.firestore.FieldValue.arrayUnion(document.getElementById("UserName").innerText)
            })
        })
    } else {
        console.log("OFF");
        // Remove the liked user's name to user's hearts array on Firestore
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users").doc(user.uid).update({
                hearts: firebase.firestore.FieldValue.arrayRemove(document.getElementById("UserName").innerText)
            })
        })
    }

});

//Displays information about the first liked user in Faves section
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        function readUserName() {
            db.collection("users").doc(user.uid)
                .onSnapshot(function (snap) {
                    var firstFav = snap.data().hearts[0];
                    // Displays liked user's name
                    document.getElementById("firstFavName").innerText = snap.data().hearts[0];

                    // Get the like user's photo and activity of interest
                    db.collection("users")
                        .where("name", "==", firstFav)
                        .get()
                        .then(function (snap) {
                            snap.forEach(function (doc) {
                                document.getElementById("firstActivity").innerText = doc.data().activity1;
                                var picUrl = doc.data().photo;
                                $("#photo1").replaceWith($("<img src='" + picUrl + "' id='photo1'>"))

                            })
                        })
                })
        }
        readUserName();
    }
});

//Displays information about the second liked user in Faves section
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        function readUserName1() {
            db.collection("users").doc(user.uid)
                .onSnapshot(function (snap) {
                    var secondFav = snap.data().hearts[1];
                    // Displays liked user's name
                    document.getElementById("secondFavName").innerText = snap.data().hearts[1];

                    // Get the like user's photo and activity of interest
                    db.collection("users")
                        .where("name", "==", secondFav)
                        .get()
                        .then(function (snap) {
                            snap.forEach(function (doc) {
                                document.getElementById("secondActivity").innerText = doc.data().activity1;
                                var picUrl = doc.data().photo;
                                $("#photo2").replaceWith($("<img src='" + picUrl + "' id='photo2'>"))
                            })

                        })
                })
        }
        readUserName1();
    }
});

//Displays information about the third liked user in Faves section
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        function readUserName2() {
            db.collection("users").doc(user.uid)
                .onSnapshot(function (snap) {
                    var thirdFav = snap.data().hearts[2];
                    // Displays liked user's name
                    document.getElementById("thirdFavName").innerText = snap.data().hearts[2];

                    // Get the like user's photo and activity of interest
                    db.collection("users")
                        .where("name", "==", thirdFav)
                        .get()
                        .then(function (snap) {
                            snap.forEach(function (doc) {
                                document.getElementById("thirdActivity").innerText = doc.data().activity1;
                                var picUrl = doc.data().photo;
                                $("#photo3").replaceWith($("<img src='" + picUrl + "' id='photo3'>"))
                            })

                        })
                })
        }
        readUserName2();
    }
});


//Displays information about the fourth liked user in Faves section
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        function readUserName3() {
            db.collection("users").doc(user.uid)
                .onSnapshot(function (snap) {
                    var fourthFav = snap.data().hearts[3];
                    // Displays liked user's name
                    document.getElementById("fourthFavName").innerText = snap.data().hearts[3];

                    // Get the like user's photo and activity of interest
                    db.collection("users")
                        .where("name", "==", fourthFav)
                        .get()
                        .then(function (snap) {
                            snap.forEach(function (doc) {
                                document.getElementById("fourthActivity").innerText = doc.data().activity1;
                                var picUrl = doc.data().photo;
                                $("#photo4").replaceWith($("<img src='" + picUrl + "' id='photo4'>"))
                            })
                        })
                })
        }
        readUserName3();
    }
});

//Displays information about the fifth liked user in Faves section
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        function readUserName4() {
            db.collection("users").doc(user.uid)
                .onSnapshot(function (snap) {
                    var fifthFav = snap.data().hearts[4];
                    // Displays liked user's name
                    document.getElementById("fifthFavName").innerText = snap.data().hearts[4];

                    // Get the like user's photo and activity of interest
                    db.collection("users")
                        .where("name", "==", fifthFav)
                        .get()
                        .then(function (snap) {
                            snap.forEach(function (doc) {
                                document.getElementById("fifthActivity").innerText = doc.data().activity1;
                                var picUrl = doc.data().photo;
                                $("#photo5").replaceWith($("<img src='" + picUrl + "' id='photo5'>"))
                            })
                        })
                })
        }
        readUserName4();
    }
});