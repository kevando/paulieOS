
const PAULIE_ASPECT_RATIO = 1.410256
const PAULIE_WIDTH_MIN = 40; // SCALE = 0
const PAULIE_WIDTH_MAX = 70; // SCALE = 1

const COMPUTED_SCALE = invlerp(900, 2000, document.body.clientWidth);

const PAULIE_WIDTH = lerp(PAULIE_WIDTH_MIN, PAULIE_WIDTH_MAX, COMPUTED_SCALE)
const PAULIE_HEIGHT = PAULIE_WIDTH * PAULIE_ASPECT_RATIO;



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


const BORDER_WIDTH = 3;//range(min, max, 2, 6, size)



$(function ()
{
	var $paulie = $("#Paulie");

	// --------------------------
	// Resize everything!
	// --------------------------

	$('.system.border').css("borderWidth", BORDER_WIDTH);
	$('.system.text').css("fontSize", system.sizes.font);
	$('.ui.window .content').css('fontSize', system.sizes.font)
	$('.icon .text').css("fontSize", system.sizes.font);
	$('.icon').width(system.sizes.icon).height(system.sizes.icon)

	$paulie.width(PAULIE_WIDTH)
	$paulie.height(PAULIE_HEIGHT)


	// --------------------------
	// Global Click Functions
	// --------------------------

	const mousemove = (e) =>
	{
		$paulie.setTranslate(e.pageX, e.pageY)
	};
	const mouseUp = () =>
	{
		clickUpSound.play()
		$paulie.isClicking = false;
		$paulie.removeClass("clicking");
	};
	const mouseDown = (e) =>
	{
		clickDownSound.play();
		$paulie.isClicking = true;
		$paulie.addClass("clicking");
	};

	// --------------------------
	// Click Events
	// --------------------------

	$(document).on('mousedown', function (e) { if (e.which === 1) mouseDown(e); })
	$(document).on('mouseup', function (e) { if (e.which === 1) mouseUp(e); })
	$(document).on('mousemove', mousemove);
	$('.scroll-bar').on('mousedown', function (e) { if (e.which === 1) mouseDown(e); })


	// --------------------------


	$paulie.isClicking = false;


	$paulie.setTranslate = function (x, y)
	{
		$(this).css("transform", `translate(${x}px, ${y}px)`)
	}

});

