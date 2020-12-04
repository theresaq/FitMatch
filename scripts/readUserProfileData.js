// Function to get user from the db and display in the homepage
var counter = 1;

function getUsersWithQuery(counter) {
    db.collection("users")
        .where("userNumber", "==", counter)
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                console.log("is from BC: ", doc.data().name);
                document.getElementById("UserName").innerText = doc.data().name;
                document.getElementById("Age").innerText = getAge(doc.data().DOB);
                document.getElementById("Gender").innerText = doc.data().gender;
                document.getElementById("City").innerText = doc.data().city;
                document.getElementById("activity1").innerText = doc.data().activity1;
                document.getElementById("skill1").innerText = doc.data().skill1;
                var picUrl = doc.data().photo;
                // CHANGED SO THAT THE IMAGE IS PUT INSIDE OF THE CARD , BEFORE THE OVERLAY ID
                $("#overlay").before("<img src='" + picUrl + "' class='card-img-top'>")
                //$(".card-img-top").replaceWith($("#overlay").before("<img src='" + picUrl + "' class='card-img-top'>"))
                //$("#profilepic").append("<img src='" + picUrl + "'>")
            })

        })
}

getUsersWithQuery(counter);

document.getElementById("skip").onclick = function () {
    counter++;
    console.log("Move to next user." + " Counter is at " + counter);
    db.collection("users")
    .where("userNumber", "==", counter)
    .get()
    .then(function (snap) {
        snap.forEach(function (doc) {
            console.log("is from BC: ", doc.data().name);
            document.getElementById("UserName").innerText = doc.data().name;
            document.getElementById("Age").innerText = getAge(doc.data().DOB);
            document.getElementById("Gender").innerText = doc.data().gender;
            document.getElementById("City").innerText = doc.data().city;
            document.getElementById("activity1").innerText = doc.data().activity1;
            document.getElementById("skill1").innerText = doc.data().skill1;
            var picUrl = doc.data().photo;
            // CHANGED SO THAT THE IMAGE IS PUT INSIDE OF THE CARD , BEFORE THE OVERLAY ID
            //$("#overlay").before("<img src='" + picUrl + "' class='card-img-top'>")
            $(".card-img-top").replaceWith($("<img src='" + picUrl + "' class='card-img-top'>"))
            //$("#profilepic").append("<img src='" + picUrl + "'>")
            
            //toggle the heart icon to empty if it's filled
            if ($("#heart").hasClass('fa-heart')) {
                $(".heart.fa").toggleClass("fa-heart-o fa-heart");
              }
        })

    })
}

 
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