var DRAG_ELEMENTS = document.querySelectorAll('.carta');
var CONTAINER = document.querySelector('.container');

let highestIndex = 1;
let draggies = [];
let dropElem = null;
let isDragging = false;

DRAG_ELEMENTS.forEach(dragElem => {
    const DRAGGIE = new Draggabilly(dragElem, {
        containment: CONTAINER,
    });

    draggies.push(DRAGGIE);

    DRAGGIE.on('dragStart', event => {
        vArrastando = true

        dragElem.style.zIndex = highestIndex
        dragElem.classList.add('dragging')
        CONTAINER.classList.add('dragging')
        isDragging = true
        highestIndex ++

        somArrastarCarta();
    });

    DRAGGIE.on('dragEnd', event => {
        dragElem.classList.remove('dragging');
        CONTAINER.classList.remove('dragging');
        isDragging = false;

        let randomAngle = -10 + (Math.random() * 30);
        girarCarta(randomAngle, dragElem);
    });

});

function randomMinMax(min, max) {
    return Math.random() * (max - min) + min;
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function girarCarta(angulo, elem) {
    if (angulo >= 0) {
        for(let x=1; x <= angulo; x++) {
            elem.style.transform = "rotate("+x+"deg)";
            await delay(10);
        }   
    } else {
        for(let x=0; x >= angulo; x--) {
            elem.style.transform = "rotate("+x+"deg)";
            await delay(10);
        }
    }
}

function somArrastarCarta() {
    var numAudio = Math.round(randomMinMax(1, 10))

    new Audio('sound/sobre-mim/papel-'+numAudio+'.mp3').play();
}