function validerDateOfBirth ()
{
    var elementDate=document.getElementById("date")
    var elementValue= new Date(elementDate.value);
    const dateAujourdhui=new Date();
    if(elementValue>= dateAujourdhui)
    {
        alert("please select a correct date ")
    }
    else 
    alert ("date valid!");
}
var formElement = document.getElementById("form") 
var nameElement = document.getElementById("nom");
var prenomElement = document.getElementById("prenom");
var emailElement = document.getElementById("email");
var telephoneElement = document.getElementById("telephone");
var passwordElement = document.getElementById("password");

formElement.addEventListener("submit", function(event){
    event.preventDefault()
    validateName()
    validatePrenom()
    validateEmail()
    validatePhoneNumber()
    validatePassword()

}) 


function validateName(){
    var NameValue = nameElement.value ;
    var pattern = /^[a-z A-Z]+$/
    var nameError = document.getElementById("NameError")
    if(!NameValue.match(pattern)){
          nameError.innerHTML=
    "<span style='color :red' > Nom ne doit contenir que des lettres et doit avoir au moins 1 caractère </span>"
    }else {
        nameError.innerHTML= "<span style='color :green'>Correct</span>"
    }
}
function validatePrenom(){
    var PrenomValue = prenomElement.value ;
    var pattern = /^[a-z A-Z]+$/
    var PrenomError = document.getElementById("PrenomError")
    if(!PrenomValue.match(pattern)){
        PrenomError.innerHTML=
    "<span style='color :red' > Nom ne doit contenir que des lettres et doit avoir au moins 1 caractère </span>"
    }else {
        PrenomError.innerHTML= "<span style='color :green'>Correct</span>"
    }
}
function validateEmail() {
    var EmailValue = emailElement.value;
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var EmailError = document.getElementById("EmailError");
    if (!pattern.test(EmailValue)) {
        EmailError.innerHTML = "<span style='color:red'>L'adresse e-mail n'est pas valide</span>";
    } else {
        EmailError.innerHTML = "<span style='color:green'>Correct</span>";
    }
}
function validatePhoneNumber() {
    var TelephoneValue = telephoneElement.value;
    var pattern = /^\d{8}$/; // Format pour un numéro de téléphone de 10 chiffres
    var TelephoneError = document.getElementById("TelephoneError");
    if (!pattern.test(TelephoneValue)) {
        TelephoneError.innerHTML = "<span style='color:red'>Le numéro de téléphone doit être composé de 10 chiffres</span>";
    } else {
        TelephoneError.innerHTML = "<span style='color:green'>Correct</span>";
    }
}

function validatePassword() {
    var PasswordValue = passwordElement.value;
    var PasswordError = document.getElementById("PasswordError");

    // Vérification de la longueur minimale du mot de passe
    if (PasswordValue.length < 8) {
        PasswordError.innerHTML = "<span style='color:red'>Le mot de passe doit contenir au moins 8 caractères</span>";
        return;
    }

    // Vérification de la présence d'au moins une lettre majuscule
    if (!/[A-Z]/.test(PasswordValue)) {
        PasswordError.innerHTML = "<span style='color:red'>Le mot de passe doit contenir au moins une lettre majuscule</span>";
        return;
    }

    // Vérification de la présence d'au moins une lettre minuscule
    if (!/[a-z]/.test(PasswordValue)) {
        PasswordError.innerHTML = "<span style='color:red'>Le mot de passe doit contenir au moins une lettre minuscule</span>";
        return;
    }

    // Vérification de la présence d'au moins un chiffre
    if (!/\d/.test(PasswordValue)) {
        PasswordError.innerHTML = "<span style='color:red'>Le mot de passe doit contenir au moins un chiffre</span>";
        return;
    }

    // Si toutes les conditions sont remplies, le mot de passe est valide
    PasswordError.innerHTML = "<span style='color:green'>Correct</span>";
}


