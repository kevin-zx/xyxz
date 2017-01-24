//validate account and passwd
function validate(){
	var email = document.querySelector("#email").value;
	var passwd = document.querySelector("#passwd").value;
	if(!email){
		alert("email can't be empty or it has wrong format")
		return
	}

	if(!passwd){
		alert("passwd can't be empty or it has wrong format")
		return
	}

	$.ajax({
		url:"/validate/",
		success: function(){

		}
	})
}

//page load complete exec code
window.onload=function function_name(argument) {
	var signin = document.querySelectorAll("#signin")[0]
	signin.onclick = function(){
		validate()
	}

}

