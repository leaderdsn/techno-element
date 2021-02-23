const { createCard, listenFormCardSubmit } = require("../../src/js/cards");
const { MENU_DATA, CARDS_DATA } = require("../../src/js/common");

(function() {

    const root = document.querySelector('#root')
    const mainContainer = document.querySelector('.js-main-container')
    const mainMenu = document.querySelector('.js-main-menu');

    window.onload = function() {
        createCards();
        listenDragCard();
        listenMenuToggleBtn();
        listenBackToTopBtn();
        listenFormCardSubmit();
        listenMainMenu();

        mainMenu.appendChild(createMenu(MENU_DATA));
    }

    function createCards() {
        CARDS_DATA.forEach(createCard);
    }

    root.appendChild(mainContainer);

    /** Creating and filling in menus */
    function createMenu(data) {
        const ul = document.createElement('ul');
        ul.classList.add('menu-item item-menu-js');

        data.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('sub-menu-item sub-menu-item-js');
            li.textContent = item.label;
            if (item.children) {
                li.appendChild(createMenu(item.children));
            }
            ul.appendChild(li);
        });
        return ul;
    }

    /** Display the menu */
    function menuShow() {
        mainMenu.onclick = (e) => {
            let itemMenu = e.target.querySelector('item-menu-js');

            if (!itemMenu) return;

            itemMenu.hidden = !itemMenu.hidden;

            if (itemMenu.hidden) {
                e.target.classList.add('collapsed')
            } else {
                e.target.classList.remove('collapsed');
            }
        }
    }

    /** Moving the product card */
    function listenDragCard() {
        let droppables = document.querySelectorAll('.js-droppable');
        let cards = document.querySelectorAll('.js-card');
        let selectedСard = null;
        let fromDroppable = null;

        for (let card of cards) {
            card.addEventListener('dragstart', dragStart(this));
            card.addEventListener('dragend', dragEnd(this));
        }

        for (let droppable of droppables) {
            droppable.addEventListener('dragover', (e) => dragOver(e));
            droppable.addEventListener('dragenter', (e) => dragEnter(e, this));
            droppable.addEventListener('dragleave', (e) => dragLeave(this));
            droppable.addEventListener('drop', (e) => dragDrop(this));
        }

        function dragStart(card) {
            fromDroppable = card.parentNode;
            fromDroppable.style.backgroundColor = 'tomato'; //TODO:
            selectedСard = card;
            card.classList.add('taken');
            setTimeout(() => (card.classList.replace('taken', 'ghostly'), 0));
        };

        function dragEnd(card) {
            card.classList.remove('ghostly');
        };

        function dragOver(e) {
            e.preventDefault();
        };

        function dragEnter(e, toDroppable) {
            e.preventDefault();
            toDroppable.classList.add('hovered');
            toDroppable.firstChild.classList.add('hiddenCard');
        };

        function dragLeave(toDroppable) {
            toDroppable.classList.remove('hovered');
            toDroppable.firstChild.classList.remove('hiddenCard');
        };

        function dragDrop(toDroppable) {
            toDroppable.firstChild.classList.remove('hiddenCard');

            fromDroppable.append(toDroppable.firstChild);
            fromDroppable.style.backgroundColor = '#91bcc4'; //TODO:

            if (toDroppable.firstChild) {
                toDroppable.removeChild(toDroppable.firstChild);
            };

            toDroppable.append(selectedСard);
            toDroppable.classList.remove('hovered');
        };
    };

    function listenBackToTopBtn() {
        const btnBackToTop = document.querySelector('.js-btn-back-to-top');

        window.addEventListener('scroll', listenWindowScroll)
        btnBackToTop.addEventListener('click', () => {
            window.scroll({
                left: 0,
                top: 0,
                behavior: 'smooth'
            })
        })

        function listenWindowScroll() {
            const scrolled = window.pageYOffset
            const coords = document.documentElement.clientHeight

            if (scrolled > coords) {
                // show the dig from behind the screen
                btnBackToTop.style.bottom = '20px'
            } else {
                // hide the button behind the screen
                btnBackToTop.style.bottom = '-40px'
            }
        }
    }

    /** TOGGLE */

    function listenMenuToggleBtn() {
        const btnToggle = document.querySelector('.js-btn-toggle');
        btnToggle.onclick = () => togglerChange(btnToggle);
    }

    let isHiddenMainMenu = mainMenu.style.display !== 'block'

    function togglerChange(btnToogle) {
        if (isHiddenMainMenu) {
            mainMenu.style.display = 'block';
            //TODO: унести в классы
            btnToogle.style.backgroundImage = 'url(./images/previous.png)';
            btnToogle.style.transform = 'rotate(180deg)';
            isHiddenMainMenu = false;
        } else {
            //TODO: унести в классы
            mainMenu.style.display = 'none';
            btnToogle.style.backgroundImage = 'url(./images/menu.png)';
            btnToogle.style.transform = 'rotate(0deg)';
            isHiddenMainMenu = true;
        }
    }
}())