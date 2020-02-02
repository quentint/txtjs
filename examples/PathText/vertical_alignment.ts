import circle from "../circle-path";

export default function init() {
  let canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  let stage = new createjs.Stage(canvas);
  stage.x = 10;
  stage.scaleX = 2;
  stage.scaleY = 2;

  stage.addChild(
    new txt.PathText({
      x: 500,
      y: 600,
      flipped: false,
      text: "Path Alignment",
      fillColor: "#111",
      font: "lobster",
      start: 2500,
      end: 0,
      align: txt.PathAlign.Center,
      valign: txt.VerticalAlign.Center,
      size: 150,
      tracking: 0,
      rotation: 270,
      path: circle(0, 0, 400),
      debug: true
    })
  );

  stage.addChild(
    new txt.PathText({
      x: 500,
      y: 600,
      flipped: false,
      text: "Victory",
      fillColor: "#111",
      font: "lobster",
      start: 2500,
      align: txt.PathAlign.Center,
      valign: txt.VerticalAlign.Percent,
      valignPercent: 0.001,
      size: 200,
      tracking: 0,
      rotation: 270,
      path: circle(0, 0, 400),
      debug: true
    })
  );

  stage.update();
  return stage;
}
