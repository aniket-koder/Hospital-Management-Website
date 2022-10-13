const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});
signupLink.onclick = (() => {
    signupBtn.checkData();
    return false;
});


function checkData(){
var name = document.getElementById("name");
var email = document.getElementById("email");
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var address = document.getElementById("address");
var number = document.getElementById("number");
var bloodgroup = document.getElementById("bloodgroup");
var gender = document.getElementById("gender");

   // var nameValue = name.value.trim();
   // var emailValue = email.value.trim();
   // var pass1Value = pass1.value.trim();
   // var pass2Value = pass2.value.trim();
   // var addressValue = address.value.trim();
   // var numberValue = number.value.trim();
    //var selected = 0;

    if (male.checked){
      selected++;
    }
    if (female.checked){
      selected++;
    }
    if (transgender.checked){
      selected++;
    }

    if(selected==0){
      setError(gender,"gender can't blank");
    }

    if(nameValue==""){
        setError(name,"Username can't be blank");
    }
    else if(!isName(nameValue)){
        setError(name,"Name is not Valid");
    }
    else{
        setSuccess(name);
    }

    //email id expression code
		var pass1_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(name=='')
		{
			alert('Please enter your name');
		}
		else if(!letters.test(name))
		{
			alert('Name field required only alphabet characters');
		}
		else if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
		else if(uname=='')
		{
			alert('Please enter the user name.');
		}
		else if(!letters.test(uname))
		{
			alert('User name field required only alphabet characters');
		}
		else if(pass1=='')
		{
			alert('Please enter Password');
		}
		else if(pass2=='')
		{
			alert('Enter Confirm Password');
		}
		else if(!pass1_expression.test(pass1))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
		}
		else if(pass1 != pass2)
		{
			alert ('Password not Matched');
		}
		else if(document.getElementById("pass1").value.length < 6)
		{
			alert ('Password minimum length is 6');
		}
		else if(document.getElementById("pass1").value.length > 12)
		{
			alert ('Password max length is 12');
		}
	 
    if(addressValue==""){
        setError(address,"Address can't be blank");
    }
    else if(!isAddress(addressValue)){
        setError(address,"Address is not Valid");
    }
    else{
        setSuccess(address);
    }

    if(numberValue==""){
        setError(number,"Contact number can't be blank");
    }
    else if(!isNumber(numberValue)){
        setError(number,"Contact Number is not Valid");
    }
    else if(numberValue.length != 10){
      setError(number,"Contact number must contain 10 digits");
    }
    else{
        setSuccess(number);
    }

    if(bloodValue==""){
        setError(blood,"Blood group can't be blank");
    }
    else if(!isBlood(bloodValue)){
        setError(blood,"Blood group is not Valid");
    }
    else{
        setSuccess(blood);
    }

}


function setError(u, msg){
  var parentBox =  u.parentElement;
  parentBox.className="input-field error";
var span =  parentBox.querySelector("span");
var fa = parentBox.querySelector(".fa");
span.innerText=msg;
fa.className="fa fa-exclamation-circle";
}

function setSuccess(u){
    var parentBox =  u.parentElement;
    parentBox.className="input-field success";
    var fa = parentBox.querySelector(".fa");
    fa.className="fa fa-check-circle";
}

function isName(n){
  var reg = /^[a-zA-Z ]+$/;
  return reg.test(n);
}

function isEmail(e){
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}

function checkPassword(p)
{
    var reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return reg.test(p);
}

function isAddress(a)
{
  var reg = /^[a-zA-Z0-9\s,.'-]{5,}$/;
  return reg.test(a);
}

function isNumber(c)
{
  var reg = /^[0-9]+$/;
  return reg.test(c);
}

function isBlood(b)
{
  var reg = /^(A|B|AB|O)[+-]$/i ;
  return reg.test(b);
}

function validate(form) {
        var gender = form.querySelectorAll('input[name="gender"]:checked');
        if (!gender.length) {
            alert('You must select male or female');
            return false;
        }
    }
