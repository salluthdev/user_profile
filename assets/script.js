function validasi(){
	var phone = document.getElementById("phone").value;
	var desk = document.getElementById("desk").value;
	if (phone != "" && desk !=""){
		return true;
	}
	else{
		alert('Mohon Mengisi Data dengan Lengkap!');
		return false;
	}
}
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