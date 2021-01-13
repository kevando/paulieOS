
var SystemOS = function () {

    this.newMessageSound = document.getElementById("NewMessageSound");
    this.fart = createSound('/assets/sounds/fart.mp3');


    $("#SimpleWindowTemplate").hide()
    $('.icons').fadeOut(0)

    this.wakeUp = () => {
        $('.icons').delay(500).fadeIn("slow")
    }
    this.addSimpleWindow = () => {

        // $( "#SimpleWindowTemplate" ).clone().add( "<span>Again</span>" ).appendTo( document.body );

    }
    this.showWelcome = props => {

        // Pre-Load Sounds

        var sound = document.createElement('audio');
        sound.controls = 'controls';
        sound.src = '/assets/sounds/new_message.mp3';
        sound.style.display = "none";
        sound.type = 'audio/mpeg';
        document.body.appendChild(sound);

        sound.addEventListener('loadeddata', function () {

            if (sound.readyState >= 2) {
                sound.play();
            }
            setTimeout(function () {
                $("#SimpleWindowTemplate").show();
            }, 1500)

        });






    }


}

