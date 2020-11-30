// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {

            var user = authResult.user;
            if (authResult.additionalUserInfo.isNewUser) {
                db.collection("users").doc(user.uid).set({
                        name: user.displayName,
                        email: user.email,
                        gender:null,
                        DOB:null,
                        city:null,
                        province:null,
                        activity1:null,
                        skill1:null,
                        hearts:[],
                        photoURL:null
                    }).then(function () {
                        console.log("New user added to firestore");
                        window.location.assign("profile.html");
                    })
                    .catch(function (error) {
                        console.log("Error adding new user: " + error);
                    });
            } else {
                return true;
            }
            return false;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'profile.html',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,

    ],
    // Terms of service url.
    tosUrl: 'home.html',
    // Privacy policy url.
    privacyPolicyUrl: 'home.html',
    accountChooserEnabled: false
};

ui.start('#firebaseui-auth-container', uiConfig);