import '../scss/style.scss';

import './modules/swiper'
import './modules/svg'
import './modules/header'

function disableSmoothScroll() {
    const htmlElement = document.documentElement;
    htmlElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0); // Scroll to top without smooth behavior
    htmlElement.style.scrollBehavior = 'smooth';
}