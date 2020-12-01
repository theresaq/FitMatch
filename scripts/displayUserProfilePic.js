function displayUserProfilePic(){
    firebase.auth().onAuthStateChanged(function(user){
        if (user) {
        db.collection("users").doc(user.uid)
        .get()
        .then(function(doc){
            var picUrl = doc.data().photo;
            console.log(picUrl);
            if (picUrl != null) {
                $("#profilephoto").append("<img src='" + picUrl + "' id='circle'>")
            }
        })
    }
    })
}
displayUserProfilePic();