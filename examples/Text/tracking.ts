import createHiDPICanvas from "../../lib/hidpi-canvas";
export default function init() {
  let canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  let stage = new createjs.Stage(canvas);

  stage.addChild(
    new txt.Text({
      text: "Tracking!          -100",
      font: "librebaskerville",
      lineHeight: 300,
      width: 1900,
      height: 300,
      tracking: -100,
      size: 200,
      x: 10,
      y: 10
    })
  );

  stage.addChild(
    new txt.Text({
      text: "Tracking!      -50",
      font: "librebaskerville",
      lineHeight: 300,
      width: 1900,
      height: 300,
      tracking: -50,
      size: 200,
      x: 10,
      y: 210
    })
  );

  stage.addChild(
    new txt.Text({
      text: "Tracking!     0",
      font: "librebaskerville",
      lineHeight: 300,
      width: 1900,
      height: 300,
      tracking: 0,
      size: 200,
      x: 10,
      y: 410
    })
  );

  stage.addChild(
    new txt.Text({
      text: "Tracking!   50",
      font: "librebaskerville",
      lineHeight: 300,
      width: 1900,
      height: 300,
      tracking: 50,
      size: 200,
      x: 10,
      y: 610
    })
  );

  stage.addChild(
    new txt.Text({
      text: "Tracking! 100",
      font: "librebaskerville",
      lineHeight: 300,
      width: 1900,
      height: 300,
      tracking: 100,
      size: 200,
      x: 10,
      y: 810
    })
  );

  stage.update();
  return stage;
}
