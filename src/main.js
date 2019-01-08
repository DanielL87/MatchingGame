import './styles.css';
import stark from './img/stark.png';
import card from './img/card.jpg';
import baratheon from './img/baratheon.png';
import lannister from './img/lannister.png';
import arryn from './img/arryn.png';
import greyjoy from './img/greyjoy.png';
import targaryen from './img/targaryen.png';

$(document).ready(function () {
    $(".stark").attr('src', stark)
    $(".baratheon").attr('src', baratheon)
    $(".lannister").attr('src', lannister)
    $(".arryn").attr('src', arryn)
    $(".greyjoy").attr('src', greyjoy)
    $(".targaryen").attr('src', targaryen)
    $(".back-face").attr('src', card)
})


const cards = document.querySelectorAll(".memory-card");
let isFirstClick = true;
let cardOne;
let cardTwo;
let finish = true;

cards.forEach(card => card.addEventListener("click", flip));

function flip() {
    if (finish == false) return;
    if (this === cardOne && !isFirstClick) return;
    this.classList.toggle('flip');
    if (isFirstClick) {
        isFirstClick = false;
        cardOne = this;
    } else {
        cardTwo = this;
        isFirstClick = true;
        finish = false;
        checkForMatch();
    }
}

function checkForMatch() {
    let matchedCards = cardOne.dataset.framework == cardTwo.dataset.framework;
    if (matchedCards == true) {
        cardOne.removeEventListener('click', flip);
        cardTwo.removeEventListener('click', flip);

    }
    else {
        setTimeout(() => {
            cardOne.classList.toggle('flip');
            cardTwo.classList.toggle('flip');
        }, 1000);

    }
    setTimeout(() => {
        finish = true;
    }, 1000);
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();


