'use strict';
const items = [...document.querySelectorAll('summary')];

const addListeners = (array, callback) => {
    array.forEach(item => {
        item.addEventListener('click', (e) => {
            callback(e);
        })
    })
};

const handleClick = (e) => {
    let clickedItem = e.target.closest('details');
    let arrow = clickedItem.querySelector('svg');
    let text = clickedItem.querySelector('summary');

    let clickedItemActive = clickedItem.attributes; // touching details element NamedNodeMap

    const showItem = (arrow, text) => {
        text.style.fontWeight = `700`;
        arrow.style.transform = `rotate(180deg)`;
    }

    const hideItem = (arrow, text) => {
        text.style.fontWeight = `500`;
        arrow.style.transform = `rotate(0deg)`;
    }

    // condition when length == 0(details attribude open="") or when length == 1(details attribude open="")
    if (clickedItemActive.length == 0) {
        showItem(arrow, text)
    } else {
        hideItem(arrow, text)
    }
};

addListeners(items, handleClick)