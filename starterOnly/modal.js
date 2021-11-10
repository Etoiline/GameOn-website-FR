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
console.log(modalClose);

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