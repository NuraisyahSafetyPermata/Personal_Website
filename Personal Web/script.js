const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#Other-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const other = document.querySelector('#Other-menu');

document.addEventListener('click', function(e){
    if(!other.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});