let editingCardEl = null;
let cardData = {
    id: null,
    value: null
}

const createCard = (card) => {
    const cardContainerElem = document.querySelector('.js-card-container');

    // container for cards
    const droppableElem = document.createElement('div');
    droppableElem.id = 'drop-' + card.id;
    droppableElem.classList.add(`droppable`);

    // product card
    const cardElem = document.createElement('div');
    cardElem.id = card.id;
    cardElem.classList.add('card');

    // setting the attribute to true for the ability to drag the card
    cardElem.setAttribute("draggable", true);

    // card name
    const cardTitleElem = document.createElement('h2');
    cardTitleElem.classList.add('title');

    // card description
    const cardDescriptionElem = document.createElement('div');
    cardDescriptionElem.classList.add('description');

    // container for price and button elements
    const cardFooterElem = document.createElement('div');
    cardFooterElem.classList.add('card-footer');

    // card price
    const priceElem = document.createElement('div');
    priceElem.classList.add('price');

    // buy button
    const btnBuyElem = document.createElement('div');
    btnBuyElem.classList.add('btn-buy');

    cardTitleElem.innerHTML = card.title;
    cardDescriptionElem.innerHTML = card.description;
    priceElem.innerHTML = card.price;
    btnBuyElem.innerHTML = 'Buy';

    cardFooterElem.appendChild(priceElem)
    cardFooterElem.appendChild(btnBuyElem)

    cardElem.appendChild(cardTitleElem);
    cardElem.appendChild(cardDescriptionElem);
    cardElem.appendChild(cardFooterElem);
    droppableElem.appendChild(cardElem);
    cardContainerElem.appendChild(droppableElem);

    cardTitleElem.addEventListener('click', (e) => {
        showModalForm(e, cardTitleElem)
    })
};

const listenFormCardSubmit = (elem) => {
    const form = document.querySelector('.js-form-card')

    form.onsubmit = (e) => {
        e.preventDefault();
        cardData = {
            id: elem.parentNode.id,
            value: e.target.inputForm.value
        }
        submitCard()
            .then((res) => {
                console.log(res)
                editingCardEl = cardData;
                elem.innerText = e.target.inputForm.value
                console.log(editingCardEl)
                form.reset();

            })
            .catch((err) => {
                // staging
                console.error(err)
            })
            .finally(() => {
                editingCardEl = null;
                cardData = null;
            })
    }
    closeModalForm();
}

function submitCard(data) {
    return window.fetch({
            url: '/postData',
            body: JSON.stringify(data)
        })
        .then(() => console.log('success send data'))
        .catch(() => console.error('failed send data'));
};

function showModalForm(e, elem) {
    const modalFormContainer = document.querySelector('.js-modal-form-container');
    const inputForm = document.querySelector('.js-input-form')
    inputForm.value = e.target.innerText;
    listenFormCardSubmit(elem)
    modalFormContainer.style.display = 'flex'; //TODO: заменить на класс
};

function closeModalForm() {
    const modalFormContainer = document.querySelector('.js-modal-form-container');
    const btnClose = document.querySelector('.js-btn-close');
    btnClose.onclick = () => {
        modalFormContainer.style.display = 'none';
    };
};