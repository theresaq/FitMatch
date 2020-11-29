
//--------------------------------------------------------------------------------
//  This function read the collection of restaurants,
//  Dynamically create a place to display each restaurant,
//  Put a "heart" (font-awesome icon) beside the name with "id" (document id of the restaurant)
//  Then, add a listener to the heart.
//  In the handler:  
//      - toggle between the solid heart, and the outline heart
//      - if the full heart is chosen, then add to faves array
//      - otherwise, remove from faves array
//-------------------------------------------------------------------------------
firebase.auth().onAuthStateChanged(function(user){
    if (user) {
function displayUsersWithHeart() {
    db.collection("users")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                var name = doc.data().name;
                var id = doc.id;
                //console.log(name);

                //Display restaurant name, followed by a heart fontawesome icon
                $("#UserName")
                    .append("<p> " + name +
                    " <i id='" + id + "' class='fas fa-heart far fa-heart'> </i>"); //add heart class from fontawesome

                // When the Heart is clicked
                $("#" + id).click(function () { //add listener 

                    // Toggle between the full-heart ("fa-heart"), and the empty-heart ("fa-heart-o", outline heart)
                    $(this).toggleClass("far fa-heart fas fa-heart");

                    // If the "fas-heart" class is here, then add to faves, else remove from faves
                    if ($("#" + id).hasClass('far fa-heart')) {
                        console.log("ON");
                        // Save to database
                        firebase.auth().onAuthStateChanged(function (user) {
                            db.collection("users").doc(user.uid).update({
                                faves: firebase.firestore.FieldValue.arrayUnion(id)
                            })
                        })
                    } else {
                        console.log("OFF");
                        // Remove from database
                        firebase.auth().onAuthStateChanged(function (user) {
                            db.collection("users").doc(user.uid).update({
                                faves: firebase.firestore.FieldValue.arrayRemove(id)
                            })
                        })
                    }
                });
            })
        })
}
displayUsersWithHeart();
} else {
    // do nothing
}
});
