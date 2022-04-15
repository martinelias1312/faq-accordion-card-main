'use strict';
const allDetails = [...document.querySelectorAll('details')];
const allSummary = [...document.querySelectorAll('summary')];
const allSvg = [...document.querySelectorAll('svg')];

const addListeners = (array, callback) => {
    array.forEach(item => {
        item.addEventListener('click', (e) => {
            callback(e);
        })
    })
};

const handleClick = (e) => {
    // clicked selectors
    let clickedItem = e.target.closest('details');
    let arrow = clickedItem.querySelector('svg');
    let text = clickedItem.querySelector('summary');
    
    const showItem = (arrow, text) => {
        text.style.fontWeight = `700`;
        arrow.style.transform = `rotate(180deg)`;
    }

    const hideItem = (arrow, text) => {
        text.style.fontWeight = `500`;
        arrow.style.transform = `rotate(0deg)`;
    }

    const closeOthers = (details, summary, svg) => {
        details.forEach(item => item.open = false);
        summary.forEach(item => item.style.fontWeight = `500`);
        svg.forEach(item => item.style.transform = `rotate(0deg)`);
    }

    // condition when clicked item is closed then open it
    if (clickedItem.open == false) {
        closeOthers(allDetails, allSummary, allSvg);
        showItem(arrow, text);
    } else {
        hideItem(arrow, text);
    }
};

addListeners(allSummary, handleClick)