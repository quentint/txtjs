import createHiDPICanvas from "../../lib/hidpi-canvas";
export default function init() {
  let canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  let stage = new createjs.Stage(canvas);

  let text = new txt.CharacterText({
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
  return stage;
}
