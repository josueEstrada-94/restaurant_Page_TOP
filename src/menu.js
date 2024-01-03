import sandwichSesteo from './assets/sesteo-sandwich.png';
import desmenuzadaSesteo from './assets/sesteo-desmenuzada.png';
import plantAndCheeseSesteo from './assets/sesteo-tajadas-queso.png';


export function menuPage() {
    const content = document.querySelector('#content');

    content.replaceChildren();

    const menuHead = document.createElement('h1');
    menuHead.textContent = 'Menu';
    menuHead.classList.add('menu-head');

    const list = document.createElement('ul');
    list.classList.add('sesteo-list')

    /* List Content */ 
    /*Sandwich*/ 
    const sandwich = document.createElement('li');
    sandwich.classList.add('list-item');

    const sandwichImg = document.createElement('img');
    sandwichImg.classList.add('list-img');
    sandwichImg.src = sandwichSesteo;
    sandwich.appendChild(sandwichImg);

    const sandwichTxt = document.createElement('span');
    sandwichTxt.textContent = 'Sandwich';
    sandwichTxt.classList.add('list-txt');
    sandwich.appendChild(sandwichTxt);

    /*Desmenuzada*/ 
    const desmenuzada = document.createElement('li');
    desmenuzada.classList.add('list-item');

    const desmenuzadaImg = document.createElement('img');
    desmenuzadaImg.src = desmenuzadaSesteo;
    desmenuzadaImg.classList.add('list-img');
    desmenuzada.appendChild(desmenuzadaImg);

    const desmenuzadaTxt= document.createElement('span');
    desmenuzadaTxt.textContent = "'Carne Desmenuzada' Shredded meat";
    desmenuzadaTxt.classList.add('list-txt');
    desmenuzada.appendChild(desmenuzadaTxt);

    /*Plantain and Cheese*/ 
    const plantAndCheese = document.createElement('li');
    plantAndCheese.classList.add('list-item');

    const plantAndCheeseImg = document.createElement('img');
    plantAndCheeseImg.src = plantAndCheeseSesteo;
    plantAndCheeseImg.classList.add('list-img');
    plantAndCheese.appendChild(plantAndCheeseImg);

    const plantAndCheeseTxt = document.createElement('span');
    plantAndCheeseTxt.textContent = "Plantain slices and Cheese";
    plantAndCheeseTxt.classList.add('list-txt');
    plantAndCheese.appendChild(plantAndCheeseTxt);

    content.appendChild(menuHead);
    list.appendChild(sandwich);
    list.appendChild(desmenuzada);
    list.appendChild(plantAndCheese);
    content.appendChild(list);

}