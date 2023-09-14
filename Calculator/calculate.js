var result = "";

function manipulate() {
    let inp = document.getElementById('input');
    result = inp.value;
    if(result == '') return alert("Enter numbers");
    try { eval(result); }
    catch (e) { inp.value = "Error"; }
    finally { inp.value = eval(result); }
    console.log(eval(result));
}
function clr() {
    result = " ";
    let inp = document.getElementById('input');
    inp.value = result;
    console.log(inp.value);
}
function del() {
    let inp = document.getElementById('input');
    result = inp.value.substring(0, inp.value.length - 1);
    console.log(result);
    inp.value = result;
}

function attach(letter) {
    let inp = document.getElementById('input');
    result = inp.value + letter;
    console.log(letter);
    inp.value = result;
}

document.addEventListener('keyup', (e) => {
    console.log(e.keyCode);
    const numbers = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 189, 190, 191];
    if (numbers.indexOf(e.keyCode) >= 0) {
        attach(e.key);
    }
    if (e.key === '%' || e.key === '*' || e.key === '+') {
        attach(e.key);
    }
    if (e.keyCode == 46) clr();
    if (e.keyCode == 8) del();
    if (e.keyCode == 13 || e.keyCode == 61) manipulate();
})