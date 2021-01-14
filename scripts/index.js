$(function () {



    // Sound City

    
    var clickBad = createSound("click_bad.mp3")
    var fart = createSound("fart.mp3")
    var wakeUp = createSound("paulie_wake_up.mp3")

    
    fart.load();
    wakeUp.load();


    // ---- Click Town ----

    const mouseUp = () => {
        // clickUp.play()
    };
    const mouseDown = (e) => {
        // clickDown.play();
        $(".icon").removeClass("selected");

    };

    // $(document).on('mousedown', mouseDown)
    // $(document).on('mouseup', mouseUp)

});

