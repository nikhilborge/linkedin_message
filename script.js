// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDdV-KqJqVn4-Q0pm1iu3187F5uR1bR_8s",
  authDomain: "linkedinmsg-85867.firebaseapp.com",
  projectId: "linkedinmsg-85867",
  storageBucket: "linkedinmsg-85867.appspot.com",
  messagingSenderId: "29377870378",
  appId: "1:29377870378:web:6a68ce6956ff8b57ba6153",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = firebase.database();




function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}




async function loginWithGoogle(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
.signInWithPopup(provider)
  .then((result) => {
    console.log(result);
    console.log(result.additionalUserInfo.profile.name);
    console.log(result.additionalUserInfo.profile.email);
    console.log(result.additionalUserInfo.profile.picture);
    
  })

}


const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    console.log(user.uid);
    console.log(user.email);
    console.log(user.displayName);
    console.log(user.photoURL);
    // console.log(user.profileUrl);
    let url = "";
    writeUserData(user.uid,user.displayName, user.email, user.photoURL);

  } else {
    console.log('signout');
  }
});

function logout(){
  firebase.auth().signOut();
}






