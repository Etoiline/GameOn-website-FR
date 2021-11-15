/*fonction affichant le menu sur mobile*/
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");  //bground représente la div contenant le formulaire
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.getElementsByClassName("close")[0];
const modalName = document.getElementById("first");
const modalLastName = document.getElementById("last");
const modalMail = document.getElementById("email");
const modalBirthdate = document.getElementById("birthdate");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  console.log("fonction afficher");
  modalbg.style.display = "block";
}

// quitter le formulaire
modalClose.addEventListener("click", quitModal); 
function quitModal() {
  console.log("fonction quitter");
  modalbg.style.display = "none";
}


//contrôler le champ prénom
modalName.addEventListener("keyup", checkPrenom); 
const modalNameDiv = document.getElementsByClassName("formData")[0]; 
var checkPrenomResult = false;
function checkPrenom (event) {
  console.log("value", modalName.value, modalName.value.length);
  if (modalName.value.length<2){
    modalNameDiv.setAttribute("data-error-visible", "true");
    modalNameDiv.setAttribute("data-error", "2 caractères minimum");
    checkPrenomResult = false;
  }
  else {
    modalNameDiv.setAttribute("data-error-visible", "false");
    checkPrenomResult = true ;
  }
}


//contrôler le champ nom
modalLastName.addEventListener("keyup", checkNom); 
const modalLastNameDiv = document.getElementsByClassName("formData")[1]; 
var checkNomResult = false;
function checkNom (event) {
  if (modalLastName.value.length<2){
    modalLastNameDiv.setAttribute("data-error-visible", "true");
    modalLastNameDiv.setAttribute("data-error", "2 caractères minimum");
    checkNomResult = false;
  }
  else {
    modalLastNameDiv.setAttribute("data-error-visible", "false");
    checkNomResult = true;
  }
}


//contrôler le champ mail
modalMail.addEventListener("keyup", checkMail); 
const modalMailDiv = document.getElementsByClassName("formData")[2]; 
var checkMailResult = false;
function checkMail (event) {
  const regMail = /^[0-9a-z._-]+@{1}[0-9a-z]{2,}[.]{1}[a-z]{2,5}$/i;
  if ((regMail.test(modalMail.value))==false){
    modalMailDiv.setAttribute("data-error-visible", "true");
    modalMailDiv.setAttribute("data-error", "format non valide");
    checkMailResult = false;
  }
  else {
    modalMailDiv.setAttribute("data-error-visible", "false");
    checkMailResult = true;
  }
}




//contrôler le champ date de naissance
modalBirthdate.addEventListener("keyup", checkBirthdate); 
const modalBirthdateDiv = document.getElementsByClassName("formData")[3]; 
var checkBirthDateResult = false;
function checkBirthdate (event) {
  //récupération de la date courante
  var now = new Date();
  var annee = now.getFullYear();
  var mois = ('0'+(now.getMonth()+1)).slice(-2);
  var jour = ('0'+now.getDate()).slice(-2);
  console.log(annee, mois, jour);

  //extraction de la date entrée
  const regDate = /(\d+)-(\d+)-(\d+)/;
  var result = modalBirthdate.value.match(regDate);
  console.log("bdate", modalBirthdate.value);
  console.log(result[1]);//annee
  console.log(result[2]);//mois
  console.log(result[3]);//jour

}