
//test console log
console.log('Witaj 2222!');


//submit button catch declarations
var generatePasswordButton = document.getElementById('submitButton');



//function delcaration - action after clicking the button
function generatePassword(event){

//code for generating the password
	var lengthPassword;
	lengthPassword = Math.floor((Math.random()*13)+8);
	console.log(lengthPassword);
	let charactersForPass = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    let specialCharactersToTest = /[@$#]/;
    let numbersToTest = /[0123456789]/;
    let bigLettersToTest = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let smallLettersToTest = 'abcdefghijklmnopqrstuvwxyz';

	console.log(charactersForPass);
	let createdPassword = '';

	for (let i = 0;i <= lengthPassword; i++) {
		let char = Math.floor(Math.random()
			* charactersForPass.length + 1);
		createdPassword += charactersForPass.charAt(char)
		 //console.log(createdPassword);
	}
	//console.log((/[A-Z]/.test(createdPassword)));
	//console.log(specialCharactersToTest.test(createdPassword));
	  if (specialCharactersToTest.test(createdPassword) == true && /\d/.test(createdPassword) == true && /[A-Z]/.test(createdPassword) == true && /[a-z]/.test(createdPassword) == true){
		 console.log('pass with special chacter');
	  }

   

	//displaying text in place of the password
	function displayPassword() {
	  var passwordContainer = document.getElementById('safePassoword');
	  //console.log(passwordContainer);


	  passwordContainer.innerHTML = createdPassword;
	}

	displayPassword();

	event.preventDefault();
}


//clicked on button - function call
document.getElementById("submitButton").addEventListener("click", generatePassword);



