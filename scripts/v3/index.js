const EDGE = 300
const OFFSET_X = document.body.clientWidth / 2 //randomInt(EDGE, document.body.clientWidth - EDGE)
const OFFSET_Y = randomInt(200, 500)



var screenArea = window.screen.height * window.screen.width;
var windowArea = window.outerHeight * window.outerWidth;
var documentArea = document.body.clientHeight * document.body.clientWidth
var windowAttention = windowArea / screenArea;
var documentAttention = documentArea / windowArea;

var paulie_width_min = 40;
var paulie_width_max = 100;
var paulieAspectRatio = 1.5833333;
var paulieWidth, paulieHeight, borderSize, fontSize, iconSize;

var systemSize = range(900, 2000, 0, 1, document.body.clientWidth)
paulieWidth = lerp(paulie_width_min, paulie_width_max, systemSize);
paulieHeight = paulieWidth * paulieAspectRatio
iconSize = paulieWidth * 0.944;
borderSize = range(paulie_width_min, paulie_width_max, 2, 5, paulieWidth)
fontSize = lerp(16, 22, systemSize)


var playerOS = getOS();

if (isOSValid()) {
    $("#Fart").hide()

    var systemOS = new SystemOS();
    var paulie = new Paulie("sleeping", OFFSET_X, OFFSET_Y)

    var $Paulie = paulie.$el;



    // -----------------------------------



    // systemOS.showWelcome()
    // Set System Size based on browser window



    $Paulie.width(paulieWidth)
    $Paulie.height(paulieHeight)
    $('.icon').width(iconSize).height(iconSize).css("borderWidth", Math.round(borderSize));
    $('.icon-hitbox span').css("fontSize", Math.round(fontSize))




    $Paulie.css("left", OFFSET_X)
    $Paulie.css("top", OFFSET_Y)
    $Paulie.addClass(paulie.state);
    $("body").addClass(paulie.state)

    $Paulie.isSleeping = function () { return $(this).hasClass("sleeping"); }
    $Paulie.isAwake = function () { return $(this).hasClass("awake") }

    var clickDown = document.getElementById("AudioClickDown");
    var clickUp = document.getElementById("AudioClickUp");
    var wakeUp = document.getElementById("AudioWakeUp");

    // clickDown.load();
    clickUp.load();
    wakeUp.load();

    var clicking = false;
    var awake = false;
    var asleep = true;


    // WAKE UP

    $("#Paulie").on("mousedown", function (e) {
        if (asleep) {
            asleep = false;
            $(this).addClass("clicking")
            $("body").removeClass("sleeping")
            $(this).removeClass("sleeping");
            $(this).addClass("waking");
        }

    });

    $("#Paulie").on("mouseup", function (e) {

        if (!asleep && !awake) {
            awake = true;
            $("body").addClass("awake")
            wakeUp.play()
            $Paulie.removeClass("clicking")
            $Paulie.addClass("awake")
            $Paulie.removeClass("sleeping")
            $Paulie.addClass("jump")
            $Paulie.addClass("disableClicker")
            paulie.x = e.clientX - OFFSET_X;
            paulie.y = e.clientY - OFFSET_Y;
            paulie.updateTransform();
            setTimeout(function () { $Paulie.removeClass("jump") }, 500)
            setTimeout(function () { $Paulie.removeClass("waking") }, 50)


            paulie.wakeUp()
        }

    });



    // Clicks


    function onMouseMove(e) {
        paulie.onMove(e)

        if ($Paulie.hasClass("waking")) {
            setTimeout(function () { $Paulie.removeClass("waking") }, 50)
            // return
        }
        if (awake) {
            console.log('mouse move CLASSES = ', $(this).attr("class"))

            paulie.x = e.clientX - OFFSET_X;
            paulie.y = e.clientY - OFFSET_Y;
            paulie.updateTransform()
        }
    }


    window.addEventListener("mousedown", (e) => {
        if (awake) {
            clickDown.play();
            $Paulie.addClass("clicking")
            $('.icon-hitbox').removeClass('selected')
            paulie.updateTransform()
        }

    });

    window.addEventListener("mouseup", (e) => {

        if (awake) {
            clickUp.play()
            $Paulie.removeClass("clicking")
            skew = "0deg"
            paulie.updateTransform()
        }

    });



    window.addEventListener("mousemove", onMouseMove);



    // ---- Desktop Windows ----


    // Draggable.zIndex = 10;

    $('.desktop.window .close').click(function () {
        if (paulie.state !== "sleeping") {
            $(this).parent().addClass("closed")
            systemOS.fart.play()
        }

    })

} else {

    $("body").addClass("off")
    $(".desktop.window").hide();
    $(".icon-hitbox").hide();
    $("#fart").show();

    var fartSound = document.getElementById("FartSound");
    fartSound.load()

    $("#Fart").click(function () {

        var $this = $(this);

        setTimeout(function() {
            fartSound.play()
            $this.fadeOut(100)
            $this.delay(7000).fadeIn(800)
        },500)
        
    })
}
