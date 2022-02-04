'use strict';
let summary = document.querySelectorAll('summary');

summary.forEach(item => {
    item.addEventListener('click', (e) => {
        let clickedItem = e.target.closest('details');
        let arrow = clickedItem.querySelector('svg');
        let text = clickedItem.querySelector('summary');

        let clickedItemActive = clickedItem.attributes; // touching details element NamedNodeMap
        let length = clickedItemActive.length;  // length of details NamedNodeMap

        // condition when length == 0(details attribude open="") or when length == 1(details attribude open="")
        if(length == 0) {
            text.style.fontWeight = `700`;
            arrow.style.transform = `rotate(180deg)`;
        } else {
            text.style.fontWeight = `500`;
            arrow.style.transform = `rotate(0deg)`;
        }
    })
});