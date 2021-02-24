const mainMenu = document.querySelector('.js-main-menu');

let isHiddenMainMenu = mainMenu.style.display !== 'block'

export function togglerChange(btnToggle) {
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