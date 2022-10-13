var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var addressError = document.getElementById('address-error');
var contactError = document.getElementById('contact-error');
var pass1Error = document.getElementById('pass1-error');
var pass2Error = document.getElementById('pass2-error');
var bloodError = document.getElementById('blood-error');
var genderError = document.getElementById('gender-error');
var dateError = document.getElementById('date-error');
var categoryError = document.getElementById('category-error');


function validateName(){
  var cname = document.getElementById('name').value;

  if(cname.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if(!cname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
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

var namError = document.getElementById('nam-error');
var emaiError = document.getElementById('emai-error');
var addresError = document.getElementById('addres-error');
var contacError = document.getElementById('contac-error');
var pas1Error = document.getElementById('pas1-error');
var pas2Error = document.getElementById('pas2-error');
var blodError = document.getElementById('blod-error');
var gendrError = document.getElementById('gendr-error');
var datError = document.getElementById('dat-error');


function validateNam(){
  var cnam = document.getElementById('nam').value;

  if(cnam.length == 0){
    namError.innerHTML = 'Name is required';
    return false;
  }
  if(!cnam.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    namError.innerHTML = 'Write Full name';
    return false;
  }
  else{
  namError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
}

function validateEmai(){
  var cemai = document.getElementById('emai').value;

  if(cemai.length == 0){
    emaiError.innerHTML = 'Email is required';
    return false;
  }
  if(!cemai.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    emaiError.innerHTML = 'Invalid email';
    return false;
  }
  else{
  emaiError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
}

function validateAddres(){
  var caddres = document.getElementById('addres').value;

  if(caddres.length == 0){
    addresError.innerHTML = 'Address is required';
    return false;
  }
  if(!caddres.match(/^[a-zA-Z0-9\s,.'-]{5,}$/)){
    addresError.innerHTML = 'Invalid address';
    return false;
  }
  else{
  addresError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
}

function validateNumbe(){
  var cnumbe = document.getElementById('numbe').value;

  if(cnumbe.length == 0){
    contacError.innerHTML = 'Number is required';
    return false;
  }
  if(!cnumbe.match(/^[0-9]+$/)){
    contacError.innerHTML = 'Invalid number';
    return false;
  }
  if(cnumbe.length != 10){
    contacError.innerHTML = 'Contact number must contain 10 digits';
    return false;
  }
  else{
  contacError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
}

function validatePas1(){
  var cpas1 = document.getElementById('pas1').value;


  if(cpas1.length == 0){
    pas1Error.innerHTML = 'password is required';
    return false;
  }
  if(cpas1.length<8) {
    pas1Error.innerHTML = 'Your password must contain 8 to 16 characters, at least a symbol, upper and lower case letters and a number';
    return false;
  }
  if(cpas1.length>16) {
    pas1Error.innerHTML = 'Your password must contain 8 to 16 characters, at least a symbol, upper and lower case letters and a number';
    return false;
  }
  if(!cpas1.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)){
    pas1Error.innerHTML = 'Your password must contain 8 to 16 characters, at least a symbol, upper and lower case letters and a number';
    return false;
  }

  else{
  pas1Error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
}

function validatePas2(){
  var cpas2 = document.getElementById('pass2').value;
  var cpas1 = document.getElementById('pass1').value;


  if(cpas2.length == 0){
    pas2Error.innerHTML = 'password is required';
    return false;
  }
  if(cpas1!==cpas2){
      pas2Error.innerHTML = 'Password does not match';
      return false;
  }
  else{
  pas2Error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
}

function validateBlod(){
  var cblod = document.getElementById('blodGroup').value;
if(cblod == "bloodGroup"){
  blodError.innerHTML = 'Blood Group is required';
  return false;
}
else{
  blodError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
return true;
}
}

function validateGendr(){
  var cgendr = document.getElementById('gendr').value;
if(cgendr == "gender"){
  gendrError.innerHTML = 'Gender is required';
  return false;
}
else{
  gendrError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
return true;
}
}

function validateDat(){
  var cdat = document.getElementById('dat').value;
if(cdat.length == 0){
  datError.innerHTML = 'Date of Birth is required';
  return false;
}
else{
  datError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
return true;
}
}
