const burger = document.getElementById('burgerBtn');
const nav = document.getElementById('navMenu');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});