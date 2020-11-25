  const save=document.querySelector("#save");

  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          save.addEventListener("click", function() {
            db.collection("users").doc(user.uid).set({
                name: user.displayName,
                email: user.email,
                gender: document.getElementById("Gender").value,
                DOB: document.getElementById("Birthday").value,
                city: document.getElementById("City").value,
                province: document.getElementById("Province").value
            }).then(function() {
                console.log("Data successfully saved.");
            })
          });
      }
  });
