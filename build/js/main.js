// const { MENU_DB } = require("./common");
// const { CARDS_DB } = require("./common");
export const CARDS_DB = [{
        id: 1,
        title: 'title #1',
        description: 'description #1',
        price: '$ 100'
    },
    {
        id: 2,
        title: 'title #2',
        description: 'description #2',
        price: '$ 200'
    },
    {
        id: 3,
        title: 'title #3',
        description: 'description #3',
        price: '$ 300'
    },
    {
        id: 4,
        title: 'title #4',
        description: 'description #4',
        price: '$ 400'
    },
    {
        id: 5,
        title: 'title #5',
        description: 'description #5',
        price: '$ 500'
    },
    {
        id: 6,
        title: 'title #6',
        description: 'description #6',
        price: '$ 600'
    },
    {
        id: 7,
        title: 'title #7',
        description: 'description #7',
        price: '$ 700'
    },
    {
        id: 8,
        title: 'title #8',
        description: 'description #8',
        price: '$ 800'
    },
    {
        id: 9,
        title: 'title #9',
        description: 'description #9',
        price: '$ 900'
    },
    {
        id: 10,
        title: 'title #10',
        description: 'description #10',
        price: '$ 1000'
    },
    {
        id: 11,
        title: 'title #11',
        description: 'description #11',
        price: '$ 1100'
    },
    {
        id: 12,
        title: 'title #12',
        description: 'description #12',
        price: '$ 1200'
    },
    {
        id: 13,
        title: 'title #13',
        description: 'description #13',
        price: '$ 1300'
    },
    {
        id: 14,
        title: 'title #14',
        description: 'description #14',
        price: '$ 1400'
    },
]

export const MENU_DB = [{
        'label': 'Construction tools1',
        'children': [
            { 'label': '100mm' },
            { 'label': '115mm' },
        ]
    },
    { 'label': 'Construction tools2' },
    {
        'label': 'Construction tools3',
        'children': [{
                'label': 'Bulgarians',
                'children': [{
                        'label': 'AEG',
                        'children': [
                            { 'label': '100mm' },
                            { 'label': '115mm' },
                            { 'label': '125mm' },
                            { 'label': '150mm' },
                            { 'label': '180mm' },
                            { 'label': '230mm' },
                            { 'label': '300mm' },
                        ]
                    },
                    {
                        'label': 'DEWALT',
                        'children': [
                            { 'label': '100mm' },
                            { 'label': '115mm' },
                            { 'label': '125mm' },
                            { 'label': '150mm' },
                            { 'label': '180mm' },
                            { 'label': '230mm' },
                            { 'label': '300mm' },
                        ]
                    },
                    {
                        'label': 'BOSCH',
                        'children': [
                            { 'label': '100mm' },
                            { 'label': '115mm' },
                            { 'label': '125mm' },
                            { 'label': '150mm' },
                            { 'label': '180mm' },
                            { 'label': '230mm' },
                            { 'label': '300mm' },
                        ]
                    },
                    {
                        'label': 'Makita',
                        'children': [
                            { 'label': '100mm' },
                            { 'label': '115mm' },
                            { 'label': '125mm' },
                            { 'label': '150mm' },
                            { 'label': '180mm' },
                            { 'label': '230mm' },
                            { 'label': '300mm' },
                        ]
                    },
                    {
                        'label': 'Sturm',
                        'children': [
                            { 'label': '100mm' },
                            { 'label': '115mm' },
                            { 'label': '125mm' },
                            { 'label': '150mm' },
                            { 'label': '180mm' },
                            { 'label': '230mm' },
                            { 'label': '300mm' },
                        ]
                    },
                ]
            },
            {
                'label': 'Impact wrenches',
                'children': [{
                        'label': 'AEG',
                        'children': [
                            { 'label': 'Pulse' },
                            { 'label': 'Shock' },
                            { 'label': 'Electric' },

                        ]
                    },
                    {
                        'label': 'Reoby',
                        'children': [
                            { 'label': 'Pulse' },
                            { 'label': 'Shock' },
                            { 'label': 'Electric' },

                        ]
                    },
                    {
                        'label': 'Patriot',
                        'children': [
                            { 'label': 'Pulse' },
                            { 'label': 'Shock' },
                            { 'label': 'Electric' },
                        ]
                    },
                    {
                        'label': 'Makita',
                        'children': [
                            { 'label': 'Pulse' },
                            { 'label': 'Shock' },
                            { 'label': 'Electric' },

                        ]
                    },
                    {
                        'label': 'REDVERG',
                        'children': [
                            { 'label': 'Pulse' },
                            { 'label': 'Shock' },
                            { 'label': 'Electric' },
                        ]
                    },
                ]
            },
            {
                'label': 'Drills',
                'children': [{
                        'label': 'Сordless drills screwdrivers',
                        'children': [
                            { 'label': 'brush' },
                            { 'label': 'brushless' },
                            {
                                'label': 'On wood',
                                'children': [{
                                    'label': 'Voltage',
                                    'children': [{
                                            'label': '12V',
                                            'children': [{
                                                    'label': 'With li-ion battery',
                                                    'children': [
                                                        { 'label': 'Pulse' },
                                                        { 'label': 'Shock' },
                                                        { 'label': 'Electric' },

                                                    ]
                                                },
                                                {
                                                    'label': 'Without li-ion battery',
                                                    'children': [
                                                        { 'label': 'Pulse' },
                                                        { 'label': 'AEG' },
                                                        { 'label': 'Electric' },

                                                    ]
                                                },
                                            ]
                                        },
                                        { 'label': '18V' },
                                        { 'label': '36V' },

                                    ]
                                }, ]
                            },
                        ]
                    },
                    { 'label': 'Shockless' },
                    { 'label': 'Drill mixers' },
                    { 'label': 'Percussion' },
                    { 'label': 'Corner' },
                ]
            },
        ]
    },
];;



//Загрузка документа
window.onload = function() {
    createCard(); // вызов функции создания карточки
    swapCards(); // вызов функции перемещения карточки
    clickBtnToogle(); // вызов меню 
    animatedAppearance() // появление кнопки назад

    // добавление каталога в меню
    document.querySelector('.main-menu').appendChild(createMenu(MENU_DB));
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
    CARDS_DB.map((item) => {
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
        // откуда была перемещена перемещаемая карточка
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
        btnToogle.style.backgroundImage = 'url(./images/previous.png)';
        btnToogle.style.transform = 'rotate(180deg)';
        flagShow = false;
    } else {
        mainMenu.style.display = 'none';
        btnToogle.style.backgroundImage = 'url(./images/menu.png)';
        btnToogle.style.transform = 'rotate(0deg)';
        flagShow = true;
    }
}