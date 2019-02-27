// Initialize Firebase
var config = {
  apiKey: "AIzaSyDccmcv3BehS7VGZI-2K3m6OD9AsLeHJIk",
  authDomain: "wp-contact-40967.firebaseapp.com",
  databaseURL: "https://wp-contact-40967.firebaseio.com",
  projectId: "wp-contact-40967",
  storageBucket: "wp-contact-40967.appspot.com",
  messagingSenderId: "431214982847"
};
firebase.initializeApp(config);

// Reference messages collection
var messageRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submitting contact form
function submitForm(e) {
  e.preventDefault();

  // making sure submit button returns value
  // console.log(12345);
  
  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // save messages
  saveMessage(name, email, message);

  // showing/ adding alert message, once message has been sent
  document.querySelector('.alert').style.display = "block";

  // hiding alert after x seconds
  setTimeout(function() {
    document.querySelector('.alert').style.display = "none";
  }, 4000);

  // clear contact form after submission
  document.getElementById('contactForm').reset();

  // console.log(name);
  // console.log(email);
  // console.log(message);
}

// function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// save messages to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  })
}