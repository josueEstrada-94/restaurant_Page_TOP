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
    sandwichImg.src = 'assets/Sesteo-sandwich.png';
    sandwich.appendChild(sandwichImg);

    const sandwichTxt = document.createElement('span');
    sandwichTxt.textContent = 'Sandwich';
    sandwichTxt.classList.add('list-txt');
    sandwich.appendChild(sandwichTxt);

    /*Desmenuzada*/ 
    const desmenuzada = document.createElement('li');
    desmenuzada.classList.add('list-item');

    const desmenuzadaImg = document.createElement('img');
    desmenuzadaImg.src = 'assets/Sesteo-desmenuzada.png';
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
    plantAndCheeseImg.src = 'assets/Sesteo-tajadas-queso.png';
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