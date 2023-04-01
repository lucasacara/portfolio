var DRAG_ELEMENTS = document.querySelectorAll('.carta')
var CONTAINER = document.querySelector('.container') //@TODO: make container (stack) draggie

let highestIndex = 1
let draggies = []
let dropElem = null
let isDragging = false

DRAG_ELEMENTS.forEach(dragElem => {
    const DRAGGIE = new Draggabilly(dragElem, {
        containment: CONTAINER
    })

    draggies.push(DRAGGIE);

    DRAGGIE.on('dragStart', event => {
        vArrastando = true

        dragElem.style.zIndex = highestIndex
        dragElem.classList.add('dragging')
        CONTAINER.classList.add('dragging')
        isDragging = true
        highestIndex ++

    })

    DRAGGIE.on('dragEnd', event => {
        dragElem.classList.remove('dragging')
        CONTAINER.classList.remove('dragging')
        isDragging = false

        /* let randomAngle = -10 + (Math.random() * 30);
        Object.assign(dragElem.style, {
            transform: `rotate(${randomAngle}deg)`
        }) */
        
    })

})

