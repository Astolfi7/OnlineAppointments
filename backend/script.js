
//test console log
console.log('Witaj studencie!');


//submit button catch declarations
var generatePasswordButton = document.getElementById('submitButton');



//function delcaration - action after clicking the button
function generatePassword(event){

//code for generating the password
	var lengthPassword;
	lengthPassword = Math.floor((Math.random()*12)+8);
	var actualPasswordlength = lengthPassword +1;
	console.log(actualPasswordlength);
	let charactersForPass = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    let specialCharactersToTest = /[@$#]/;
    let numbersToTest = /[0123456789]/;
    let bigLettersToTest = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let smallLettersToTest = 'abcdefghijklmnopqrstuvwxyz';

	
	let createdPassword = '';

	//generate password for the first time
	for (let i = 0;i <= lengthPassword; i++) {
		let char = Math.floor(Math.random()
			* charactersForPass.length + 1);
		createdPassword += charactersForPass.charAt(char)
	}
	console.log('The password created for the first time!');

	while (!(specialCharactersToTest.test(createdPassword) == true && /\d/.test(createdPassword) == true && /[A-Z]/.test(createdPassword) == true && /[a-z]/.test(createdPassword) == true)){
		 //clear the password container
		 createdPassword = '';
		 //generate password until it will be good
	  	for (let i = 0;i <= lengthPassword; i++) {
			let char = Math.floor(Math.random()
				* charactersForPass.length + 1);
			createdPassword += charactersForPass.charAt(char)
		}
		console.log('The password meets all the requirements!');
	}


   

	//displaying text in place of the password
	function displayPassword() {
	  var passwordContainer = document.getElementById('safePassoword');
	  console.log(charactersForPass);


	  passwordContainer.innerHTML = createdPassword;
	}

	displayPassword();

	event.preventDefault();
}


//clicked on button - function call
document.getElementById("submitButton").addEventListener("click", generatePassword);



