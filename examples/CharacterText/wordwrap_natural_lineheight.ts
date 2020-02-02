var canvas;
var stage;

export default function init() {
  canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  stage = new createjs.Stage(canvas);

  var text = new txt.CharacterText({
    text: "123 444 555\n6",
    font: "lato",
    align: 4,
    tracking: 0,
    lineHeight: 38.4,
    ligatures: false,
    width: 123.86006745195687,
    height: 146.61010452961662,
    size: 32,
    debug: true,
    x: 10,
    y: 10
  });
  text.scaleX = text.scaleY = 10;

  stage.addChild(text);

  stage.update();
}
