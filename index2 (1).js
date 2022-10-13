var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var addressError = document.getElementById('address-error');
var contactError = document.getElementById('contact-error');
var pass1Error = document.getElementById('pass1-error');
var pass2Error = document.getElementById('pass2-error');
var bloodError = document.getElementById('blood-error');
var genderError = document.getElementById('gender-error');
var dateError = document.getElementById('date-error');
var categoryError = document.getElementById('categ-error');


function validateName(){
  var cname = document.getElementById('name').value;

  if(cname.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if(!cname.match(/^[A-Za-z]/)){
    nameError.innerHTML = 'Write Full name';
    return false;
  }
  else{
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
}

function validateEmail(){
  var cemail = document.getElementById('email').value;

  if(cemail.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if(!cemail.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    emailError.innerHTML = 'Invalid email';
    return false;
  }
  else{
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
}

function validateAddress(){
  var caddress = document.getElementById('address').value;

  if(caddress.length == 0){
    addressError.innerHTML = 'Address is required';
    return false;
  }
  if(!caddress.match(/^[a-zA-Z0-9\s,.'-]{5,}$/)){
    addressError.innerHTML = 'Invalid address';
    return false;
  }
  else{
  addressError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
}

function validateNumber(){
  var cnumber = document.getElementById('number').value;

  if(cnumber.length == 0){
    contactError.innerHTML = 'Number is required';
    return false;
  }
  if(!cnumber.match(/^[0-9]+$/)){
    contactError.innerHTML = 'Invalid number';
    return false;
  }
  if(cnumber.length != 10){
    contactError.innerHTML = 'Contact number must contain 10 digits';
    return false;
  }
  else{
  contactError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
}

function validatePass1(){
  var cpass1 = document.getElementById('pass1').value;


  if(cpass1.length == 0){
    pass1Error.innerHTML = 'password is required';
    return false;
  }
  if(cpass1.length<8) {
    pass1Error.innerHTML = 'Your password must contain 8 to 16 characters, at least a symbol, upper and lower case letters and a number';
    return false;
  }
  if(cpass1.length>16) {
    pass1Error.innerHTML = 'Your password must contain 8 to 16 characters, at least a symbol, upper and lower case letters and a number';
    return false;
  }
  if(!cpass1.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)){
    pass1Error.innerHTML = 'Your password must contain 8 to 16 characters, at least a symbol, upper and lower case letters and a number';
    return false;
  }

  else{
  pass1Error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
}

function validatePass2(){
  var cpass2 = document.getElementById('pass2').value;
  var cpass1 = document.getElementById('pass1').value;


  if(cpass2.length == 0){
    pass2Error.innerHTML = 'password is required';
    return false;
  }
  if(cpass1!==cpass2){
      pass2Error.innerHTML = 'Password does not match';
      return false;
  }
  else{
  pass2Error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
}

function validateBlood(){
  var cblood = document.getElementById('bloodGroup').value;
if(cblood == "bloodGroup"){
  bloodError.innerHTML = 'Blood Group is required';
  return false;
}
else{
  bloodError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
return true;
}
}

function validateGender(){
  var cgender = document.getElementById('gender').value;
if(cgender == "gender"){
  genderError.innerHTML = 'Gender is required';
  return false;
}
else{
  genderError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
return true;
}
}

function validateDate(){
  var cdate = document.getElementById('date').value;
if(cdate.length == 0){
  dateError.innerHTML = 'Date of Birth is required';
  return false;
}
else{
  dateError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
return true;
}
}

function validateCategory(){
  var ccategory = document.getElementById('category').value;
if(ccategory == "category"){
  categoryError.innerHTML = 'Category is required';
  return false;
}
else{
  categoryError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
return true;
}
}
