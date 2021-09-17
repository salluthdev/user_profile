var state = false
function toggle(){
	if (state){
		document.getElementById('password').
		setAttribute("type", "password");
		state = false;
		document.getElementById('eye').
		style.color = '#7a797e';
	}
	else{
		document.getElementById('password').
		setAttribute("type", "text");
		state = true;
		document.getElementById('eye').
		style.color = '#00ac9f';
	}
}

const form = document.getElementById('form');
const username = document.getElementById('username');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, "Phone Number can't be blank.");
	} else {
		setSuccessFor(username);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}