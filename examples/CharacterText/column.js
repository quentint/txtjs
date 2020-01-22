var canvas;
var stage;

function init() {
  canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  stage = new createjs.Stage(canvas);

  stage.addChild(
    new txt.CharacterText({
      text: "7\r\n8\n7\r3\r2",
      font: "tinos",
      align: txt.Align.MIDDLE_CENTER,
      lineHeight: 100,
      width: 150,
      height: 1000,
      size: 100,
      debug: true,
      x: 10,
      y: 10
    })
  );

  stage.update();
}
