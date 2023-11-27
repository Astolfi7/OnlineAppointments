
//test console log
console.log('Witaj świecie!');


//submit button catch declarations
var generatePasswordButton = document.getElementById('submitButton');

//function delcaration - action after clicking the button
function customName1(event){

//code for generating the password



	//displaying text in place of the password
	function customName2() {
	  var passwordContainer = document.getElementById('safePassoword');
	  console.log(passwordContainer);
	  passwordContainer.innerHTML = 'Wygenerowane bezpieczne hasło';
	}

	customName2();

	event.preventDefault();
}


//clicked on button - function call
document.getElementById("submitButton").addEventListener("click", customName1);



