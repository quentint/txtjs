var canvas;
var stage;

function init() {
  canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  stage = new createjs.Stage(canvas);

  //NOTE - If ligatures are not exported within the font, they will not be swapped in Text
  var text = new txt.Text({
    text: "Chess Onward The big blue file brush Who be dribble flower office",
    font: "lobster",
    tracking: 0,
    lineHeight: 200,
    width: 1800,
    height: 600,
    ligatures: true,
    align: txt.Align.TOP_LEFT,
    size: 200,
    x: 50,
    y: 50,
    debug: true
  });

  stage.addChild(text);

  stage.update();
}
