import circle from "../../lib/circle-path";
import createHiDPICanvas from "../../lib/hidpi-canvas";
export default function init() {
  let canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  let stage = new createjs.Stage(canvas);
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
      accessibilityPriority: 0,
      accessibilityText:
        '<h1><a href="http://en.wikipedia.org/wiki/Yoda">Yoda</a>, Jedi Master</h1>',
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
      accessibilityPriority: 0,
      accessibilityText: '<p>"Try not. Do or do not. There is no try."</p>',
      debug: true
    })
  );

  stage.update();
  return stage;
}
