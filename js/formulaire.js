// 1-SELECTEURS
let texteH2 = document.querySelector("h2"),
  inputNom = document.getElementById("nom"),
  inputEmail = document.getElementById("email"),
  inputPassword = document.getElementById("password"),
  inputPasswordVerif = document.getElementById("password-verif"),
  errorNom = document.getElementById("errorNom"),
  errorEmail = document.getElementById("errorEmail"),
  errorPassword = document.getElementById("errorPassword"),
  errorPasswordVerif = document.getElementById("errorPassword-verif"),
  togglePassword = document.querySelector("#togglePassword"),
  togglePasswordVerif = document.querySelector("#togglePassword-verif");

// Event sur l'input NOM
inputNom.addEventListener("change", function (e) {
  let nom = e.target.value;

  if (nom != "") {
    inputNom.style.border = "2px solid #65da97";
    errorNom.innerHTML = "";
    texteH2.innerHTML = `${nom}, ${texteH2.innerHTML}`;
    document.querySelector("#nom + .fa-check-circle").style.visibility =
      "visible";
    document.querySelector(
      "#nom + .fa-check-circle + .fa-exclamation-circle"
    ).style.visibility = "hidden";
  } else {
    inputNom.style.border = "2px solid #e74c3c";
    errorNom.innerHTML = "Veuillez renseigner votre nom";
    errorNom.style.color = "#e74c3c";
    document.querySelector(
      "#nom + .fa-check-circle + .fa-exclamation-circle"
    ).style.visibility = "visible";
  }
});

// Event sur l'input EMAIL
inputEmail.addEventListener("change", function (e) {
  let email = e.target.value;

  if (email.includes("@")) {
    inputEmail.style.border = "2px solid #65da97";
    errorEmail.innerHTML = "";
    document.querySelector("#email + .fa-check-circle").style.visibility =
      "visible";
    document.querySelector(
      "#email + .fa-check-circle + .fa-exclamation-circle"
    ).style.visibility = "hidden";
  } else {
    inputEmail.style.border = "2px solid #e74c3c";
    errorEmail.innerHTML = "L'adresse email est incorrecte";
    errorEmail.style.color = "#e74c3c";
    document.querySelector("#email + .fa-check-circle").style.visibility =
      "hidden";
    document.querySelector(
      "#email + .fa-check-circle + .fa-exclamation-circle"
    ).style.visibility = "visible";
  }
});

// Event sur l'input PASSWORD
inputPassword.addEventListener("change", function (e) {
  let password = e.target.value;

  if (password.length >= 5) {
    inputPassword.style.border = "2px solid #65da97";
    errorPassword.innerHTML = "";
    document.querySelector("#password + .fa-check-circle").style.visibility =
      "visible";
    document.querySelector(
      "#password + .fa-check-circle + .fa-exclamation-circle"
    ).style.visibility = "hidden";
  } else {
    inputPassword.style.border = "2px solid #e74c3c";
    errorPassword.innerHTML =
      "Le mot de passe doit faire au moins 5 caractères";
    errorPassword.style.color = "#e74c3c";
    document.querySelector("#password + .fa-check-circle").style.visibility =
      "hidden";
    document.querySelector(
      "#password + .fa-check-circle + .fa-exclamation-circle"
    ).style.visibility = "visible";
  }
});

// Event sur l'input PASSWORD VERIF
inputPasswordVerif.addEventListener("change", function (e) {
  let passwordVerif = e.target.value;

  if (passwordVerif == inputPassword.value) {
    inputPasswordVerif.style.border = "2px solid #65da97";
    errorPasswordVerif.innerHTML = "";
    document.querySelector(
      "#password-verif + .fa-check-circle"
    ).style.visibility = "visible";
    document.querySelector(
      "#password-verif + .fa-check-circle + .fa-exclamation-circle"
    ).style.visibility = "hidden";
  } else {
    inputPasswordVerif.style.border = "2px solid #e74c3c";
    errorPasswordVerif.innerHTML =
      "Veuillez indiquer à nouveau le mot de passe";
    errorPasswordVerif.style.color = "#e74c3c";
    document.querySelector(
      "#password-verif + .fa-check-circle"
    ).style.visibility = "hidden";
    document.querySelector(
      "#password-verif + .fa-check-circle + .fa-exclamation-circle"
    ).style.visibility = "visible";
  }
});

// Event sur l'input PASSWORD avec permutation de visibilité des caractères
togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  let type =
    inputPassword.getAttribute("type") === "password" ? "text" : "password";
  inputPassword.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("fa-eye-slash");
});

// Event sur l'input PASSWORDVERIF avec permutation de visibilité des caractères
togglePasswordVerif.addEventListener("click", function () {
  // toggle the type attribute
  let type =
    inputPasswordVerif.getAttribute("type") === "password"
      ? "text"
      : "password";
  inputPasswordVerif.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("fa-eye-slash");
});

// prevent form submit
let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});


// upload la photo
let imageInput = document.querySelector("#image-input");

imageInput.addEventListener("change", function (){
  let reader = new FileReader();
  reader.addEventListener("load", () => {
    let uploadedImage = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploadedImage})`;
    document.querySelector("#display-image").style.backgroundColor = "white";
    document.querySelector("#display-image").classList.toggle("fa-upload");
    imageInput.style.visibility = "hidden";
  });
    reader.readAsDataURL(this.files[0]);
});

/*

upload file

const image_input = document.querySelector("#image_input");

image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

*/