//After a user uploads a profile picture, display it on the profile page.
function displayUserProfilePic() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            db.collection("users").doc(user.uid)
                .get()
                .then(function (doc) {
                    var picUrl = doc.data().photo;
                    if (picUrl != null) {
                        $("#profilephoto").append("<img src='" + picUrl + "' id='circle'>")
                    }
                })
        }
    })
}
displayUserProfilePic();