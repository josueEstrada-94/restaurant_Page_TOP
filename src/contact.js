import cellphoneSesteo from './assets/icons/cellphone.svg';
import emailSesteo from './assets/icons/email.svg';
import instagramSesteo from './assets/icons/instagram.svg';
import localSesteo from './assets/icons/map-marker.svg';

export function contactPage() {
    const content = document.querySelector('#content');

    content.replaceChildren();

    const contactHead = document.createElement('h1');
    contactHead.textContent = 'Contact Us';
    contactHead.classList.add('contact-head');

    const list = document.createElement('ul');
    list.classList.add('sesteo-con')

    /* List Content */ 
    /* Cellphone */ 
    const cellphone = document.createElement('li');
    cellphone.classList.add('con-item');

    const cellphoneImg = document.createElement('img');
    cellphoneImg.classList.add('con-img');
    cellphoneImg.src = cellphoneSesteo;
    cellphone.appendChild(cellphoneImg);

    const cellphoneTxt = document.createElement('span');
    cellphoneTxt.textContent = '+505 - 7786 - 4930';
    cellphoneTxt.classList.add('con-txt');
    cellphone.appendChild(cellphoneTxt);

    /* Email */ 
    const email = document.createElement('li');
    email.classList.add('con-item');

    const emailImg = document.createElement('img');
    emailImg.src = emailSesteo;
    emailImg.classList.add('con-img');
    email.appendChild(emailImg);

    const emailTxt= document.createElement('span');
    emailTxt.textContent = "sesteo_leon@gmail.com";
    emailTxt.classList.add('con-txt');
    email.appendChild(emailTxt);

    /*Instagram*/ 
    const instagram = document.createElement('li');
    instagram.classList.add('con-item');

    const instagramImg = document.createElement('img');
    instagramImg.src = instagramSesteo;
    instagramImg.classList.add('con-img');
    instagram.appendChild(instagramImg);

    const instagramTxt = document.createElement('span');
    instagramTxt.textContent = "elsesteo.leon";
    instagramTxt.classList.add('con-txt');
    instagram.appendChild(instagramTxt);

    /*local*/ 
    const local = document.createElement('li');
    local.classList.add('con-item');

    const localImg = document.createElement('img');
    localImg.src = localSesteo;
    localImg.classList.add('con-img');
    local.appendChild(localImg);

    const localTxt = document.createElement('span');
    localTxt.textContent = "In front of the city's Cathedral";
    localTxt.classList.add('con-txt');
    local.appendChild(localTxt);

    content.appendChild(contactHead);
    list.appendChild(cellphone);
    list.appendChild(email);
    list.appendChild(instagram);
    list.appendChild(local)
    content.appendChild(list);

}