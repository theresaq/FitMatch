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

