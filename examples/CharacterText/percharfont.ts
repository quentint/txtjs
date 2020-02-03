import createHiDPICanvas from "../../lib/hidpi-canvas";
export default function init() {
  let canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  let stage = new createjs.Stage(canvas);

  stage.addChild(
    new txt.CharacterText({
      text: "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
      font: "comfortaa",
      style: [
        { size: 100 },
        ,
        ,
        ,
        ,
        { font: "dancingscript" },
        ,
        ,
        ,
        ,
        ,
        ,
        { size: 100, font: "lobster" },
        ,
        ,
        ,
        ,
        ,
        {},
        ,
        ,
        ,
        ,
      ],
      width: 1800,
      align: txt.Align.TOP_LEFT,
      size: 150,
      x: 10,
      y: 10
    })
  );

  stage.update();
  return stage;
}
