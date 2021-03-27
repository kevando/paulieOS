const COMPUTED_SCALE = invlerp(900, 2000, document.body.clientWidth);
const ASPECT_RATIO = 1.410256
const WIDTH_MIN = 40; // SCALE = 0
const WIDTH_MAX = 70; // SCALE = 1
// const WIDTH = lerp(WIDTH_MIN, WIDTH_MAX, COMPUTED_SCALE)
// const HEIGHT = WIDTH * ASPECT_RATIO;

const HEIGHT = 200;
const WIDTH = 126;
const BODY = "/assets/paulie/body-smirk.svg";
const SHADOW = "/assets/paulie/shadow.svg";

const Sounds = {
	down: document.getElementById("ClickDownSound"),
	up: document.getElementById("ClickUpSound"),
	fart: document.getElementById("FartSound"),
}

Sounds.down.load();
Sounds.up.load();

// ============================================ 
//					Paulie
// ============================================

let $paulie = $("<div id='Paulie'>");

$paulie.width(WIDTH).height(HEIGHT)
$paulie.isClicking = false;
$paulie.append($("<img>").addClass("body").attr("src", BODY));
$paulie.append($("<img>").addClass("shadow").attr("src", SHADOW));

$paulie.prependTo($("body"));
$paulie.playSound = function (noise, volume = 0.2) {
	Sounds[noise].volume = volume;
	Sounds[noise].play()
}
$paulie.setTranslate = function (x, y) {
	$(this).css("transform", `translate(${x}px, ${y}px)`)
}

const mousemove = (e) => {
	$paulie.setTranslate(e.pageX, e.pageY)
};
const mouseUp = e => {
	if (e.which !== 1) return; // only handle left click
	$paulie.playSound("up")
	$paulie.isClicking = false;
	$paulie.removeClass("clicking");
};
const mouseDown = e => {
	if (e.which !== 1) return
	$paulie.playSound("down")
	$paulie.isClicking = true;
	$paulie.addClass("clicking")
};
const stopEvent = e => {
	a.preventDefault()
	return false;
};

// ======================================================================================== 
//										Windows
// ========================================================================================

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
makeWindowDynamic("paint", 400, 500, 40, 30, 210, 210)
makeWindowDynamic("niftydex", 300, 400, 10, 10, 800, 900)

// ======================================================================================== 
//										Icons
// ========================================================================================

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

$(".icon").on("mousedown",function() {
	$(this).addClass("pressing");
	$(this).toggleClass("pressed");
})
$(".icon").on("mouseup",function() {
	$(this).removeClass("pressing");
})

let repeatFart;
// const $fart_gif = makeIcon("fart.gif", 10, 60);
// $fart_gif.on("dblclick", function () {
// 	$(".fart.window").show();
// 	repeatFart = setInterval(function () { Sounds.fart.play() }, 960);
// })
// $(".fart.window .close").on("click", function () { clearInterval(repeatFart) })
// $(".desktop.icon").draggable();

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
let netStack = [];

$('body').on('click', '.ui.window.netsurf .content a', function (e) {
	
	e.preventDefault(e);
	var destination = $(this).attr('href');
	console.log(destination)
	netStack.push(destination);
	// $("#NetSurf button").attr('disabled', false);
	var $content = $(".netsurf .content");
	$.get(destination, (data) => $content.html(data));
});

$('.netsurf button').on('click', function (e) {
	e.preventDefault(e);
	var destination = netStack.shift();
	console.log(destination)
	var $content = $("#NetSurf .content");
	$.get(destination, (data) => {
		console.log(data)
		$content.html(data)
		// $content.html("<h1>gart</h1>")
	});
});

