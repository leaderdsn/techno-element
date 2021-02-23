let cardData = {
    id: null,
    value: null
}


// const mainContainer = document.querySelector('#main-container');

// const root = document.querySelector('#root');

export const createCard = (card) => {
    const cardContainerElem = document.querySelector('#card-container');

    // container for cards
    const droppableElem = document.createElement('div');
    droppableElem.id = 'drop-' + card.id;
    droppableElem.classList.add('droppable droppable-js');

    // product card
    const cardElem = document.createElement('div');
    cardElem.id = card.id;
    cardElem.classList.add('card card-js');

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
        cardData = { id: card.id, value: card.title };
        showModalForm();
    });


};

export function listenFormCardSubmit() {
    const modalFormContainer = document.querySelector('.js-modal-form-container')
    const form = document.querySelector('js-card-form')

    form.onsubmit = (e) => {
        e.preventDefault()

        submitCard()
            .then(() => {
                editingCardEl.value = cardData
            })
            .catch(() => {
                // staging
                editingCardEl.value = cardData
            })
            .finally(() => {
                editingCardEl = null
                cardData = null
            })
    }

    const btnClose = document.querySelector('.js-btn-close')

    btnClose.onclick = () => {
        document.querySelector('js-card-form .js-input-form').value = ''
        modalFormContainer.style.display = 'none'
    }
}

function submitCard(data) {
    return window.fetch({
            url: '/postData',
            body: JSON.stringify(data)
        })
        .then(() => console.log('success send data'))
        .catch(() => console.error('failed send data'))
}

function showModalForm() {
    const modalFormContainer = document.querySelector('js-modal-form-container')
    modalFormContainer.style.display = 'flex' //TODO: заменить на класс
}

//root.appendChild(mainContainer);