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

    // -------- Draggables ------------


    // Set up UI

    const defaultWindowProps = {
        helper: "ui-resizable-helper",
        minWidth: 250,
        minHeight: 200,
        maxHeight: 200,
        maxWidth: 250
    }

    const draggableProps = {
        handle: '.header',
        containment: "body",
        cursor: "none"
    }

    $('#Netsurf').resizable({
        ...defaultWindowProps,
        minWidth: 100,
        minHeight: 100,
        maxHeight: 500,
        maxWidth: 500

    }).draggable(draggableProps).css("right", "20%").css("top", "1%").width(250).height(300);

    // ---- QR Window -----

    $("#QuantumRectangle").draggable(draggableProps).css("left", "70%").css("bottom", "20%").width(250).height(250);

    // --- Hello Window ---

    $("#SystemHello").resizable({
        ...defaultWindowProps,
        minWidth: 250,
        minHeight: 250,
        maxHeight: 600,
        maxWidth: 900,

    }).draggable(draggableProps);

    $("#SystemHello").css("left", "5%").css("top", "1%");
    $("#SystemHello").width(300).height(300);

    // --- All Windows ---

    $(".ui.window .close").on("click", function () {
        $(this).parent().hide()
    });


    $(".ui.window .ui-resizable-se").hover(function () {
        $(this).parent().toggleClass("previewResize")

    });


});

