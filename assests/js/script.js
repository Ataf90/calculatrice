let signes = ["+", "-", "*", "/"];

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
  clavierCiffres.setAttribute("id", "btn-all");
  clavier.appendChild(clavierCiffres);
}
// --------- crée mes signes operateur ------------
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
//-------------- crée mon point------------------------------
let suprimer = document.createElement("button");
suprimer.innerText = "cl";
suprimer.classList.add("btn-suprim");
clavier.appendChild(suprimer);
//------------------crée fonction pour apparaitre les numéro --------------
let mesBtn = document.querySelectorAll("button");
for (let index = 0; index <= mesBtn.length; index++) {
  mesBtn[index].addEventListener("click", (eventClick) => {
    document.querySelector("calc-ecran").innerText +=
      eventClick.target.innerText;
  });
}
