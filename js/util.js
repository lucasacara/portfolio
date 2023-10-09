function somHoverCab() {
    var som = new Audio('../sound/hover.mp3');
    var promise = som.play();


    if (promise !== undefined) {
        promise.then(_ => {
            // Autoplay started!
        }).catch(error => {
            // Autoplay was prevented.
        });
    }
}