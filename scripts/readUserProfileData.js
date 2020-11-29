// Function to get user from the db and display in the homepage
firebase.auth().onAuthStateChanged(function(user){
    if (user) {
        function getUsersWithQuery(){
            db.collection("users")
            .where("gender", "==", "Female")
            .get()
            .then (function(snap){
                snap.forEach(function(doc){
                    console.log("is from BC: ", doc.data().name);
                    document.getElementById("UserName").innerText = doc.data().name;
                    document.getElementById("Age").innerText = getAge(doc.data().DOB);
                    document.getElementById("Gender").innerText = doc.data().gender;
                    document.getElementById("City").innerText = doc.data().city;
                    document.getElementById("activity1").innerText = doc.data().activity1;
                    document.getElementById("skill1").innerText = doc.data().skill1;
                })
            })
        }
        getUsersWithQuery();
    } else {
        // do nothing
    }
});

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

