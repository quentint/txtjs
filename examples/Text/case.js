var canvas;
var stage;

function init() {
  canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  stage = new createjs.Stage(canvas);

  stage.addChild(
    new txt.Text({
      text: "Hello World",
      font: "play",
      characterCase: txt.Case.NORMAL,
      lineHeight: 100,
      width: 800,
      height: 100,
      size: 100,
      x: 10,
      y: 10
    })
  );

  stage.addChild(
    new txt.Text({
      text: "Hello World",
      font: "play",
      characterCase: txt.Case.UPPER,
      lineHeight: 100,
      width: 800,
      height: 100,
      size: 100,
      x: 10,
      y: 120
    })
  );

  stage.addChild(
    new txt.Text({
      text: "Hello World",
      font: "play",
      characterCase: txt.Case.LOWER,
      lineHeight: 100,
      width: 800,
      height: 100,
      size: 100,
      x: 10,
      y: 230
    })
  );

  stage.addChild(
    new txt.Text({
      text: "Hello World",
      font: "play",
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 100,
      width: 800,
      height: 100,
      size: 100,
      x: 10,
      y: 340
    })
  );

  stage.update();
}
