




const MP3_FILES = {
    clickDown: "/assets/sounds/click_down.mp3",
    clickUp: "/assets/sounds/click_up.mp3",
}





var app = {
    init: function () {
        console.log('init')
    }
}



$(function () {

    // Set up UI

    $('#Netsurf').resizable({
        helper: "ui-resizable-helper",
        minWidth: 100,
        minHeight: 100,
        maxHeight: 500,
        maxWidth: 500

    }).draggable({
        handle: '.header',
        containment: "body"
    }).css("right", "20%").css("top", "1%").width(250).height(300);

    // ---- QR Window -----

    $("#QuantumRectangle").resizable({
        helper: "ui-resizable-helper",
        minWidth: 200,
        minHeight: 200,
        maxHeight: 200,
        maxWidth: 200

    }).draggable({
        handle: '.header',
        containment: "body"
    }).css("left", "50%").css("bottom", "20%").width(200).height(200);

    // --- Hello Window ---

    $("#SystemHello").resizable({
        helper: "ui-resizable-helper",
        minWidth: 250,
        minHeight: 250,
        maxHeight: 600,
        maxWidth: 900,

    }).draggable({
        handle: '.header',
        containment: "body"
    });

    $("#SystemHello").css("left", "5%");
    $("#SystemHello").css("top", "1%");
    $("#SystemHello").width(300);
    $("#SystemHello").height(300);

    // --- All Windows ---

    $(".ui.window .close").on("click", function () {
        $(this).parent().hide()
    })

    // --- Desktop Icons ---

    $(".icon").draggable();

    $(".icon").on("mouseup",function(){
        $(this).addClass("selected");
    })

    // Audio

    // Sound City

    var clickDown = createSound("click_down.mp3")
    var clickUp = createSound("click_up.mp3")
    var clickBad = createSound("click_bad.mp3")
    var fart = createSound("fart.mp3")
    var wakeUp = createSound("paulie_wake_up.mp3")

    clickDown.volume = 0.3;
    clickUp.volume = 0.3;

    clickDown.load();
    clickUp.load();
    fart.load();
    wakeUp.load();


    // ---- Click Town ----

    const mouseUp = () => {
        clickUp.play()
    };
    const mouseDown = (e) => {
        clickDown.play();
        $(".icon").removeClass("selected");

    };

    $(document).on('mousedown', mouseDown)
    $(document).on('mouseup', mouseUp)

});



// const EDGE = 300
// const OFFSET_X = document.body.clientWidth / 2 //randomInt(EDGE, document.body.clientWidth - EDGE)
// const OFFSET_Y = randomInt(200, 500)



// var screenArea = window.screen.height * window.screen.width;
// var windowArea = window.outerHeight * window.outerWidth;
// var documentArea = document.body.clientHeight * document.body.clientWidth
// var windowAttention = windowArea / screenArea;
// var documentAttention = documentArea / windowArea;

// var paulie_width_min = 40;
// var paulie_width_max = 100;
// var paulieAspectRatio = 1.5833333;
// var paulieWidth, paulieHeight, borderSize, fontSize, iconSize;

// var systemSize = range(900, 2000, 0, 1, document.body.clientWidth)
// paulieWidth = lerp(paulie_width_min, paulie_width_max, systemSize);
// paulieHeight = paulieWidth * paulieAspectRatio
// iconSize = paulieWidth * 0.944;
// borderSize = range(paulie_width_min, paulie_width_max, 2, 5, paulieWidth)
// fontSize = lerp(16, 22, systemSize)


// var playerOS = getOS();

// if (isOSValid()) {
//     $("#Fart").hide()

//     var systemOS = new SystemOS();
//     var paulie = new Paulie("sleeping", OFFSET_X, OFFSET_Y)

//     var $Paulie = paulie.$el;



//     // -----------------------------------



//     // systemOS.showWelcome()
//     // Set System Size based on browser window



//     $Paulie.width(paulieWidth)
//     $Paulie.height(paulieHeight)
//     $('.icon').width(iconSize).height(iconSize).css("borderWidth", Math.round(borderSize));
//     $('.icon-hitbox span').css("fontSize", Math.round(fontSize))




//     $Paulie.css("left", OFFSET_X)
//     $Paulie.css("top", OFFSET_Y)
//     $Paulie.addClass(paulie.state);
//     $("body").addClass(paulie.state)

//     $Paulie.isSleeping = function () { return $(this).hasClass("sleeping"); }
//     $Paulie.isAwake = function () { return $(this).hasClass("awake") }

//     var clickDown = document.getElementById("AudioClickDown");
//     var clickUp = document.getElementById("AudioClickUp");
//     var wakeUp = document.getElementById("AudioWakeUp");

//     // clickDown.load();
//     clickUp.load();
//     wakeUp.load();

//     var clicking = false;
//     var awake = false;
//     var asleep = true;


//     // WAKE UP

//     $("#Paulie").on("mousedown", function (e) {
//         if (asleep) {
//             asleep = false;
//             $(this).addClass("clicking")
//             $("body").removeClass("sleeping")
//             $(this).removeClass("sleeping");
//             $(this).addClass("waking");
//         }

//     });

//     $("#Paulie").on("mouseup", function (e) {

//         if (!asleep && !awake) {
//             awake = true;
//             $("body").addClass("awake")
//             wakeUp.play()
//             $Paulie.removeClass("clicking")
//             $Paulie.addClass("awake")
//             $Paulie.removeClass("sleeping")
//             $Paulie.addClass("jump")
//             $Paulie.addClass("disableClicker")
//             paulie.x = e.clientX - OFFSET_X;
//             paulie.y = e.clientY - OFFSET_Y;
//             paulie.updateTransform();
//             setTimeout(function () { $Paulie.removeClass("jump") }, 500)
//             setTimeout(function () { $Paulie.removeClass("waking") }, 50)


//             paulie.wakeUp()
//         }

//     });



//     // Clicks


//     function onMouseMove(e) {
//         paulie.onMove(e)

//         if ($Paulie.hasClass("waking")) {
//             setTimeout(function () { $Paulie.removeClass("waking") }, 50)
//             // return
//         }
//         if (awake) {
//             console.log('mouse move CLASSES = ', $(this).attr("class"))

//             paulie.x = e.clientX - OFFSET_X;
//             paulie.y = e.clientY - OFFSET_Y;
//             paulie.updateTransform()
//         }
//     }


//     window.addEventListener("mousedown", (e) => {
//         if (awake) {
//             clickDown.play();
//             $Paulie.addClass("clicking")
//             $('.icon-hitbox').removeClass('selected')
//             paulie.updateTransform()
//         }

//     });

//     window.addEventListener("mouseup", (e) => {

//         if (awake) {
//             clickUp.play()
//             $Paulie.removeClass("clicking")
//             skew = "0deg"
//             paulie.updateTransform()
//         }

//     });



//     window.addEventListener("mousemove", onMouseMove);



//     // ---- Desktop Windows ----


//     // Draggable.zIndex = 10;

//     $('.desktop.window .close').click(function () {
//         if (paulie.state !== "sleeping") {
//             $(this).parent().addClass("closed")
//             systemOS.fart.play()
//         }

//     })

// } else {

//     $("body").addClass("off")
//     $(".desktop.window").hide();
//     $(".icon-hitbox").hide();
//     $("#fart").show();

//     var fartSound = document.getElementById("FartSound");
//     fartSound.load()

//     $("#Fart").click(function () {

//         var $this = $(this);

//         setTimeout(function() {
//             fartSound.play()
//             $this.fadeOut(100)
//             $this.delay(7000).fadeIn(800)
//         },500)

//     })
// }