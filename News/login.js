var username_login_input = document.getElementById("username_login_input");
var password_login_input = document.getElementById("password_login_input");

function loginAcount() {

    var username = username_login_input.value;
    var password = password_login_input.value;

    if (username.length < 3)
        alert("Username should be more than 3 characters...");
    else if (password.length < 6)
        alert("Password should be more than 6 character...");
    else if (username != localStorage.getItem("user_username"))
        alert("Can not find user...");
    else if (password != localStorage.getItem("user_password"))
        alert("Password is not correct...");
    else
        document.location = "main.html";

}