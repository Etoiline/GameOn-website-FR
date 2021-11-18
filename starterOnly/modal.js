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
const modalTournoi = document.getElementById("quantity");
const modalCity = document.getElementsByName("location");
const modalTerms = document.getElementById("checkbox1");


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
  //console.log("fonction quitter");
  modalbg.style.display = "none";
}


const regName = /^[a-zéè]+(?:[\s-]?[a-zéè])+$/i;

//contrôler le champ prénom
modalName.addEventListener("input", checkPrenom); 
const modalNameDiv = document.getElementsByClassName("formData")[0]; 
var checkPrenomResult = false;
function checkPrenom (event) {
  if ((regName.test(modalName.value))==false){
    modalNameDiv.setAttribute("data-error-visible", "true");
    checkPrenomResult = false;
    if (modalName.value.length<2){
      modalNameDiv.setAttribute("data-error", "2 caractères minimum");
    }
    else {
      modalNameDiv.setAttribute("data-error", "prénom non conforme");
    }
  }
  else {
    modalNameDiv.setAttribute("data-error-visible", "false");
    checkPrenomResult = true ;
  }
  return checkPrenomResult;
}



//contrôler le champ nom
modalLastName.addEventListener("input", checkNom); 
const modalLastNameDiv = document.getElementsByClassName("formData")[1]; 
var checkNomResult = false;
function checkNom (event) {
  if ((regName.test(modalLastName.value))==false){
    modalLastNameDiv.setAttribute("data-error-visible", "true");
    checkNomResult = false;
    if (modalLastName.value.length<2){
      modalLastNameDiv.setAttribute("data-error", "2 caractères minimum");
    }
    else {
      modalLastNameDiv.setAttribute("data-error", "nom non conforme");
    }
  }
  else {
    modalLastNameDiv.setAttribute("data-error-visible", "false");
    checkNomResult = true ;
  }
  return checkNomResult;
}


//contrôler le champ mail
modalMail.addEventListener("input", checkMail); 
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
  return checkMailResult;
}




//contrôler le champ date de naissance
modalBirthdate.addEventListener("input", checkBirthdate); 
const modalBirthdateDiv = document.getElementsByClassName("formData")[3]; 
var checkBirthDateResult = false;
function checkBirthdate (event) {
  //récupération de la date courante
  var now = new Date();
  var annee = now.getFullYear();
  var mois = ('0'+(now.getMonth()+1)).slice(-2);
  var jour = ('0'+now.getDate()).slice(-2);
  //console.log(annee, mois, jour);

  //extraction de la date entrée
  const regDate = /(\d+)-(\d+)-(\d+)/;
  var result = modalBirthdate.value.match(regDate);
if (result){
    if (result[1]<annee) {
      checkBirthDateResult = true;
    }
    else if (result[1]==annee && result[2]<mois){
      checkBirthDateResult = true;
    }
    else if (result[1]==annee && result[2]==mois && result[3]<jour) {
      checkBirthDateResult = true ;
    }
  }
  else {
    checkBirthDateResult = false;
    modalBirthdateDiv.setAttribute("data-error-visible", "true");
    modalBirthdateDiv.setAttribute("data-error", "la date doit être antérieure à la date courante");
  }

  if (checkBirthDateResult==true) {
    modalBirthdateDiv.setAttribute("data-error-visible", "false");
  }
  return checkBirthDateResult;
}



//contrôler le champ nombre de tournoi
modalTournoi.addEventListener("input", checkTournoi); 
const modalTournoiDiv = document.getElementsByClassName("formData")[4]; 
var checkTournoiResult = false;
function checkTournoi (event) {
  const regTournoi = /^\d+$/i;
  if ((regTournoi.test(modalTournoi.value))==false || parseInt(modalTournoi.value)>99){
    modalTournoiDiv.setAttribute("data-error-visible", "true");
    modalTournoiDiv.setAttribute("data-error", "format non valide");
    checkTournoiResult = false;
  }
  else {
    modalTournoiDiv.setAttribute("data-error-visible", "false");
    checkTournoiResult = true;
  }

  return checkTournoiResult;
}


//vérification des villes
const modalCityDiv = document.getElementsByClassName("formData")[5]; 
var checkCityResult = false;
for (var i=0 ; i<modalCity.length ; i++ ) {
  modalCity[i].addEventListener("input", checkCity);
}
function checkCity (event) {
  //console.log("événementn");
  var checkCityOk = false
  
  for (var i=0 ; i<modalCity.length ; i++ ) {
    if (modalCity[i].checked){
      checkCityOk = true ;
      //console.log("coche", modalCity[i].value);
    }
  }
  if (checkCityOk==false) {
    modalCityDiv.setAttribute("data-error-visible", "true");
    modalCityDiv.setAttribute("data-error", "Veuillez cocher une ville");
    checkCityResult = false;
  }
  else {
    modalCityDiv.setAttribute("data-error-visible", "false");
    checkCityResult = true;
  }
  return checkCityResult;
}



//vérification des conditions d'utilisation
modalTerms.addEventListener("input", checkTerms);
var checkTermsResult = false;
const modalTermsDiv = document.getElementsByClassName("formData")[6]; 
function checkTerms(event){
  if (!modalTerms.checked) {
    modalTermsDiv.setAttribute("data-error-visible", "true");
    modalTermsDiv.setAttribute("data-error", "Veuillez accepter les conditions d'utilisation");
    checkTermsResult = false;
  }
  else {
    modalTermsDiv.setAttribute("data-error-visible", "false");
    checkTermsResult = true;
  }
  return checkTermsResult;
}



//validation formulaire
function validate() {
  var validation = false ;
  if (checkPrenomResult && checkNomResult && checkMailResult && checkBirthDateResult && checkTournoiResult && checkCityResult && checkTermsResult) {
    console.log("yessssssss")
  }
  else {
    validation = false;
  }
  return false ;
}




(function(){
  checkPrenom();
  checkNom();
  checkMail();
  checkBirthdate();
  checkTournoi();
  checkCity();
  checkTerms();
  console.log(checkPrenomResult);

})()