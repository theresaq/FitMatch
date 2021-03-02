//Still under testing

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var userMatches = [];
        db.collection("users").doc(user.uid).onSnapshot(function (snap) {
            var activity1 = snap.data().activity1;

            //look for users that have the same interest
            var interestQuery = db.collection("users").where("activity1", "==", activity1);

            interestQuery
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        //add each user with the same interest to the userMatches array
                        userMatches.push(doc.id);
                    });
                });
        })
        var index = 1;
        var nextUser;
        document.getElementById("skip").onclick = function () {
            // Make sure not to display user's own profile 
            if (user.uid == userMatches[index]) {
                index++;
                nextUser = userMatches[index];
                index++;
            } else {
                nextUser = userMatches[index];
                index++;
            }


            db.collection("users")
                .where("uid", "==", nextUser)
                .get()
                .then(function (snap) {
                    snap.forEach(function (doc) {
                        document.getElementById("UserName").innerText = doc.data().name;
                        document.getElementById("Age").innerText = getAge(doc.data().DOB);
                        document.getElementById("Gender").innerText = doc.data().gender;
                        document.getElementById("City").innerText = doc.data().city;
                        document.getElementById("activity1").innerText = doc.data().activity1;
                        document.getElementById("skill1").innerText = doc.data().skill1;
                        var picUrl = doc.data().photo;
                        // CHANGED SO THAT THE IMAGE IS PUT INSIDE OF THE CARD , BEFORE THE OVERLAY ID
                        $(".card-img-top").replaceWith($("<img src='" + picUrl + "' class='card-img-top'>"))
                        //$(".card-img-top").replaceWith($("#overlay").before("<img src='" + picUrl + "' class='card-img-top'>"))
                        //$("#profilepic").append("<img src='" + picUrl + "'>")

                        //toggle the heart icon to empty if it's filled
                        if ($("#heart").hasClass('fa-heart')) {
                            $(".heart.fa").toggleClass("fa-heart-o fa-heart");
                        }
                    })

                })
            db.collection("users").doc(user.uid).update({
                viewed: firebase.firestore.FieldValue.arrayUnion(document.getElementById("UserName").innerText)
            })
        }
    }
})

// Function to get User's age
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}