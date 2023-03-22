var username_p = document.getElementById("username_p");
var gender_p = document.getElementById("gender_p");
var update_password_form = document.getElementById("update_password_form");
var old_password_update_input = document.getElementById("old_password_update_input");
var new_password_update_input = document.getElementById("new_password_update_input");
var confirm_update_input = document.getElementById("confirm_update_input");

function showInfo() {
    var username = localStorage.getItem("user_username");
    var gender = localStorage.getItem("user_gender");
    username_p.innerText = "Username: " + username;
    gender_p.innerText = "Gender: " + gender;

    username_p.style.display = "block";
    gender_p.style.display = "block";

}

function changePassword() {
    update_password_form.style.display = "block";
}

function updatePassword() {

    event.preventDefault();

    var old_password = old_password_update_input.value;
    var new_password = new_password_update_input.value;
    var confirm_password = confirm_update_input.value;

    if (new_password != confirm_password)
        alert("Password mismatch");
    else if (old_password.length < 6)
        alert("Old password should be more than 6 character");
    else if (new_password.length < 6)
        alert("New password should be more than 6 character");
    else if (old_password != localStorage.getItem("user_password"))
        alert("Old password is not correct");
    else {
        localStorage.setItem("user_password", new_password);
        alert("Password is successfully changed");
    }

}