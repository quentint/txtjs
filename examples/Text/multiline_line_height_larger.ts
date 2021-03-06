import createHiDPICanvas from "../../lib/hidpi-canvas";
export default function init() {
  const canvas = createHiDPICanvas(610, 610, 2);
  document.body.appendChild(canvas);
  const stage = new createjs.Stage(canvas);

  function addText(align, xPos, yPos) {
    const text = new txt.Text({
      text: "love\n me some\n poiretone",
      font: "poiretone",
      align,
      lineHeight: 140,
      width: 400,
      height: 400,
      size: 100,
      x: xPos,
      y: yPos,
      debug: true
    });
    stage.addChild(text);
  }

  addText(txt.Align.TOP_LEFT, 0, 0);
  addText(txt.Align.TOP_CENTER, 410, 0);
  addText(txt.Align.TOP_RIGHT, 820, 0);
  addText(txt.Align.MIDDLE_LEFT, 0, 410);
  addText(txt.Align.MIDDLE_CENTER, 410, 410);
  addText(txt.Align.MIDDLE_RIGHT, 820, 410);
  addText(txt.Align.BOTTOM_LEFT, 0, 820);
  addText(txt.Align.BOTTOM_CENTER, 410, 820);
  addText(txt.Align.BOTTOM_RIGHT, 820, 820);

  stage.update();
  return stage;
}
