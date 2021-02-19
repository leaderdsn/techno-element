import { cardDB } from './card-db.js'; //база товара
import { menu } from './card-db.js'; //база menu

//Загрузка документа
window.onload = function() {
    createCard();
    clickBtnToogle()

    document.querySelector('.main-menu').appendChild(createMenu(menu));
}

const root = document.querySelector('#root'); // получили родительский компонент root
const mainContainer = document.querySelector('.main-container'); // главный контейнер
const mainMenu = document.querySelector('.main-menu'); //главное меню

/** Создание карточки товара */
const createCard = () => {
    const cardContainerElem = document.createElement('div');
    cardContainerElem.classList.add('card-container');

    cardDB.map((item) => {
        const cardElem = document.createElement('div');
        cardElem.id = item.id;
        cardElem.classList.add('card');

        const cardTitleElem = document.createElement('h2');
        cardTitleElem.classList.add('title');

        const cardDescriptionElem = document.createElement('div');
        cardDescriptionElem.classList.add('description');

        const cardFooterElem = document.createElement('div');
        cardFooterElem.classList.add('card-footer');

        const priceElem = document.createElement('div');
        priceElem.classList.add('price');

        const btnBuyElem = document.createElement('div');
        btnBuyElem.classList.add('btn-buy');

        cardTitleElem.innerHTML = item.title;
        cardDescriptionElem.innerHTML = item.description;
        priceElem.innerHTML = item.price
        btnBuyElem.innerHTML = 'Buy'

        cardFooterElem.appendChild(priceElem)
        cardFooterElem.appendChild(btnBuyElem)

        cardElem.appendChild(cardTitleElem);
        cardElem.appendChild(cardDescriptionElem);
        cardElem.appendChild(cardFooterElem);
        cardContainerElem.appendChild(cardElem)
        mainContainer.appendChild(cardContainerElem);

        cardTitleElem.onclick = (() => showModalForm(cardTitleElem))

        cardElem.onmousedown = (e) => {
            cardElem.style.position = 'absolute';
            cardElem.style.zIndex = 1000;
            //перемещение в body для того чтобы карточка была точно не внутри позиции relative
            document.body.append(cardElem)

            moveAt(e.pageX, e.pageY);

            //передвинуть мяч под координаты курсора
            function moveAt(pageX, pageY) {
                cardElem.style.left = pageX - cardElem.offsetWidth / 2 + 'px';
                cardElem.style.left = pageY - cardElem.offsetHeight / 2 + 'px';
            }

            function onMouseMove()
        }
    })
}

root.appendChild(mainContainer); //добавление всех элементов в родительский контейнер

//Покакзать модальное окно
function showModalForm(title) {
    const modalFormContainer = document.querySelector('.modal-form-container')
    modalFormContainer.style.display = 'flex'
    changeTitleCard(title);
}

//Изменение названия карточки
function changeTitleCard(titleCard) {

    const form = document.querySelector('#form')
    form.onsubmit = (event) => {
        try {
            sendDataToServer(event.target.inputChange.value)
            titleCard.innerText = event.target.inputChange.value;
        } catch (e) {
            alert(e);
        }

        return false
    }

    const btnClose = document.querySelector('.btn-close')
        //Закрытие модального окна
    btnClose.onclick = () => {
        const modalForm = document.querySelector('.modal-form-container')
        document.getElementsByClassName('input-change').value = ""
        modalForm.style.display = 'none'
        return true
    }
}

//Обработчик нажатия кнопки меню
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
//Демонстрация меню
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

//Показать подменю
function showItem() {
    console.log('SHOW ITEM')
    for (let i = 0; i <= this.children.length - 1; i++) {
        let subMenu = this.children[i];
        subMenu.style.display = 'block';
    }
}
//Убрать подменю
function hideItem() {
    console.log('HIDE ITEM')
    for (let i = 0; i <= this.children.length - 1; i++) {
        let subMenu = this.children[i];
        subMenu.style.display = 'none'
    };
}

//Создание меню
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


function sendDataToServer(name) {
    let request = new XMLHttpRequest();

    function reqReadyStateChange() {
        if (request.readyState == 4 && request.status == 200)
            console.log('Request:', request.responseText);
        // document.getElementById("output").innerHTML = request.responseText;
    }
    let body = "name=" + name;
    request.open("POST", "http://localhost:8080/postdata.php");
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.onreadystatechange = reqReadyStateChange;
    request.send(body);
}