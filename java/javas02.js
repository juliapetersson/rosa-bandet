// Gör en vaiabel med min fart till bildspelet.
var fart = 3000;

//Skapar en ny Array.
var bilder = new Array();

//Lägger en bild i varje "box".
bilder[0] = "../pics/bandt.png";
bilder[1] = "../pics/breast.png";
bilder[2] = "../pics/patternt.png";

//Skapar en variabel som "räknare".
var count = 0;

//Länkar ihop med id som bilden har. och säger till att den ska börja på bilden 0 genom count variabeln.
document.getElementById("bild").src = bilder[count];

//Gör en funktion som gör att bilden hoppar till ny "box".
function changeImage(){

document.getElementById("bild").src = bilder[count];
//Om jag är på sista "boxen" ska bildspelet börja på första "boxen" igen.
if (count==2){
count = 0;
}
else{
//Om jag inte är på sista "boxen" ska funktionen hoppa vidare till nästa "box".
count = count + 1;
}



}

nIntervId = setInterval(changeImage, fart);