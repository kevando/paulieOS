
// var screenArea = window.screen.height * window.screen.width;
// var windowArea = window.outerHeight * window.outerWidth;
// var documentArea = document.body.clientHeight * document.body.clientWidth
// var windowAttention = windowArea / screenArea;
// var documentAttention = documentArea / windowArea;

// var paulie_width_min = 40;
// var paulie_width_max = 100;
// var paulieAspectRatio = 1.5833333;
// var paulieWidth, paulieHeight, borderSize, fontSize, iconSize;


// $('.icon').width(iconSize).height(iconSize).css("borderWidth", Math.round(borderSize));
// $('.icon-hitbox span').css("fontSize", Math.round(fontSize))

function setScale() {

    $('.icons svg').width(ICON_SIZE)
    $("#Paulie").width(PAULIE_WIDTH)
    $("#Paulie").height(PAULIE_HEIGHT)
    $('.icons').show()

}

const SCALE = range(900, 2000, 0, 1, document.body.clientWidth)


const PAULIE_WIDTH = lerp(40, 100, SCALE);
const PAULIE_HEIGHT = PAULIE_WIDTH * 1.5833333
const ICON_SIZE = PAULIE_WIDTH * 0.944;
// borderSize = range(paulie_width_min, paulie_width_max, 2, 5, paulieWidth)
// fontSize = lerp(16, 22, systemSize)


// $('.icons').hide()

var $div = $("#Paulie");
var paulie = new Paulie($div);



// -----------------------------------

$(document).ready(setScale);




// // WAKE UP

// $("#Paulie").on("mousedown", function (e) {
//     if (asleep) {
//         asleep = false;
//         $(this).addClass("clicking")
//         $("body").removeClass("sleeping")
//         $(this).removeClass("sleeping");
//         $(this).addClass("waking");
//     }

// });

// $("#Paulie").on("mouseup", function (e) {

//     if (!asleep && !awake) {
//         awake = true;
//         $("body").addClass("awake")
//         wakeUp.play()
//         $Paulie.removeClass("clicking")
//         $Paulie.addClass("awake")
//         $Paulie.removeClass("sleeping")
//         $Paulie.addClass("jump")
//         $Paulie.addClass("disableClicker")
//         paulie.x = e.clientX - OFFSET_X;
//         paulie.y = e.clientY - OFFSET_Y;
//         paulie.updateTransform();
//         setTimeout(function () { $Paulie.removeClass("jump") }, 500)
//         setTimeout(function () { $Paulie.removeClass("waking") }, 50)


//         paulie.wakeUp()
//     }

// });



// // Clicks


// function onMouseMove(e) {
//     paulie.onMove(e)

//     if ($Paulie.hasClass("waking")) {
//         setTimeout(function () { $Paulie.removeClass("waking") }, 50)
//         // return
//     }
//     if (awake) {
//         console.log('mouse move CLASSES = ', $(this).attr("class"))

//         paulie.x = e.clientX - OFFSET_X;
//         paulie.y = e.clientY - OFFSET_Y;
//         paulie.updateTransform()
//     }
// }


// window.addEventListener("mousedown", (e) => {
//     if (awake) {
//         clickDown.play();
//         $Paulie.addClass("clicking")
//         $('.icon-hitbox').removeClass('selected')
//         paulie.updateTransform()
//     }

// });

// window.addEventListener("mouseup", (e) => {

//     if (awake) {
//         clickUp.play()
//         $Paulie.removeClass("clicking")
//         skew = "0deg"
//         paulie.updateTransform()
//     }

// });




// // ---- Desktop Windows ----


// // Draggable.zIndex = 10;

// $('.desktop.window .close').click(function () {
//     if (paulie.state !== "sleeping") {
//         $(this).parent().addClass("closed")
//         systemOS.fart.play()
//     }

// })



