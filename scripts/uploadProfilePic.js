// Upload user's profile picture
var btnUpload = $("#upload_file"),
    btnOuter = $(".button_outer");
btnUpload.on("change", function (e) {
    var ext = btnUpload.val().split('.').pop().toLowerCase();
    //Check if the file chosen is an image
    if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
        $(".error_msg").text("Not an Image...");
    } else {
        $(".error_msg").text("");
        btnOuter.addClass("file_uploading");
        setTimeout(function () {
            btnOuter.addClass("file_uploaded");
        }, 3000);

        //Store the uploaded user profile photo to Firebase Storage
        var uploadedFile = (e.target.files[0]);
        var uploadedFileURL = URL.createObjectURL(e.target.files[0]);
        var user = firebase.auth().currentUser;
        var storageRef = firebase.storage().ref(user.displayName + '/ProfilePicture/' + uploadedFile.name);
        console.log(storageRef);
        storageRef.put(uploadedFile)
            .then(function () {
                //Get an URL for the photo and add it to user's data on Firestore
                storageRef.getDownloadURL()
                    .then(function (url) {
                        console.log(url);
                        db.collection("users").doc(user.uid).update({
                            photo: url
                        })
                    })
            })

        setTimeout(function () {
            $("#uploaded_view").prepend('<img src="' + uploadedFileURL + '" />').addClass("show");
        }, 3500);
    }
});

//Remove the image view if user clicks on X
$(".file_remove").on("click", function (e) {
    $("#uploaded_view").removeClass("show");
    $("#uploaded_view").find("img").remove();
    btnOuter.removeClass("file_uploading");
    btnOuter.removeClass("file_uploaded");
});