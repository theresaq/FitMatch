// Function to get user profiles from the db and display on the homepage
var counter = 1;

function getUsersWithQuery(counter) {
    db.collection("users")
        .where("userNumber", "==", counter)
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
                $("#overlay").before("<img src='" + picUrl + "' class='card-img-top'>")
            })
        })
}

getUsersWithQuery(counter);

// Display the next profile when user clicks on the skip button
document.getElementById("skip").onclick = function () {
    counter++;
    db.collection("users")
        .where("userNumber", "==", counter)
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
                $(".card-img-top").replaceWith($("<img src='" + picUrl + "' class='card-img-top'>"))
                //toggle the heart icon to empty if it's filled
                if ($("#heart").hasClass('fa-heart')) {
                    $(".heart.fa").toggleClass("fa-heart-o fa-heart");
                }
            })
        })
}


// Function to get the age of each user profile
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