function showDiv1() {
   document.getElementById('Div1').style.display = "block";
   document.getElementById('Div2').style.display = "none";
}

function showDiv2() {
   document.getElementById('Div2').style.display = "block";
   document.getElementById('Div1').style.display = "none";
}


document.getElementById("submit").addEventListener = ("click", function(event) {
	checkPassword();
	checkUsername();
}

function checkPassword() {
	var password = document.getElementById("password").value;
	var ok = true;
	if (password != 12345678) {
		ok = false;
		alert("Password is Wrong!!!")
	} else {
		alert("Password Right!!!")
	}
	return ok;
	}

function checkUsername() {
	var username = /\d/.test(document.getElementById("username").value);
	if (username == false) {
		alert("Username must contain at least one digit!!")
	} else {
		alert("Username is Correct!!")
	}
	return ok;
}