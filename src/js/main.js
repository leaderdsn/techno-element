import { createCard } from './cards.js';
import { CARDS_DATA, MENU_DATA } from './common.js';
import { listenDragCard } from './move-card.js';



const mainMenu = document.querySelector('.js-main-menu');

window.onload = function() {
    createCards();
    listenDragCard();
    listenMenuToggleBtn();
    listenBackToTopBtn();
    listenMainMenu();

    mainMenu.appendChild(createMenu(MENU_DATA));
}

function createCards() {
    CARDS_DATA.forEach(createCard);
}

/** Creating and filling in menus */
function createMenu(data) {
    const ul = document.createElement('ul');
    ul.classList.add('menu-item');
    data.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('sub-menu-item');
        li.textContent = item.label;
        if (item.children) {
            li.classList.add('nested-sub-menu-item')
            li.appendChild(createMenu(item.children));
        }
        ul.appendChild(li);
    });
    return ul;
}

/** Display the menu */
function listenMainMenu() {
    mainMenu.onclick = (e) => {
        if (e.target === mainMenu) return;
        let itemMenu = e.target.querySelector('.menu-item');
        if (!itemMenu) return;

        itemMenu.hidden = !itemMenu.hidden;

        if (itemMenu.hidden) {
            e.target.classList.add('collapsed');
        } else {
            e.target.classList.remove('collapsed');
        }
    }
}


function listenBackToTopBtn() {
    const btnBackToTop = document.querySelector('.js-btn-back-to-top');


    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset
        const coords = document.documentElement.clientHeight

        if (scrolled > coords) {
            // show the dig from behind the screen
            console.log(heightMC)

            btnBackToTop.style.bottom = '20px'
        } else {
            // hide the button behind the screen
            btnBackToTop.style.bottom = '-40px'
        }
    })

    btnBackToTop.addEventListener('click', () => {
        window.scroll({
            left: 0,
            top: 0,
            behavior: 'smooth'
        })
    })
}

/** TOGGLE */
function listenMenuToggleBtn() {
    const btnToggle = document.querySelector('.js-btn-toggle')

    btnToggle.addEventListener('click', () => {
        const isHiddenMainMenu = mainMenu.classList.contains('hidden')

        if (isHiddenMainMenu) {
            mainMenu.classList.remove('hidden')
            btnToggle.classList.add('btn-toggle-expanded')
        } else {
            mainMenu.classList.add('hidden')
            btnToggle.classList.remove('btn-toggle-expanded')
        }
    })
}


let heightMC = document.querySelector('.main-container').style.height
if (heightMC > heightMC.maxHeight) {
    console.log(heightMC)
}