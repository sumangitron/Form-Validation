const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messegeError = document.getElementById("messege-error");
const submitError = document.getElementById("submit-error");

function validateName() {
    let input = document.getElementById("contact-name");
    let name = input.value;
    
    if(name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check fa-beat fa-lg" style="color: #17ab28;"></i>';
    return true;
}

function validatePhone() {
    let input = document.getElementById("phone-number");
    let phnNo = input.value;

    if(phnNo.length == 0) {
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    if(phnNo.length !== 10) {
        phoneError.innerHTML = "Phone no should be 10 digits";
        return false;
    }
    if(!phnNo.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits please";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check fa-beat fa-lg" style="color: #17ab28;"></i>';
    return true;
}

function validateEmail() {
    let input = document.getElementById("email");
    let email = input.value;

    if(email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email Invalid";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check fa-beat fa-lg" style="color: #17ab28;"></i>';
    return true;
}

function validateMessege() {
    let input = document.getElementById("messege");
    let messege = input.value;

    if(messege.length == 0) {
        messegeError.innerHTML = "Messege is required";
        return false;
    }
    if(messege.length > 0 && messege.length < 30) {
        messegeError.innerHTML = "Messege should be minimum 30 characters";
        return false;
    }

    messegeError.innerHTML = '<i class="fa-solid fa-circle-check fa-beat fa-lg" style="color: #17ab28;"></i>';
    return true;
}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessege()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to submit";
        setTimeout(( () => {
            submitError.style.display = "none";
        }), 3000)
        return false;
    }
}