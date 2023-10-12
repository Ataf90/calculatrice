let signes = ["-","+","*","/"]

let main = document.createElement("main");

document.body.appendChild(main);
 console.log(main);
//-----------------------Calculatrice ----------
    let calculatrice = document.createElement("div");
    main.appendChild(calculatrice);
    calculatrice.classList.add("calculatrice");
// ----------------------Ecran ----------------
        let calcEcran = document.createElement("div");
        calcEcran.innerText = "0";
        calcEcran.classList.add("clac-ecran");
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
                 clavier.appendChild(clavierCiffres);
                 }
// --------- crée ma signes operateur            
            for (let index = 0; index <=3; index++) {
            let  singes = document.createElement("button");
                 singes.innerText= singes[index];
                 signes.classList.add("signes");
                 clavier.appendChild(singes);
            }



