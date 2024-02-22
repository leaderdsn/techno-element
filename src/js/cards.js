let cardData = {
    id: null,
    value: null
}

export const createCard = (card) => {
    const cardContainerElem = document.querySelector('.js-cards-container');

    // container for cards
    const droppableElem = document.createElement('div');
    droppableElem.id = `drop-${card.id}`;
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
    cardTitleElem.innerHTML = card.title;
    cardElem.appendChild(cardTitleElem);

    // card description
    const cardDescriptionElem = document.createElement('div');
    cardDescriptionElem.classList.add('description');
    cardDescriptionElem.innerHTML = card.description;
    cardElem.appendChild(cardDescriptionElem);

    // container for price and button elements
    const cardFooterElem = document.createElement('footer');
    cardFooterElem.classList.add('card-footer');

    // card price
    const priceElem = document.createElement('div');
    priceElem.classList.add('price');
    priceElem.innerHTML = card.price;
    cardFooterElem.appendChild(priceElem);

    // buy button
    const btnBuyElem = document.createElement('button');
    btnBuyElem.classList.add('btn', 'btn-hs-sm', 'btn-ws-md', 'btn-warning', 'br');
    btnBuyElem.innerHTML = 'Buy';
    cardFooterElem.appendChild(btnBuyElem);

    cardElem.appendChild(cardFooterElem);
    droppableElem.appendChild(cardElem);
    cardContainerElem.appendChild(droppableElem);

    cardTitleElem.addEventListener('click', (e) => {
        showModalForm(e, cardTitleElem);
    })
};

const listenFormCardSubmit = (elem) => {
    const form = document.querySelector('.js-form-card');

    form.onsubmit = async(e) => {
        e.preventDefault();

        cardData = {
            id: elem.parentNode.id,
            value: e.target.inputForm.value
        }

        try {
            await submitCard(cardData);
            elem.innerText = cardData.value
            form.reset();
            closeModalForm();
        } catch (e) {
            //for demonstration: changing the name of the card added to the catch block
            elem.innerText = cardData.value
            form.reset();
        }
        cardData = null;
    }
    closeModalForm();
}

async function submitCard(data) {
    return await window.fetch('/post-data', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Something went wrong');
            };
        });
};

function showModalForm(e, elem) {
    const modalFormContainer = document.querySelector('.js-modal-form-container');
    const inputForm = document.querySelector('.js-input-form');
    inputForm.value = e.target.innerText;
    listenFormCardSubmit(elem);
    modalFormContainer.classList.remove('hidden');
};

function closeModalForm() {
    const modalFormContainer = document.querySelector('.js-modal-form-container');
    const btnClose = document.querySelector('.js-btn-close');
    btnClose.onclick = () => {
        modalFormContainer.classList.add('hidden');
    };
};