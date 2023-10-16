let signes = ["+", "-", "*", "/"];
let saisies = [];

let main = document.createElement("main");
document.body.appendChild(main);

//-----------------------Calculatrice ----------
let calculatrice = document.createElement("div");
main.appendChild(calculatrice);
calculatrice.classList.add("calculatrice");

// ----------------------Ecran ----------------
let calcEcran = document.createElement("div");
calcEcran.innerText = "0";
calcEcran.classList.add("calc-ecran");
calcEcran.setAttribute("id", "calc_ecran");
calculatrice.appendChild(calcEcran);
// ----------------------Clavier --------------
let clavier = document.createElement("div");
clavier.classList.add("clavier");
calculatrice.appendChild(clavier);
//---------- crée ma clavier des chifres---------
for (let index = 9; index >= 0; index--) {
  let clavierCiffres = document.createElement("button");
  clavierCiffres.innerText = index;
  clavierCiffres.classList.add("btn-num");
  // clavierCiffres.setAttribute("btn_num");
  clavier.appendChild(clavierCiffres);
}
// --------- crée mes signes signes ------------
for (let index = 0; index <= 3; index++) {
  let signesClav = document.createElement("button");
  signesClav.innerText = signes[index];
  signesClav.classList.add("btn-singes");

  clavier.appendChild(signesClav);
}
//-----------crée mon sgine égale------------------------
let egale = document.createElement("button");
egale.innerText = "=";
egale.classList.add("btn-egale");
clavier.appendChild(egale);
//------------- crée sgine -point----------------------------
let point = document.createElement("button");
point.innerText = ".";
point.classList.add("btn-point");
clavier.appendChild(point);
//---------------- crée mon button suprimer
let suprimer = document.createElement("button");
suprimer.innerText = "cl";
suprimer.classList.add("btn-cl");
suprimer.setAttribute("id", "btn_cl");
clavier.appendChild(suprimer);
//----------------- suprimer----------------------------
let clear = document.querySelector(".btn-cl");
clear.addEventListener("click", function () {
  saisies = [];
  document.querySelector("#calc_ecran").innerText = "0";
  console.log(saisies);
});
//------------------crée fonction pour apparaitre les numéro
let mesBtn = document.querySelectorAll(".btn-num, .btn-singes,.btn-point");
mesBtn.forEach((mesBtn) => {
  mesBtn.addEventListener("click", (eventClick) => {
    console.log(saisies.length);
    if (saisies.length === 0)
      document.querySelector("#calc_ecran").innerText = "";
    document.querySelector("#calc_ecran").innerText +=
      eventClick.target.innerText;
    saisies.push(eventClick.target.innerText);// push mettre tous les élements saisies 
  });
});
//------------- crée mes calculates -----------------------
let calcul = document.querySelector(".btn-egale");
    calcul.addEventListener('click', (functionCalcul) => {
      document.querySelector(".calc-ecran").innerText = eval(
      document.querySelector(".calc-ecran").innerText)
    });
//---------------finis mon calculatrice---------------------
