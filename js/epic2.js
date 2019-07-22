var script = document.createElement('script');
var scripts = document.getElementsByTagName('script')[0];
script.src = "js/libopenmpt.js";
scripts.parentNode.insertBefore(script, scripts);

function play() {
  var libopenmpt = {};
  libopenmpt.onRuntimeInitialized = function() {
    var player = new ChiptuneJsPlayer(new ChiptuneJsConfig(-1));
    player.load("images/phantasmagoria.mod", function(buffer) {
      player.play(buffer);
    });
  };
}

play();

particlesJS("particles-js", {
  particles: {
    number: {
      value: 160
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "edge"
    },
    opacity: {
      value: 1,
      random: false
    },
    size: {
      value: 3
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 50,
      direction: "bottom",
      straight: true
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: false
      },
      onclick: {
        enable: false
      }
    },
  }
});
