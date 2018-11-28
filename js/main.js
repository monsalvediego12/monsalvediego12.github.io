let bOpen = document.querySelector('#open-close-mobil');
let bClose = document.querySelector('#close-menu-mobil');
let mC = document.querySelector('#monsaC');

var stateMenu = true;
let dkp = document.querySelector('.menuDesk');
var openM = 'transform: translateX(0);';
var closeM = 'transform: translateX(-100%);';
var buttonsMenu = document.getElementsByClassName('btnMenu');

bOpen.addEventListener('click', () => {
    openCloseM();

})
bClose.addEventListener('click', () => {
    openCloseM();

})

mC.addEventListener('click', () => {
    let d = window.innerWidth;

    if (d >= 630) {
        router.navigateTo('home');
    }
    openCloseM();
})


for (var i = 0; i < buttonsMenu.length; i++) {
    clickMenuClose(buttonsMenu[i]);
}

function clickMenuClose(boton) {
    boton.onclick = function() {
        openCloseM();
    }
}




function openCloseM() {
    let d = window.innerWidth;
    if (d >= 630) {
        dkp.style = openM;
        return;
    }

    if (stateMenu) {
        dkp.style = openM;
    } else {

        dkp.style = closeM;

    }
    changeButons();

    stateMenu = !stateMenu;
}

function changeButons() {
    if (stateMenu) {
        bOpen.style.display = "none"
        bClose.style.display = "block"
    } else {
        bOpen.style.display = "block"
        bClose.style.display = "none"

    }
}


window.onresize = resize;

function resize() {
    let d = window.innerWidth;
    if (d >= 630) {
        stateMenu = true
    }
    if (d <= 630) {
        stateMenu = false
    }
    openCloseM();
}

window.onload = carga;

function carga() {
    let load = document.querySelector('#load');
    if (document.readyState == "loaded" || document.readyState == "interactive" || document.readyState == "complete") {
        setTimeout(() => {
            load.classList.add('closeLoading')
        }, 1500);
    }
}