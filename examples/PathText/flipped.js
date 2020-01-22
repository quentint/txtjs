var canvas;
var stage;

function circle(x, y, r) {
  var circle =
    "M " +
    x +
    " " +
    y +
    " " +
    "m " +
    -r +
    ",0 " +
    "a " +
    r +
    "," +
    r +
    " 0 1,0 " +
    r * 2 +
    ",0 " +
    "a " +
    r +
    "," +
    r +
    " 0 1,0 " +
    -r * 2 +
    ",0 Z";
  return circle;
}

function init() {
  canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  stage = new createjs.Stage(canvas);
  stage.x = 10;
  stage.scaleX = stage.scaleY = 2;

  stage.addChild(
    new txt.PathText({
      x: 500,
      y: 500,
      flipped: true,
      text: "Yoda, Jedi Master",
      fillColor: "#111",
      font: "lobster",
      start: 2200,
      end: 310,
      align: txt.PathAlign.Center,
      size: 60,
      tracking: 0,
      rotation: 270,
      path: circle(0, 0, 400),
      debug: true
    })
  );

  stage.addChild(
    new txt.PathText({
      x: 500,
      y: 500,
      flipped: false,
      text: '"Try not. Do or do not. There is no try."',
      fillColor: "#111",
      font: "lobster",
      start: 2300,
      align: txt.PathAlign.Center,
      size: 60,
      tracking: 0,
      rotation: 270,
      path: circle(0, 0, 370),
      debug: true
    })
  );

  stage.update();
}
