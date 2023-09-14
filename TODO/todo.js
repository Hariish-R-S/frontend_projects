const arr = document.getElementById('arrow');
function submit() {
    var txt = document.getElementById('txt').value;
    if (txt == "") {
        return alert('Your list cannot be Empty');
    }
    const main = document.getElementsByTagName('div');
    const ele = document.createElement('p');
    const tick = document.createElement('i')
    const cross = document.createElement('i');
    tick.classList.add('fa-solid','fa-circle-check');
    tick.textContent=' ';
    cross.classList.add('fa-solid', 'fa-circle-xmark');
    tick.setAttribute('onclick','terminate(event)')
    cross.setAttribute('onclick', 'remove(event)');
    ele.textContent = txt;
    ele.classList.add('init');
    ele.appendChild(cross);
    ele.appendChild(tick);
    main[0].appendChild(ele);
    // console.log(ele);
}

function terminate(event){
    const term = event.target.parentNode;
    term.classList.add("term");
    setTimeout(() => {
        term.remove();
    }, 1000);
}

function remove(event) {
    const dlt = event.target.parentNode;
    dlt.classList.add('final');
    // console.log(dlt);
    setTimeout(() => {
        dlt.remove();
    }, 1000);
}

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) submit();
})