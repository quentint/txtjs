import speech from "../fixtures/speech";
import createHiDPICanvas from "../../lib/hidpi-canvas";
export default function init() {
  let canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  let stage = new createjs.Stage(canvas);

  var text = new txt.CharacterText({
    text: speech,
    font: "poiretone",
    lineHeight: 70,
    align: txt.Align.TOP_LEFT,
    width: 1800,
    height: 1800,
    size: 70,
    x: 20,
    y: 20,
    debug: true
  });

  stage.addChild(text);

  stage.update();
  return stage;
}
