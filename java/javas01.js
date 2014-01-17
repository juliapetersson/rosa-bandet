var form = document.querySelector("#theForm");
var a = form.querySelector("a");
var p = form.querySelector("p");
var input = form.querySelector("input");

var svenska = (" svenska kronor");

var summa = document.querySelector("#summa");

var donering = document.querySelector("#donering");

a.onclick = function () {
       if(donering.value.length < 1 || isNaN(donering.value) ) {
		
		alert('Något är fel i det du fyllt i, vänligen rätta till det');
		
    
	}
	else{
   
	alert("Tcka för din donering!");
	p.innerHTML = ("Du har donerat ")+ input.value +svenska;
   
	}
};
