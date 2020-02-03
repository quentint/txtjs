import createHiDPICanvas from "../../lib/hidpi-canvas";
export default function init() {
  let canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  let stage = new createjs.Stage(canvas);

  var text = new txt.Text({
    text: "The fox jumped over the log.",
    font: "raleway",
    align: txt.Align.TOP_RIGHT,
    tracking: -4,
    character: {
      click: function(event) {
        console.log("click");
      }
    },
    lineHeight: 120,
    width: 600,
    height: 360,
    size: 120,
    x: 10,
    y: 10
  });

  stage.addChild(text);

  stage.update();
  return stage;
}
