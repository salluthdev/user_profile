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
function validasi(){
	var phone = document.getElementById("phone").value;
	if (phone != ""){
		return true;
	}
	else{
		alert('Mohon Mengisi Data dengan Lengkap!');
	}
}