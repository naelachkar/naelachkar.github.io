function disableButton() {
    if (
        !firstName.validity.valid ||
        !email.validity.valid ||
        !comments.validity.valid ||
        document.getElementById("language-select").value === ""
    ) {
        document.getElementById("submit").disabled = true;
    } else {
        document.getElementById("submit").disabled = false;
    }
}
disableButton();

document.getElementById("firstName").addEventListener("change", disableButton);
document.getElementById("email").addEventListener("change", disableButton);
document.getElementById("comments").addEventListener("change", disableButton);
document.getElementById("language-select").addEventListener("change", disableButton);
