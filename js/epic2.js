var text = document.getElementById("introText");
var style = document.createElement("style");
var body = document.getElementsByTagName("body")[0];
var seconds = 0;
text.childNodes.forEach(function(value, index) {
  seconds = parseFloat(seconds + 0.1).toFixed(1);
  style.innerHTML = style.innerHTML + "h1 span:nth-child(" + index + ") { animation-delay: " + seconds + "s; }";
});

body.appendChild(style);

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
