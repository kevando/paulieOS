

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




function initialize()
{

	$('.system.border').css("borderWidth", system.sizes.border);
	$('.system.text').css("fontSize", system.sizes.font);

	$('.ui.window .content').css('fontSize', system.sizes.font)
	$('.icon .text').css("fontSize", system.sizes.font);

	$('.close').css('width', `+=${size - 2}`)
	$('.close').css('height', `+=${size - 2}`)

	$('.icon').width(system.sizes.icon).height(system.sizes.icon)
	
}


$(function ()
{

	initialize();


	// Sound City


	var clickBad = createSound("click_bad.mp3")
	var fart = createSound("fart.mp3")
	var wakeUp = createSound("paulie_wake_up.mp3")


	fart.load();
	wakeUp.load();


	// ---- Click Town ----

	const mouseUp = () =>
	{
		// clickUp.play()
	};
	const mouseDown = (e) =>
	{
		// clickDown.play();
		$(".icon").removeClass("selected");

	};

	// $(document).on('mousedown', mouseDown)
	// $(document).on('mouseup', mouseUp)

	// -------- Draggables ------------



	document.addEventListener("ondrag", function (e)
	{
		console.log("drag doc")

	}, false);

	window.addEventListener("ondrag", function (e)
	{
		console.log("drag wind")

	}, false);



	$("#Desktop").on("click", function (event)
	{
		$(document).trigger("desktopClick", ["Custom", "Event"]);
	});


});

