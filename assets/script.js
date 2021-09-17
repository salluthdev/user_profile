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
const phone = document.getElementById('phone');
const tanggal_lahir = document.getElementById('tanggal_lahir');
const desk = document.getElementById('desk');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const phoneValue = phone.value.trim();
	const tanggal_lahirValue = tanggal_lahir.value.trim();
	const passwordValue = password.value.trim();
	const deskValue = desk.value.trim();
	
	if(phoneValue === '') {
		setErrorFor(phone, "Nomor telepon tidak boleh kosong.");
	} else {
		setSuccessFor(phone);
	}

	if(tanggal_lahirValue === '') {
		setErrorFor(tanggal_lahir, "Tanggal lahir tidak boleh kosong.");
	} else {
		setSuccessFor(tanggal_lahir);
	}

	if(passwordValue === '') {
		setErrorFor(password, "Password tidak boleh kosong.");
	} else {
		setSuccessFor(password);
	}

	if(deskValue === '') {
		setErrorFor(desk, "Deskripsi tidak boleh kosong.");
	} else {
		setSuccessFor(desk);
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