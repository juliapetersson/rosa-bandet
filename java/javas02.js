// G�r en vaiabel med min fart till bildspelet.
var fart = 3000;

//Skapar en ny Array.
var bilder = new Array();

//L�gger en bild i varje "box".
bilder[0] = "../pics/bandt.png";
bilder[1] = "../pics/breast.png";
bilder[2] = "../pics/patternt.png";

//Skapar en variabel som "r�knare".
var count = 0;

//L�nkar ihop med id som bilden har. och s�ger till att den ska b�rja p� bilden 0 genom count variabeln.
document.getElementById("bild").src = bilder[count];

//G�r en funktion som g�r att bilden hoppar till ny "box".
function changeImage(){

document.getElementById("bild").src = bilder[count];
//Om jag �r p� sista "boxen" ska bildspelet b�rja p� f�rsta "boxen" igen.
if (count==2){
count = 0;
}
else{
//Om jag inte �r p� sista "boxen" ska funktionen hoppa vidare till n�sta "box".
count = count + 1;
}



}

nIntervId = setInterval(changeImage, fart);