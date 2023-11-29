

const firebaseConfig = {
    apiKey: "AIzaSyBB6WgLxqm9m0xnFg_PU3pjYdDjr8muGnY",
    authDomain: "manage-apartnment.firebaseapp.com",
    databaseURL: "https://manage-apartnment-default-rtdb.firebaseio.com",
    projectId: "manage-apartnment",
    storageBucket: "manage-apartnment.appspot.com",
    messagingSenderId: "156031117766",
    appId: "1:156031117766:web:4e6c7fcfae88aeb3232ac7"
  };

  firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var password = getElementVal("password");

  saveMessages(name, email ,password);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, password) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    password: password,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};