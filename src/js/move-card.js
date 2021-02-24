/** Moving the product card */
export function listenDragCard() {
    let droppables = document.querySelectorAll('.droppable');
    let cards = document.querySelectorAll('.card');
    let selectedCard = null;
    let fromDroppable = null;

    for (let card of cards) {
        card.ondragstart = function() {
            dragStart(this);
        }
        card.ondragend = function() {
            dragEnd(this);
        }
    }

    for (let droppable of droppables) {
        droppable.ondragover = function(e) {
            dragOver(e);
        }
        droppable.ondragenter = function(e) {
            dragEnter(e, this);
        }
        droppable.ondragleave = function() {
            dragLeave(this);
        }
        droppable.ondrop = function() {
            dragDrop(this);
        }
    }

    function dragStart(card) {
        fromDroppable = card.parentNode;
        fromDroppable.classList.add('from-to')
        selectedCard = card
        card.classList.add('taken');
        setTimeout(() => (card.classList.replace('taken', 'ghostly'), 0));
    }

    function dragEnd(card) {
        card.classList.remove('ghostly');
        fromDroppable.classList.remove('from-to');
        fromDroppable.classList.add('default');
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e, toDroppable) {
        e.preventDefault();
        toDroppable.classList.remove('default');
        toDroppable.classList.add('hovered');
        fromDroppable.classList.remove('hovered');
        toDroppable.firstChild.classList.add('hidden');
    }

    function dragLeave(toDroppable) {
        toDroppable.classList.remove('hovered');
        toDroppable.firstChild.classList.remove('hidden');
    }

    function dragDrop(toDroppable) {
        toDroppable.firstChild.classList.remove('hidden');
        fromDroppable.append(toDroppable.firstChild);
        fromDroppable.classList.remove('from-to');
        fromDroppable.classList.add('default');

        if (toDroppable.firstChild) {
            toDroppable.removeChild(toDroppable.firstChild)
        }

        toDroppable.append(selectedCard)
        toDroppable.classList.remove('hovered')
    }
}