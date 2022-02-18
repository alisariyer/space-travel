const nav = document.querySelector('.primary-navigation');
const toggleNav = document.querySelector('.mobile-nav-toggle');

toggleNav.addEventListener('click', () => {
    let visible = nav.getAttribute("data-visible");
    if (visible === 'true') {
        nav.setAttribute('data-visible', 'false');
        toggleNav.setAttribute('aria-expanded', 'false');
    } else {
        nav.setAttribute('data-visible', 'true');
        toggleNav.setAttribute('aria-expanded', 'true');
    }
})
