
const COMPUTED_SCALE = 0.8; //invlerp(900, 2000, document.body.clientWidth);
const PAULIE_ASPECT_RATIO = 1.410256

const PAULIE_WIDTH = lerp(50, 80, COMPUTED_SCALE)
const BORDER_WIDTH = lerp(3, 6, COMPUTED_SCALE)
const FONT_SIZE = lerp(17, 22, COMPUTED_SCALE)
const ICON_SIZE = lerp(40, 50, COMPUTED_SCALE)


$(function ()
{
	var $paulie = $("#Paulie");

	// --------------------------
	// Resize everything!
	// --------------------------

	$('.system.border').css("borderWidth", BORDER_WIDTH);
	$('.system.text').css("fontSize", FONT_SIZE);
	$('.ui.window .content').css('fontSize', FONT_SIZE)
	$('.icon .text').css("fontSize", FONT_SIZE);
	$('.icon').width(ICON_SIZE);
	$('.icon').height(ICON_SIZE);

	$paulie.width(PAULIE_WIDTH)
	$paulie.height(PAULIE_WIDTH * PAULIE_ASPECT_RATIO)


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
	$('img').on('dragstart', function () { return false; }); // no drag
	$('a').on('dragstart', function () { return false; }) // no drag


	// -------------------------
	//  NetSurf Window
	// -------------------------

	var $NetSurf = $('#WindowTemplate').clone();

	$NetSurf.attr("id", "NetSurf");
	$NetSurf.css("right", "70%");
	$NetSurf.height(400);
	$NetSurf.width(350);

	$("#Desktop").append($NetSurf);

	$("#NetSurf").draggable(dragDefaults);
	$("#NetSurf").resizable({ helper: "ui-resizable-helper", minWidth: 200, minHeight: 250, maxHeight: 600, maxWidth: 900 })
	$('#NetSurf .scrollbar-inner').scrollbar();

	$("#WindowTemplate").hide();

	// Content
	let netStack = [];
	let currentPath = "/fire-of-life";

	$.get(currentPath, (data) =>
	{
		$("#NetSurf .content").html(data);
	});

	const renderPage = (currentPath) =>
	{

		var settings = {
			'cache': false,
			// 'dataType': "jsonp",
			// "async": true,
			"crossDomain": true,
			"url": currentPath,
			"method": "GET",
			"headers": {
				"accept": "application/json",
				"Access-Control-Allow-Origin": "*"
			}
		}

		$.ajax(settings).done(function (response)
		{
			console.log(response);

		});

		$.ajax(settings).done((data) => $("#NetSurf .content").html(data));
		$("#NetSurf .webpage-title").text(currentPath)
	}

	$('body').on('click', '.ui.window .content a', function (e)
	{
		e.preventDefault(e);
		netStack.push(currentPath);
		currentPath = $(this).attr('href')
		renderPage(currentPath)
	});

	$('body').on('click', '.ui.window a.back', function (e)
	{
		e.preventDefault(e);
		if (netStack.length > 0) {
			currentPath = netStack.pop();
			renderPage(currentPath)
		}

	});

	// ---

	$paulie.isClicking = false;


	$paulie.setTranslate = function (x, y)
	{
		$(this).css("transform", `translate(${x}px, ${y}px)`)
	}

});

