import './style.css';
import { landingPageLoad } from './landing_page.js';
import { menuPage } from './menu.js';
import { contactPage } from './contact.js';


landingPageLoad();

/*Page switching module*/

let pageSwitchingModule = (function() {
    
    const homePage = document.querySelector('.home');
    homePage.addEventListener('click', landingPageLoad);

    const menuTab = document.querySelector('.menu');
    menuTab.addEventListener('click', menuPage);

    const contactTab = document.querySelector('.contact');
    contactTab.addEventListener('click', contactPage); 
})();