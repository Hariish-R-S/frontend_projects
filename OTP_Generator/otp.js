var parent = document.querySelector('body');
var otp;

function generate() {


    document.getElementById('digit1').innerHTML = '';
    document.getElementById('digit2').innerHTML = '';
    document.getElementById('digit3').innerHTML = '';
    document.getElementById('digit4').innerHTML = '';


    otp = Math.floor(Math.random() * 8999) + 999;
    console.log(otp);
    const Popup_otp = document.createElement('div');
    const txt = document.createElement('p');
    Popup_otp.setAttribute('id', 'popOTP');
    txt.innerHTML = `Your One Time Password(OTP) is ${otp}`;
    Popup_otp.append(txt);
    parent.append(Popup_otp);
    console.log(Popup_otp);

    Popup_otp.style.animation = 'in 1s forwards';
    Popup_otp.style.transform = 'translateX(-410px)';

    setTimeout(() => {
        Popup_otp.style.animation = 'colorChange 5s forwards';
    }, 1000);
    setTimeout(() => {
        Popup_otp.style.animation = 'out 1s forwards';
        Popup_otp.style.backgroundColor = '#FF0000';
    }, 7000);
    setTimeout(() => {
        Popup_otp.style.display = 'none';
    }, 7500);
}

function verify() {
    const pop = document.createElement('div');
    pop.setAttribute('id', 'pop');

    // pop.innerHTML = '';
    const input1 = document.getElementById('digit1').innerHTML;
    const input2 = document.getElementById('digit2').innerHTML;
    const input3 = document.getElementById('digit3').innerHTML;
    const input4 = document.getElementById('digit4').innerHTML;
    const check = input1 + input2 + input3 + input4;
    const verify = input1 + input2 + input3 + input4;
    console.log(verify == otp);
    var output = (verify == otp);

    if (check == '') {
        pop.innerHTML = 'OTP should not be empty' + `&nbsp;`;
    }
    else if (output) {
        pop.innerHTML = 'OTP is Matched\n' + `&nbsp;`
    }
    else {
        pop.innerHTML = 'OTP is not matched\n' + `&nbsp;`;
    }
    var mark = document.createElement('i');
    if (check == '') {
        mark.classList.add('fa-solid', 'fa-circle-exclamation', 'fa-2xl');
        mark.style.color = 'blue';
    }
    else if (output) {
        mark.classList.add('fa-solid', 'fa-circle-check', 'fa-2xl');
        mark.style.color = 'green';
    }
    else {
        mark.classList.add('fa-solid', 'fa-circle-xmark', 'fa-2xl');
        mark.style.color = 'red';
    }
    pop.appendChild(mark);
    document.querySelector('.container').appendChild(pop);

    setTimeout(() => {
        document.querySelector('.container').removeChild(pop);
    }, 5000);
}

// document.addEventListener('keyup', ())