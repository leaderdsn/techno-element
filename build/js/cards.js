"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listenFormCardSubmit = listenFormCardSubmit;
exports.createCard = void 0;
var cardData = {
  id: null,
  value: null
}; // const mainContainer = document.querySelector('#main-container');
// const root = document.querySelector('#root');

var createCard = function createCard(card) {
  var cardContainerElem = document.querySelector('#card-container'); // container for cards

  var droppableElem = document.createElement('div');
  droppableElem.id = 'drop-' + card.id;
  droppableElem.classList.add('droppable droppable-js'); // product card

  var cardElem = document.createElement('div');
  cardElem.id = card.id;
  cardElem.classList.add('card card-js'); // setting the attribute to true for the ability to drag the card

  cardElem.setAttribute("draggable", true); // card name

  var cardTitleElem = document.createElement('h2');
  cardTitleElem.classList.add('title'); // card description

  var cardDescriptionElem = document.createElement('div');
  cardDescriptionElem.classList.add('description'); // container for price and button elements

  var cardFooterElem = document.createElement('div');
  cardFooterElem.classList.add('card-footer'); // card price

  var priceElem = document.createElement('div');
  priceElem.classList.add('price'); // buy button

  var btnBuyElem = document.createElement('div');
  btnBuyElem.classList.add('btn-buy');
  cardTitleElem.innerHTML = card.title;
  cardDescriptionElem.innerHTML = card.description;
  priceElem.innerHTML = card.price;
  btnBuyElem.innerHTML = 'Buy';
  cardFooterElem.appendChild(priceElem);
  cardFooterElem.appendChild(btnBuyElem);
  cardElem.appendChild(cardTitleElem);
  cardElem.appendChild(cardDescriptionElem);
  cardElem.appendChild(cardFooterElem);
  droppableElem.appendChild(cardElem);
  cardContainerElem.appendChild(droppableElem);
  cardTitleElem.addEventListener('click', function (e) {
    cardData = {
      id: card.id,
      value: card.title
    };
    showModalForm();
  });
};

exports.createCard = createCard;

function listenFormCardSubmit() {
  var modalFormContainer = document.querySelector('.js-modal-form-container');
  var form = document.querySelector('js-card-form');

  form.onsubmit = function (e) {
    e.preventDefault();
    submitCard().then(function () {
      editingCardEl.value = cardData;
    })["catch"](function () {
      // staging
      editingCardEl.value = cardData;
    })["finally"](function () {
      editingCardEl = null;
      cardData = null;
    });
  };

  var btnClose = document.querySelector('.js-btn-close');

  btnClose.onclick = function () {
    document.querySelector('js-card-form .js-input-form').value = '';
    modalFormContainer.style.display = 'none';
  };
}

function submitCard(data) {
  return window.fetch({
    url: '/postData',
    body: JSON.stringify(data)
  }).then(function () {
    return console.log('success send data');
  })["catch"](function () {
    return console.error('failed send data');
  });
}

function showModalForm() {
  var modalFormContainer = document.querySelector('js-modal-form-container');
  modalFormContainer.style.display = 'flex'; //TODO: заменить на класс
} //root.appendChild(mainContainer);
//# sourceMappingURL=cards.js.map
