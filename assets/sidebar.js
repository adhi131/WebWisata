const menu = document.getElementById('menu');
const listMenu = document.getElementById('list-menu');
const icon = document.getElementById('nav-icon');

menu.addEventListener('click', () => {
    listMenu.classList.toggle('active');
    icon.classList.toggle('active-icon');
});


listMenu.onclick = function () {
    listMenu.classList.remove('active');
    icon.classList.remove('active-icon');
}