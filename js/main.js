alert("Bienvenue sur un jeu du Shifumi");
/* put name  */
var name = prompt("Veuillez saisir votre nom ");
alert("Bienvenue" + " " +  name);
/* user choice */
var choixUser = prompt("Veuillez choisir pierre , feuille ou ciseaux");
alert(choixUser);
/* computer choice */
var choixOrdi = Math.random();
if(choixOrdi <= 0.33){
    choixOrdi =  "pierre";
    } else if (choixOrdi > 0.33 && choixOrdi <= 0.66) {
    choixOrdi =  "feuille";
        } else  {
            choixOrdi = "ciseaux";
            }
            /* Comparate choice */
alert("L'ordinateur a choisi " + choixOrdi );
if (choixUser === "pierre" && choixOrdi === "pierre"){
    var result = "Egalité";
    } else if (choixUser === "pierre" && choixOrdi ==="feuille") {
        var result = "Vous avez Perdu";
        } else if (choixUser === "pierre" && choixOrdi === "ciseaux") {
            var result = "Vous avez Gagné";
            }
             else if (choixUser === "ciseaux" && choixOrdi === "ciseaux"){
                var result = "Egalité";
                } else if (choixUser === "ciseaux" && choixOrdi ==="pierre") {
                    var result = "Vous avez Perdu";
                    } else if (choixUser === "ciseaux" && choixOrdi === "feuille") {
                        var result = "Vous avez Gagné";
                        }
                         else if (choixUser === "feuille" && choixOrdi === "feuille"){
                            var result = "Egalité";
                            } else if (choixUser === "feuille" && choixOrdi ==="ciseaux") {
                                var result = "Vous avez perdu";
                                } else if (choixUser === "feuille" && choixOrdi === "pierre") {
                                    var result = "Vous avez gagné";
                                    }
/* show result and message */                                    
alert(result)                                    