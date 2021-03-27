
const LEFT_CLICK = 1;

const COMPUTED_SCALE = invlerp(900, 2000, document.body.clientWidth);

const PAULIE_ASPECT_RATIO = 1.410256
const PAULIE_WIDTH_MIN = 40; // SCALE = 0
const PAULIE_WIDTH_MAX = 70; // SCALE = 1
const PAULIE_WIDTH = lerp(PAULIE_WIDTH_MIN, PAULIE_WIDTH_MAX, COMPUTED_SCALE)
const PAULIE_HEIGHT = PAULIE_WIDTH * PAULIE_ASPECT_RATIO;

const BODY = "/assets/paulie/body-smirk.svg";
const SHADOW = "/assets/paulie/shadow.svg";

const min = 2;
const max = 6;
const size = 4;

var system = {

	// scale: invlerp(2, 5,),
	sizes: {
		border: range(min, max, 2, 6, size),
		font: range(min, max, 12, 22, size),
		icon: 40
	}

}
let netStack = [];

const BORDER_WIDTH = 3;//range(min, max, 2, 6, size)



// ----- Load Sounds from Audio

const Sounds = {
	down: document.getElementById("ClickDownSound"),
	up: document.getElementById("ClickUpSound"),
	fart: document.getElementById("FartSound"),
}

Sounds.down.load();
Sounds.up.load();


// Dynamic Sizing
$('.system.border').css("borderWidth", BORDER_WIDTH);
$('.system.text').css("fontSize", system.sizes.font);
$('.ui.window .content').css('fontSize', system.sizes.font)
$('.icon .text').css("fontSize", system.sizes.font);
$('.icon').width(system.sizes.icon).height(system.sizes.icon);

// ---------------

let $paulie = $("<div>").attr("id", "Paulie");

$paulie.append($("<img>").addClass("body").attr("src", BODY));
$paulie.append($("<img>").addClass("shadow").attr("src", SHADOW));
$paulie.width(PAULIE_WIDTH).height(PAULIE_HEIGHT)
$paulie.prependTo($("body"));

$paulie.playSound = function (noise, volume = 0.2) {
	Sounds[noise].volume = volume;
	Sounds[noise].play()
}
$paulie.isClicking = false;




$paulie.setTranslate = function (x, y) {
	$(this).css("transform", `translate(${x}px, ${y}px)`)
}

const mousemove = (e) => {
	$paulie.setTranslate(e.pageX, e.pageY)
};
const mouseUp = e => {
	if (e.which !== LEFT_CLICK) return
	$paulie.playSound("up")
	$paulie.isClicking = false;
	$paulie.removeClass("clicking");
};
const mouseDown = e => {
	if (e.which !== LEFT_CLICK) return
	$paulie.playSound("down")
	$paulie.isClicking = true;
	$paulie.addClass("clicking")
};
const stopEvent = e => {
	a.preventDefault()
	return false;
};

// ----- Windows -----

const makeWindowDynamic = (className, w, h, top, left, tallest, thinnest) => {
	const props = { helper: "ui-resizable-helper", minWidth: w, minHeight: h, maxHeight: tallest || h, maxWidth: thinnest || w }
	$(".window." + className)
		.resizable(props)
		.height(h).width(w)
		.css("top", top + "%")
		.css("left", left + "%")
		.hide()
}
let currentZ = 13;
function putWindowOnTop() {
	$(this).parent().css("zIndex", currentZ++);
}

makeWindowDynamic("fart", 330, 290, 30, 30, 800, 900)
makeWindowDynamic("netsurf", 300, 400, 20, 70, 800, 900)
makeWindowDynamic("paint", 200, 200, 70, 30, 210, 210)
makeWindowDynamic("niftydex", 300, 400, 10, 10, 800, 900)

// ----- Desktop Icons ------

const makeIcon = (name, left = 0, top = 0) => {
	const $span = $("<span>").addClass("text").text(name);
	const $icon = $("<div>").addClass("icon system-border system-icon empty desktop");

	$icon.append($span);
	$icon.css({ left: `${left}%`, top: `${top}%` })
	$icon.prependTo("#Desktop")
	return $icon
}
function handleIconHighlight(e) {
	if (!$(e.target).hasClass('ui') && !$(e.target).parent().hasClass('ui')) {
		$('.icon').removeClass("selected");
	}
	if ($(e.target).hasClass('icon')) {
		$(e.target).addClass('selected')
	}
}

let repeatFart;
const $fart_gif = makeIcon("fart.gif", 10, 60);
$fart_gif.on("dblclick", function () {
	$(".fart.window").show();
	repeatFart = setInterval(function () { Sounds.fart.play() }, 960);
})
$(".fart.window .close").on("click", function () { clearInterval(repeatFart) })
$(".desktop.icon").draggable();

// ----- Navbar Icons ------

$(".niftydex.icon").on("click", function () { $(".niftydex.window").show() })
$(".netsurf.icon").on("click", function () { $(".netsurf.window").show() })
$(".paint.icon").on("click", function () { $(".paint.window").show() })

$(document).on('mousedown', mouseDown)
$(document).on('mouseup', mouseUp)
$(document).on('mousemove', mousemove);
$(document).on('contextmenu', stopEvent); // no right clicking
$('.scroll-bar').on('mousedown', function (e) { if (e.which === 1) mouseDown(e); })
$('img').on('dragstart', function () { return false; }); // no drag
$('a').on('dragstart', function () { return false; }) // no drag
$("#Desktop").on('mousedown', handleIconHighlight);
$('.ui.header').on('mousedown', putWindowOnTop)

// =========================
//        Desktop  
// =========================






$(".ui.window").draggable({ handle: '.header', containment: "body", cursor: "none" });
$('.ui.window .scrollbar-inner').scrollbar();

$('.ui.window .close').on('click', function () {
	$(this).parent().parent().hide()
})


// $('body').on('click', '.ui.window .content a', function (e) {
// 	e.preventDefault(e);
// 	var destination = $(this).attr('href');
// 	console.log(destination)
// 	netStack.push(destination);
// 	$("#NetSurf button").attr('disabled', false);
// 	var $content = $("#NetSurf .content");
// 	$.get(destination, (data) => $content.html(data));
// });

// $('#NetSurf button').on('click', function (e) {
// 	e.preventDefault(e);
// 	var destination = netStack.shift();
// 	console.log(destination)
// 	var $content = $("#NetSurf .content");
// 	$.get(destination, (data) => {
// 		console.log(data)
// 		$content.html(data)
// 		// $content.html("<h1>gart</h1>")
// 	});
// });

