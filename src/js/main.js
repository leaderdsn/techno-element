(function() {

    const mainMenu = document.querySelector('.js-main-menu');

    window.onload = function() {
        createCards();
        listenDragCard();
        listenMenuToggleBtn();
        listenBackToTopBtn();
        // listenFormCardSubmit();
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
                li.appendChild(createMenu(item.children));
            }
            ul.appendChild(li);
        });
        return ul;
    }

    /** Display the menu */
    function listenMainMenu() {
        mainMenu.onclick = (e) => {
            console.log(e.target)
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

    function togglerChange(btnToggle) {
        if (isHiddenMainMenu) {
            mainMenu.classList.add('show-menu')
            btnToggle.classList.add('show')
            isHiddenMainMenu = false;
        } else {
            mainMenu.classList.remove('show-menu')
            btnToggle.classList.remove('show')
            isHiddenMainMenu = true;
        }
    }
}())