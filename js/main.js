alert("Bienvenue sur un jeu du Shifumi");
var name = prompt("Veuillez saisir votre nom ");
alert("Bienvenue" + " " +  name);
var choixUser = prompt("Veuillez choisir pierre , feuille ou ciseaux");
alert(choixUser);
var choixOrdi = Math.random();
if(choixOrdi <= 0.33){
    choixOrdi =  "pierre";
    } else if (choixOrdi > 0.33 && choixOrdi <= 0.66) {
    choixOrdi =  "feuille";
        } else  {
            choixOrdi = "ciseaux";
            }
