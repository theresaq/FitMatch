var likedUid = [];

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        db.collection("users").doc(user.uid).onSnapshot(function (snap) {
            var userLikes = snap.data().hearts;
            var userName = snap.data().name;

            for (var index = 0; index < userLikes.length; index++) {
                // look for the liked users in the database
                var userQuery = db.collection("users").where("name", "==", userLikes[index]);

                // add each of the liked user's uids to likedUid list
                userQuery
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        likedUid.push(doc.id);
                    });

                    // for each liked user, check if the user is also in the liked user's hearts list
                    for (var index = 0; index < likedUid.length; index++) {
                        // store the uid of the liked user
                        var likedUserUid = likedUid[index];

                        // get the liked user's list of likes
                        db.collection("users").doc(likedUid[index]).onSnapshot(function (snap) {
                            var likedUsersLikes = snap.data().hearts;
        
                            // check if user's name is contained in liked user's hearts
                            if (likedUsersLikes.includes(userName)) {
                                //get the name of the liked user
                                db.collection("users").doc(likedUserUid).onSnapshot(function(snap){
                                    var likedUserName = snap.data().name;
                                    db.collection("users").doc(user.uid).update({
                                        matches: firebase.firestore.FieldValue.arrayUnion(likedUserName)
                                    })
                                })
                                

                            }
                        })
                    }


                })

            }


        })
    }
})