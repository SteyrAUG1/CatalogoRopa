
// Mobile menu toggle
const burger = document.querySelector('.hamburger');
const mobile = document.getElementById('mobile-menu');
burger && burger.addEventListener('click', () => {
    const opened = mobile.classList.toggle('open');
    burger.setAttribute('aria-expanded', opened);
});

