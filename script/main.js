import { cardDB } from './card-db.js'; //база товара
import { menu } from './card-db.js'; //база каталога меню

//Загрузка документа
window.onload = function() {
    createCard(); // вызов функции создания карточки
    swapCards(); // вызов функции перемещения карточки
    clickBtnToogle(); // вызов меню 

    // добавление каталога в меню
    document.querySelector('.main-menu').appendChild(createMenu(menu));
}

const root = document.querySelector('#root'); // получили родительский компонент root
const mainContainer = document.querySelector('.main-container'); // получили главный контейнер
const mainMenu = document.querySelector('.main-menu'); //получили главное меню
const cardContainerElem = document.querySelector('.card-container'); //получили контейнер с карточками

/** Создание карточки товара */
const createCard = () => {
    cardDB.map((item) => {
        // контейнер для карточки
        const droppableElem = document.createElement('div');
        droppableElem.id = 'drop-' + item.id;
        droppableElem.classList.add('droppable');

        // карточка товара
        const cardElem = document.createElement('div');
        cardElem.id = item.id;
        cardElem.classList.add('card');

        // устаноавливаем атрибут в true для возможности перетаскивания карточки
        cardElem.setAttribute("draggable", true);

        // название товара
        const cardTitleElem = document.createElement('h2');
        cardTitleElem.classList.add('title');

        // описание товара
        const cardDescriptionElem = document.createElement('div');
        cardDescriptionElem.classList.add('description');

        // контейнер для цены и кнопки
        const cardFooterElem = document.createElement('div');
        cardFooterElem.classList.add('card-footer');

        // цена товара
        const priceElem = document.createElement('div');
        priceElem.classList.add('price');

        // кнопка купить
        const btnBuyElem = document.createElement('div');
        btnBuyElem.classList.add('btn-buy');

        // даполнение карточки товара
        cardTitleElem.innerHTML = item.title;
        cardDescriptionElem.innerHTML = item.description;
        priceElem.innerHTML = item.price;
        btnBuyElem.innerHTML = 'Buy';

        // добваление элементов в dom дерево
        cardFooterElem.appendChild(priceElem)
        cardFooterElem.appendChild(btnBuyElem)

        cardElem.appendChild(cardTitleElem);
        cardElem.appendChild(cardDescriptionElem);
        cardElem.appendChild(cardFooterElem);
        droppableElem.appendChild(cardElem);
        cardContainerElem.appendChild(droppableElem);

        // показать модальное окно по нажатию на название карточки
        cardTitleElem.onclick = (() => showModalForm(cardTitleElem));
    });
};

root.appendChild(mainContainer); //добавление всех элементов в родительский контейнер

/** Покакзать модальное окно */
function showModalForm(title) {
    const modalFormContainer = document.querySelector('.modal-form-container');
    modalFormContainer.style.display = 'flex';
    changeTitleCard(title);
}

/** Изменение названия карточки */
function changeTitleCard(titleCard) {

    const form = document.querySelector('#form');

    //отправка данных о изменении названия карточки на сервер
    form.onsubmit = (event) => {
        try {
            sendDataToServer(event.target.inputChange.value)
            titleCard.innerText = event.target.inputChange.value;
        } catch (e) {
            alert(e);
        }
        return false;
    }

    // получение кнопки закрытия модального окна
    const btnClose = document.querySelector('.btn-close');
    // 3акрытие модального окна
    btnClose.onclick = () => {
        const modalForm = document.querySelector('.modal-form-container')
        document.getElementsByClassName('input-change').value = ""; //TODO: не очищается, доделать
        modalForm.style.display = 'none';
        return true;
    }
}

/** Создание меню */
function createMenu(data) {
    const ul = document.createElement('ul');
    ul.classList.add('menu-item')

    data.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('sub-menu-item')
        li.textContent = item.name;
        if (item.children) {
            li.appendChild(createMenu(item.children));
        }
        ul.appendChild(li);
    });
    return ul;
}

/** Обработчик нажатия кнопки меню */
function clickBtnToogle() {
    const btnToogle = document.querySelector('.btn-toogle');
    btnToogle.onclick = function() {

        if (mainMenu.style.display == "none") {
            mainMenu.style.display = 'block';
            let el = document.getElementsByClassName('main-menu');
            menuShow(el);
        } else {
            mainMenu.style.display = 'none';
        }
    }
}

//TODO: не корректно работают menuShow !ИСПРАВИТЬ!
/** Демонстрация меню */
const menuShow = (el) => {
    console.log('MENU SHOW')
    for (var i = 0; i < el.length; i++) {
        if (el[i].children.length > 1) {
            el[i].addEventListener("mouseenter", showItem, false);
            el[i].addEventListener("mouseleave", hideItem, false);
        }
        menuShow(el[i].children)
    }
}

/** Показать подменю */
function showItem() {
    console.log('SHOW ITEM')
    for (let i = 0; i <= this.children.length - 1; i++) {
        let subMenu = this.children[i];
        subMenu.style.display = 'block';
    }
}
/** Спрятать подменю */
function hideItem() {
    console.log('HIDE ITEM')
    for (let i = 0; i <= this.children.length - 1; i++) {
        let subMenu = this.children[i];
        subMenu.style.display = 'none'
    };
}


/** Отправка данных на сервер */
function sendDataToServer(name) {
    let request = new XMLHttpRequest();

    function reqReadyStateChange() {
        if (request.readyState == 4 && request.status == 200) {
            alert(request.responseText);
        }
    }
    let body = "name=" + name;
    request.open("POST", "http://localhost:8080/postdata.php");
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.onreadystatechange = reqReadyStateChange;
    request.send(body);
}

/** Перемещение карточки товара */
function swapCards() {
    // получили контейнеры для карточек
    let droppables = document.querySelectorAll('.droppable');
    // получили карточки
    let cards = document.querySelectorAll('.card');
    let selectedСard = null; // выбранная карточка
    let fromDroppable = null; // контейнер в котором была карточка

    //пробегаем по карточкам
    for (let card of cards) {
        // начало перетаскивания карточки
        card.ondragstart = function() {
                dragStart(this);
            }
            // заканчивание перетаскивания карточки
        card.ondragend = function() {
            dragEnd(this);
        }
    }

    //пробегаем по контейнерам для карточек
    for (let droppable of droppables) {
        //перемещение
        droppable.ondragover = function(e) {
                dragOver(e);
            }
            // попали в контейнер
        droppable.ondragenter = function(e) {
                dragEnter(e, this);
            }
            // убрали с контейнера
        droppable.ondragleave = function() {
                dragLeave(this);
            }
            // положили в контейнер
        droppable.ondrop = function() {
            dragDrop(this);
        }
    }

    /** Обработка выбора карточки для переноса */
    function dragStart(card) {
        fromDroppable = card.parentNode;
        selectedСard = card;
        card.classList.add('taken');
        setTimeout(() => (card.classList.replace('taken', 'ghostly'), 0));
        console.log('dragSrart');
    }

    /** Обработка прекращения переноса карточки */
    function dragEnd(card) {
        card.classList.remove('ghostly');
        console.log('dragEnd');
    };

    /** Обработка перемщения карточки в не контейнера*/
    function dragOver(e) {
        e.preventDefault();
        console.log('dragOver');
    };

    /** Оработка при попадании карточки в контейнер */
    function dragEnter(e, toDroppable) {
        e.preventDefault();
        toDroppable.classList.add('hovered');
        toDroppable.firstChild.classList.add('hiddenCard'); // прячем карточку находящуюся в текущем контейнере
    };

    /** Обработка при покидании карточки контейнера*/
    function dragLeave(toDroppable) {
        toDroppable.classList.remove('hovered');
        toDroppable.firstChild.classList.remove('hiddenCard'); // показываем карточку находящуюся в покинутом контейнере
    };

    /** Обработка при прекращении перемещения и попадани карточки в контейнер  */
    function dragDrop(toDroppable) {
        toDroppable.firstChild.classList.remove('hiddenCard'); // показываем карточку находящуюся в текущем контейнере
        // переносим карточку из целевого контейнера в контейнер 
        // от куда была перемещена перемещаемая карточка
        fromDroppable.append(toDroppable.firstChild);

        // если в целевом контейнере есть карточка то мы её удаляем
        if (toDroppable.firstChild) {
            toDroppable.removeChild(toDroppable.firstChild);
        };

        // добавляем перемещаемую карточку в целевой контейнер
        toDroppable.append(selectedСard);
        toDroppable.classList.remove('hovered');
    };
};