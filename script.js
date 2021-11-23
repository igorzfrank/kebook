const btnMobile = document.getElementById('btn-mobile');
const btnMobile2 = document.getElementById('btn-mobile');

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

function toggleBack() {
    const back = document.getElementById('inicio');
    back.classList.toggle('active');
}

btnMobile2.addEventListener('click', toggleBack);