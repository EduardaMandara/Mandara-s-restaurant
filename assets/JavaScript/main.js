window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
});

function menuToggle() {
    const menuToggle = document.querySelector('.menuToggle');
    menuToggle.classList.toogle('active');
}

onclick = toggleMenu()