const boton_menu = document.querySelector('.button');
const menu = document.querySelector('.menu');

boton_menu.addEventListener('click', () => {
    menu.classList.toggle('active');
})
