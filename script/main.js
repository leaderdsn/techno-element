import { cardDB } from './card-db.js'; //база товара
import { menu } from './card-db.js'; //база каталога меню

//Загрузка документа
window.onload = function() {
    createCard(); // вызов функции создания карточки
    swapCards(); // вызов функции перемещения карточки
    clickBtnToogle(); // вызов меню 
    animatedAppearance() // появление кнопки назад

    // добавление каталога в меню
    document.querySelector('.main-menu').appendChild(createMenu(menu));
}

const root = document.querySelector('#root'); // получили родительский компонент root
const mainContainer = document.querySelector('#main-container'); // получили главный контейнер
const mainMenu = document.querySelector('.main-menu'); //получили главное меню
const cardContainerElem = document.querySelector('#card-container'); //получили контейнер с карточками
const modalFormContainer = document.querySelector('#modal-form-container'); //получили форму модального окна
mainMenu.style.display = 'none';
let eventShowMenu;

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
    const modalFormContainer = document.querySelector('#modal-form-container');
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
        document.querySelector('.input-change').value = "";
        modalFormContainer.style.display = 'none';
        return true;
    }
}

/** Создание меню */
function createMenu(data) {
    const ul = document.createElement('ul');
    ul.classList.add('menu-item');
    // ul.hidden = false;

    data.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('sub-menu-item');
        li.textContent = item.label;
        // li.hidden = true;
        if (item.children) {
            li.appendChild(createMenu(item.children));
        }
        ul.appendChild(li);
    });
    return ul;
}

/** Функция обработки отображения меню */
function menuShow() {
    let list = document.querySelectorAll('li') //получаем все li
        // перебираем весь список
    for (let li of list) {
        let span = document.createElement('span'); //создаём элемент show
        span.classList.add('show');
        li.prepend(span); // вставляем элемент show перед списком
        span.append(span.nextSibling); //обарачиваем в show название списка
    }

    // Обработчик клика по меню
    mainMenu.onclick = function(event) {
        // если элемент не спан, то ничего не делать
        if (event.target.tagName != 'SPAN') return;
        //получаем вложенный список
        let subMenu = event.target.parentNode.querySelector('ul');

        //если списка нет то ничего не делать
        if (!subMenu) return;

        //если есть то паказать/скрыть список
        subMenu.hidden = !subMenu.hidden;
        //логика для отображения значков 
        if (subMenu.hidden) {
            event.target.classList.add('hide');
            event.target.classList.remove('show');
            return;
        } else {
            event.target.classList.add('show');
            event.target.classList.remove('hide');
            return;
        }
    }
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
        fromDroppable.style.backgroundColor = 'tomato';
        selectedСard = card;
        card.classList.add('taken');
        setTimeout(() => (card.classList.replace('taken', 'ghostly'), 0));
    }

    /** Обработка прекращения переноса карточки */
    function dragEnd(card) {
        card.classList.remove('ghostly');
    };

    /** Обработка перемщения карточки в не контейнера*/
    function dragOver(e) {
        e.preventDefault();
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
        fromDroppable.style.backgroundColor = '#91bcc4';

        // если в целевом контейнере есть карточка то мы её удаляем
        if (toDroppable.firstChild) {
            toDroppable.removeChild(toDroppable.firstChild);
        };

        // добавляем перемещаемую карточку в целевой контейнер
        toDroppable.append(selectedСard);
        toDroppable.classList.remove('hovered');
    };
};



/** Кнопка назад */
function animatedAppearance() {
    let btnBack = document.querySelector('#back');

    window.addEventListener('scroll', trackScroll);
    btnBack.addEventListener('click', backToTop);

    function trackScroll() {
        let scrolled = window.pageYOffset; // значение окна по вертикали
        let coords = document.documentElement.clientHeight; //значение высоты коренного элемента документа

        // если значение окна больше значения коренного элемента
        if (scrolled > coords) {
            //покажим кнопку
            btnBack.style.bottom = '20px'
            console.log('show')
        }
        // если значение окна меньше значения коренного элемента
        if (scrolled < coords) {
            //спрячим кнопку
            btnBack.style.bottom = '-40px'
        }
    }

    //Переход на верх
    function backToTop() {
        // если значение документа по вертикали более 0 
        // то смещаем по вертикали пока значение pageYOffset не станет 0
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }
}

/** TOOGLE */

/** Обработчик нажатия кнопки меню */
function clickBtnToogle() {
    const btnToogle = document.querySelector('.btn-toogle');
    btnToogle.onclick = function() {
        togglerChange(btnToogle);
    }
}

let flagShow = true; //Текущее положение меню

/* Вывод меню при нажатии на toggle */
function togglerChange(btnToogle) {
    if (flagShow) {
        mainMenu.style.display = 'block';
        menuShow();
        btnToogle.style.backgroundImage = 'url(../image/previous.png)';
        btnToogle.style.transform = 'rotate(180deg)';
        flagShow = false;
    } else {
        mainMenu.style.display = 'none';
        btnToogle.style.backgroundImage = 'url(../image/menu.png)';
        btnToogle.style.transform = 'rotate(0deg)';
        flagShow = true;
    }
}