const names = document.getElementById("name");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");
const from = document.getElementById("form");
const err = document.getElementById("error")

form.addEventListener("submit", (e) => {
    let messages = [];
    if (names.value === "" || names.value == null) {
        messages.push("Name is required")
    }

    if(password.value.length <= 6) {
        messages.push("Password must be longer then 6 characters")
    }

    if(password.value.length !== rePassword.value.length ) {
        messages.push("Please check your password again, both passwords must match")
    }

    if (messages.length > 0) {
        e.preventDefault()
        error.innerText = messages.join(", ")
    } 
    e.preventDefault();
})

