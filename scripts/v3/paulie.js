
var Paulie = function (initialState, OFFSET_X, OFFSET_Y) {

    this.state = initialState || "sleeping";
    this.$el = $("#Paulie");


    this.OFFSET_X = OFFSET_X
    this.OFFSET_Y = OFFSET_Y


    this.x = 0;//randomInt(400);
    this.y = 0;//randomInt(500);
    this.z = 0;
    this.p = 0;
    this.rot = "1,1,1,0deg";
    this.skew = "0deg";

    this.distance = 0;
    this.currentStoryBeat = 0;


    this.updateTransform = () => {
        // console.log(this.x)
        var transform = "perspective(" + this.p + "px) translate3d(" + this.x + "px," + this.y + "px, 0px) rotate3d(" + this.rot + ")";
        this.$el.css("transform", transform)
    }
    this.onMove = e => {
        if (this.state === "awake") {
            var delta = Math.abs(e.movementX)
            this.distance += delta;
        }
        if(this.distance > 2500 && this.currentStoryBeat === 0) {
            systemOS.showWelcome();
            this.currentStoryBeat++;
        }
    }

    this.getState = () => {
        return this.state;
    }
    this.wakeUp = () => {
        this.state = "awake";

        systemOS.wakeUp()
        // DRAGGABLERS!

        Draggable.zIndex = 10;

        Draggable.create(".window", {
            // trigger: $(this).find(".header"),
            trigger: ".header",
            scrub: true,
            activeCursor: "none",
            cursor: "none",
            bounds: "body",
            onDrag: (e) => {
                this.x = e.clientX - this.OFFSET_X;
                this.y = e.clientY - this.OFFSET_Y;
                this.updateTransform()
            }
        });


        var $el = this.$el;

        Draggable.create(".icon-hitbox",
            {
                type: "x,y",
                edgeResistance: 0.65,
                force3D: true,
                bounds: "body",
                // inertia: true,

                cursor: "none",
                activeCursor: "none",

                onDrag: (e) => {
                    this.x = e.clientX - this.OFFSET_X;
                    this.y = e.clientY - this.OFFSET_Y;
                    this.updateTransform()
                },
                onPress: function () {
                    $el.addClass("dragging")
                    $('.icon-hitbox').removeClass('selected')
                    this.target.classList.add("dragging")
                    this.target.classList.add("selected")
                },
                onRelease: function () {
                    $el.removeClass("dragging")
                    this.target.classList.remove("dragging")
                }
            });

    }

}

