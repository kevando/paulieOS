$(function () {



    $(document).on('dblclick', function() {
        $("body").toggleClass("debug");
    })
});


// const INITIAL_X = document.body.clientWidth / 2;
// const INITIAL_Y = document.body.clientHeight / 2;


// var Paulie = function ($div) {
//     this.$div = $div;
//     this.state = "unknown";
//     this.x = INITIAL_X;
//     this.y = INITIAL_Y;
//     this.clicks = 0;
//     this.distance = 0;
//     this.sleeping = true;
//     this.$div.addClass("sleeping")

//     this.updatePosition = (e) => {
//         this.x = e.clientX;
//         this.y = e.clientY;
//     }
//     this.move = (e) => {
//         this.$div.css("transform", `translate(${this.x}px, ${this.y}px)`)
//     }
//     this.wakeUp = () => {
//         this.$div.removeClass("sleeping");
//         this.$div.addClass("wakingUp");
//         setTimeout(function() {
//             this.$div.removeClass("wakingUp");
//         },600)
        

//         document.addEventListener('mousemove', this.move);
//     }



//     this.mouseEnter = () => {
//         // console.log("mouse enter doc")
//     }
//     this.mouseLeave = () => {
//         // console.log("mouse leavse doc")
//     }
//     this.mouseOver = () => {
//         // console.log("over")
//     }
//     this.mouseOut = () => {
//         // console.log("mouse out")
//     }
//     this.onFocus = () => {
//         // console.log("focus")
//     }
//     this.onBlur = () => {
//         // console.log("blur")
//     }
//     this.onClick = () => {
//         this.clicks++;
//         // this.jump()
//     }
//     this.onMouseUp = () => {
//         this.$div.removeClass("clicking")
//         this.wakeUp()
//     }
//     this.onMouseDown = () => {
//         this.$div.addClass("clicking")
//     }

//     this.onDoubleClick = () => {
//         this.doubleClicks++;
//     }

//     this.$div.on("click",this.updatePosition)


//     $(document).mouseenter(this.mouseEnter);
//     $(document).mouseleave(this.mouseLeave);
//     $(document).mouseover(this.mouseOver);
//     $(document).mouseout(this.mouseOut);
//     $(document).on('mousedown', this.onMouseDown)
//     $(document).on('mouseup', this.onMouseUp)
//     

//     window.addEventListener('blur', this.onBlur);
//     window.addEventListener('focus', this.onFocus);

//     document.addEventListener('mousemove', this.updatePosition);
//     document.addEventListener('click', this.onClick);


//     this.move()

//     // this.getState = () => {
//     //     return this.state;
//     // }
//     // this.wakeUp = () => {
//     //     // this.state = "awake";

//     //     // systemOS.wakeUp()
//     //     // // DRAGGABLERS!

//     //     // Draggable.zIndex = 10;

//     //     // Draggable.create(".window", {
//     //     //     // trigger: $(this).find(".header"),
//     //     //     trigger: ".header",
//     //     //     scrub: true,
//     //     //     activeCursor: "none",
//     //     //     cursor: "none",
//     //     //     bounds: "body",
//     //     //     onDrag: (e) => {
//     //     //         this.x = e.clientX - this.OFFSET_X;
//     //     //         this.y = e.clientY - this.OFFSET_Y;
//     //     //         this.updateTransform()
//     //     //     }
//     //     // });


//     //     // var $el = this.$el;

//     //     // Draggable.create(".icon-hitbox",
//     //     //     {
//     //     //         type: "x,y",
//     //     //         edgeResistance: 0.65,
//     //     //         force3D: true,
//     //     //         bounds: "body",
//     //     //         // inertia: true,

//     //     //         cursor: "none",
//     //     //         activeCursor: "none",

//     //     //         onDrag: (e) => {
//     //     //             this.x = e.clientX - this.OFFSET_X;
//     //     //             this.y = e.clientY - this.OFFSET_Y;
//     //     //             this.updateTransform()
//     //     //         },
//     //     //         onPress: function () {
//     //     //             $el.addClass("dragging")
//     //     //             $('.icon-hitbox').removeClass('selected')
//     //     //             this.target.classList.add("dragging")
//     //     //             this.target.classList.add("selected")
//     //     //         },
//     //     //         onRelease: function () {
//     //     //             $el.removeClass("dragging")
//     //     //             this.target.classList.remove("dragging")
//     //     //         }
//     //     //     });

//     // }


//     // var SystemOS = function () {

//     //     this.newMessageSound = document.getElementById("NewMessageSound");
//     //     this.fart = createSound('/assets/sounds/fart.mp3');


//     //     $("#SimpleWindowTemplate").hide()
//     //     $('.icons').fadeOut(0)

//     //     this.wakeUp = () => {
//     //         $('.icons').delay(500).fadeIn("slow")
//     //     }
//     //     this.addSimpleWindow = () => {

//     //         // $( "#SimpleWindowTemplate" ).clone().add( "<span>Again</span>" ).appendTo( document.body );

//     //     }
//     //     this.showWelcome = props => {

//     //         // Pre-Load Sounds

//     //         var sound = document.createElement('audio');
//     //         sound.controls = 'controls';
//     //         sound.src = '/assets/sounds/new_message.mp3';
//     //         sound.style.display = "none";
//     //         sound.type = 'audio/mpeg';
//     //         document.body.appendChild(sound);

//     //         sound.addEventListener('loadeddata', function () {

//     //             if (sound.readyState >= 2) {
//     //                 sound.play();
//     //             }
//     //             setTimeout(function () {
//     //                 $("#SimpleWindowTemplate").show();
//     //             }, 1500)

//     //         });






//     //     }


//     // }

// }


// // var Paulie = function (initialState, OFFSET_X, OFFSET_Y) {

// //     this.state = initialState || "sleeping";
// //     this.$el = $("#Paulie");


// //     this.OFFSET_X = OFFSET_X
// //     this.OFFSET_Y = OFFSET_Y


// //     this.x = 0;//randomInt(400);
// //     this.y = 0;//randomInt(500);
// //     this.z = 0;
// //     this.p = 0;
// //     this.rot = "1,1,1,0deg";
// //     this.skew = "0deg";

// //     this.distance = 0;
// //     this.currentStoryBeat = 0;


// //     this.updateTransform = () => {
// //         // console.log(this.x)
// //         var transform = "perspective(" + this.p + "px) translate3d(" + this.x + "px," + this.y + "px, 0px) rotate3d(" + this.rot + ")";
// //         this.$el.css("transform", transform)
// //     }
// //     this.onMove = e => {
// //         if (this.state === "awake") {
// //             var delta = Math.abs(e.movementX)
// //             this.distance += delta;
// //         }
// //         if(this.distance > 2500 && this.currentStoryBeat === 0) {
// //             systemOS.showWelcome();
// //             this.currentStoryBeat++;
// //         }
// //     }

// //     this.getState = () => {
// //         return this.state;
// //     }
// //     this.wakeUp = () => {
// //         this.state = "awake";

// //         systemOS.wakeUp()
// //         // DRAGGABLERS!

// //         Draggable.zIndex = 10;

// //         Draggable.create(".window", {
// //             // trigger: $(this).find(".header"),
// //             trigger: ".header",
// //             scrub: true,
// //             activeCursor: "none",
// //             cursor: "none",
// //             bounds: "body",
// //             onDrag: (e) => {
// //                 this.x = e.clientX - this.OFFSET_X;
// //                 this.y = e.clientY - this.OFFSET_Y;
// //                 this.updateTransform()
// //             }
// //         });


// //         var $el = this.$el;

// //         Draggable.create(".icon-hitbox",
// //             {
// //                 type: "x,y",
// //                 edgeResistance: 0.65,
// //                 force3D: true,
// //                 bounds: "body",
// //                 // inertia: true,

// //                 cursor: "none",
// //                 activeCursor: "none",

// //                 onDrag: (e) => {
// //                     this.x = e.clientX - this.OFFSET_X;
// //                     this.y = e.clientY - this.OFFSET_Y;
// //                     this.updateTransform()
// //                 },
// //                 onPress: function () {
// //                     $el.addClass("dragging")
// //                     $('.icon-hitbox').removeClass('selected')
// //                     this.target.classList.add("dragging")
// //                     this.target.classList.add("selected")
// //                 },
// //                 onRelease: function () {
// //                     $el.removeClass("dragging")
// //                     this.target.classList.remove("dragging")
// //                 }
// //             });

// //     }

// // }

