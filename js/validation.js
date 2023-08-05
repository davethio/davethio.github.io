// validation for reservation page
let message = document.getElementById('message');
let form = document.getElementById("reservationForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  validate();
});

function validate() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;
  let roomType = document.getElementById("roomType").value;
  let comments = document.getElementById("comments").value;
  let gender = document.getElementsByName("gender-input");
  let agreement = document.getElementById("agreement").checked;

  if(validateName(name) == false) {
    return;
  }
  else if(validateEmail(email) == false) {
    return;
  }
  else if(validatePhone(phone) == false) {
    return;
  }
  else if(validateGender(gender) == false) {
    return;
  } 
  else if(validateCheckinDate(checkin) == false) {
    return;
  }
  else if(validateCheckoutDate(checkout, checkin) == false) {
    return;
  }
  else if(validateRoom(roomType) == false) {
    return;
  }
  else if(validateAgreement(agreement) == false) {
    return;
  }
  else {
    message.innerHTML = "Thank you for booking your stay with us!";
    message.classList.remove('error');
    message.classList.add('success');
  }
}

function validateName(name) {
  if(name.length < 5) {
    message.innerHTML = 'Your full name should be above 5 characters...';
    message.classList.remove('success');
    message.classList.add('error');
    return false;
  }

  return true;
}

function validateRoom(roomType) {
  if(roomType == "") {
    message.innerHTML = 'Please select the room type...';
    message.classList.remove('success');
    message.classList.add('error');
    return false;
  }

  return true;
}

function validateGender(gender) {
  let selectedGender = "";

  for(let i = 0; i < gender.length; i++){
    if(gender[i].checked) {
      selectedGender = gender[i].value; 
      
    }
  }

  if(selectedGender == "") {
    message.innerHTML = "Please select your gender...";
    message.classList.remove('success');
    message.classList.add('error');
    return false;
  }  

  return true;
}

function validateEmail(email) {
  const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!re.test(email)) {
    message.innerHTML = 'Please provide a valid email address...';
    message.classList.remove('success');
    message.classList.add('error');
    return false;
  }

  return true;
}

function validatePhone(phone) {
  const re = /^[0-9]{10,15}$/;
  if (!re.test(phone)) {
    message.innerHTML = 'Please provide a valid phone number...';
    message.classList.remove('success');
    message.classList.add('error');
    return false;
  }

  return true;
}

function validateCheckinDate(checkin) {
  if(checkin == "") {
    message.innerHTML = 'Please select the check-in date...';
    message.classList.remove('success');
    message.classList.add('error');
    return false;
  }

  return true;
}

function validateCheckoutDate(checkout, checkin) {
  if(checkout == "") {
    message.innerHTML = 'Please select the check-out date...';
    message.classList.remove('success');
    message.classList.add('error');
    return false;
  } else if (new Date(checkout) <= new Date(checkin)) {
    message.innerHTML = 'Check-out date must not be below or within the same date as check-in';
    message.classList.remove('success');
    message.classList.add('error');
    return false;
  }

  return true;
}

function validateAgreement(agreement) {
  if(!agreement) {
    message.innerHTML = 'You must agree to our Terms and Conditions...';
    message.classList.remove('success');
    message.classList.add('error');
    return false;
  }

  return true;
}