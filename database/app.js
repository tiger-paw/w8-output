if(('localStorage' in window) && (window.localStorage !== null)) {
	console.log("ローカルストレージが使える");
} else {
	console.log("ローカルストレージが使えない");
}

const $submit = document.getElementById("submit-button2");
const $emailInput = document.getElementById("email2");
const $passwordInput = document.getElementById("password2")

window.addEventListener("load", () => {
	const savedEmail = localStorage.getItem('access_email');
	const savedPassword = localStorage.getItem('access_password');

	if(savedEmail) {
		$emailInput.value = savedEmail;
	}
	if(savedPassword) {
		$passwordInput.value = savedPassword;
	}
});



$submit.addEventListener("click", () => {
	const email = $emailInput.value;
	const password = $passwordInput.value;

	// ローカルストレージにemailとpasswordを保存
	localStorage.setItem('access_email', email);
	localStorage.setItem('access_password', password);

})

