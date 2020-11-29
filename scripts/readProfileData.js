// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         function readUserName(){
//             db.collection("users").doc(user.uid)
//             .onSnapshot(function(snap){
//                 document.getElementById("Age").innerText = snap.data().DOB;
//                 document.getElementById("City").innerText = snap.data().city;
//                 document.getElementById("Gender").innerText = snap.data().gender;
//                 document.getElementById("activity1").innerText = snap.data().activity1;
//                 document.getElementById("skill1").innerText = snap.data().skill1;  
//             })
//         }
        
//         readUserName();
//     } else {
//       // do nothing
//     }
//   });


firebase.auth().onAuthStateChanged(function(user){
    if (user) {
        function getUsersWithQuery(){
            db.collection("users")
            .where("province", "==", "BC")
            .get()
            .then (function(snap){
                snap.forEach(function(doc){
                    console.log("is from BC: ", doc.data().name);
                    document.getElementById("UserName").innerText = doc.data().name;
                    document.getElementById("Gender").innerText = doc.data().gender;
                    document.getElementById("Age").innerText = getAge(doc.data().DOB);
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

function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
        function readProfileData(){
            db.collection("users").doc(user.uid)
            .onSnapshot(function(snap){
                document.getElementById("Age").innerText = snap.data().DOB;
                document.getElementById("City").innerText = snap.data().city;
                document.getElementById("Province").innerText = snap.data().province;
                document.getElementById("Gender").innerText = snap.data().gender;
                document.getElementById("activity1").innerText = snap.data().activity1;
                document.getElementById("skill1").innerText = snap.data().skill1;
            })
        }
        readProfileData();
    } else {
      console.log("Error reading user data.");
    }
    return age;
}