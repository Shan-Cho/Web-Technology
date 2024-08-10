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
    let val = true;
    let name = document.newForm.name2.value;
    let email = document.newForm.email2.value;
    let password1 = document.newForm.pass11.value;
    let password2 = document.newForm.pass22.value;
    let numberValidation = document.forms['newForm']['num2'].value;
    let dropdownValue = document.getElementById('selectId').value;
    let radioValue = document.querySelector('input[name="gender"]:checked').value;

    if (numberValidation.length != 10) {
        setError('numDiv', 'Please enter valid 10 digit phone number');
        val = false;
    }

    if (name.length < 3) {
        setError('nameDiv', 'Please Enter Full Name');
        val = false;
    }

    if (email == null || email.length < 6) {
        setError('emailDiv', '*Please enter minimum 6 characters email');
        val = false;
    }

    if (password1 != password2) {
        setError('passDiv', '*Password not matching');
        val = false;
    }
    // Alternate way for password validation

    // if (password1.match(password2)) {
    //     alert('password matches');
    // } else {
    //     setError('pass2', '*Password not matching');
    //     val = false;
    // }

    if (val == true) {
        changeH1();
        alert('Form Submitted');
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
