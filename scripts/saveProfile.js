 //Saves the user's information to Firestore when user clicks on the Save button on the profile page
 const save = document.querySelector("#save");

 firebase.auth().onAuthStateChanged(function (user) {
     if (user) {
         save.addEventListener("click", function () {
             db.collection("users").doc(user.uid).update({
                 gender: document.getElementById("Gender").value,
                 DOB: document.getElementById("Birthday").value,
                 city: document.getElementById("City").value,
                 province: document.getElementById("Province").value,
                 activity1: document.getElementById("Activity-1").value,
                 skill1: document.getElementById("SkillLevel-1").value,
             }).then(function () {
                 console.log("Data successfully saved.");
             })
         });
     }
 });