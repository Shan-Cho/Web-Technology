var newVar;
function showDate() {
    var date = new Date();
    var date2 = date.toUTCString();
    document.write(date2)
    console.log(date2);
}

function changeH1() {
    document.getElementById('h1Id').innerHTML = 'Form Submited';
    document.getElementById('h1Id').style.color = 'blue';
}

function formValidation() {
    var val = true;
    var name = document.newForm.name2.value;
    var email = document.newForm.email2.value;
    var password1 = document.newForm.pass11.value;
    var password2 = document.newForm.pass22.value;
    let numberValidation = document.forms['newForm']['num2'].value;

    if (numberValidation.length != 10) {
        document.getElementById('num1').innerHTML = '*Please enter valid 10 digit phone number';
        val = false;
    }

    if (name.length < 3) {
        setError('name1', 'Please Enter Full Name');
        val = false;
    }

    if (email == null || email.length < 6) {
        setError('email1', '*Please enter minimum 6 characters email');
        val = false;
    }

    if (password1 != password2) {
        setError('pass2', '*Password not matching');
        val = false;
    }

    if (password1.match(password2)) {
        alert('password matches');
    } else {
        setError('pass2', '*Password not matching');
        val = false;
    }

    if (val == true) {
        alert('Form Submitted');
        changeH1();
    }
    return val;
}
function setError(id, errorMessage) {
    element = document.getElementById(id);
    element.getElementsByClassName('errorClass')[0].innerHTML = errorMessage;
}

function clearError() {
    document.getElementsByClassName('errorClass')[0].innerHTML = '';
    document.getElementsByClassName('errorClass')[1].innerHTML = '';
    document.getElementsByClassName('errorClass')[2].innerHTML = '';
    document.getElementsByClassName('errorClass')[3].innerHTML = '';
    document.getElementsByClassName('errorClass')[4].innerHTML = '';
}

let x = 'for';
x = 'for1';
x = 'for2';
x = 'for3';
x = 'for4';
console.log(x);

var y = 'abcd';
var y = 'abcd';
var y = 'abcd';
var y = 'abcd';

if (y === 'abcd') {

} else {

}

const pi = 3.14
pi = 444;

// function f(){
//     console.log(x);
// }
// x= 'dog';
// function d(){
//     let x='log';
//     f();
// }
// d();




const double = x => x * 2;





