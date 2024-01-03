import sesteoFront from './assets/Sesteo.png'

export function landingPageLoad() {
    const content = document.querySelector('#content');

    content.replaceChildren();
    
    const heading = document.createElement('h1');
    heading.classList.add('header');
    heading.textContent = 'El Sesteo';
    

    const headImg = document.createElement('img');
    headImg.src = sesteoFront;
    headImg.alt = 'Image of the restaurant, the mythical corner where it is placed.'
    headImg.classList.add('head-img');

    const copy = document.createElement('p');
    copy.textContent = "The most popular restaurant in León, Nicaragua, where you can savor traditional meals for lunch and dinner, immersing yourself in the Nicaraguan experience. Located just in front of the city's Cathedral, the oldest monument in the colonial history of our nation."
    copy.classList.add('sesteo-copy')

    content.appendChild(heading);
    content.appendChild(copy);
    content.appendChild(headImg);

};
