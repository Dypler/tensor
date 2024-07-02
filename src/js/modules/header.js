document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector(".header");
    const navbarHeight = header.offsetHeight;
    let lastScrollTop = 0;

    window.onscroll = function () {
        scrollHide();
    };

    function scrollHide() {
        const st = window.scrollY || document.documentElement.scrollTop;
        console.log(st);
        if (st > lastScrollTop) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }
});

