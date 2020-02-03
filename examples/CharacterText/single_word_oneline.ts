import createHiDPICanvas from "../../lib/hidpi-canvas";
export default function init() {
  let canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  let stage = new createjs.Stage(canvas);

  let text = new txt.CharacterText({
    text: "Save",
    font: "lato",
    align: txt.Align.TOP_LEFT,
    width: 115,
    height: 73,
    size: 52,
    x: 0,
    y: 0,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "Save",
    font: "lato",
    align: txt.Align.TOP_CENTER,
    width: 115,
    height: 73,
    size: 52,
    x: 410,
    y: 0,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "Save",
    font: "lato",
    align: txt.Align.TOP_RIGHT,
    width: 115,
    height: 73,
    size: 52,
    x: 820,
    y: 0,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "Save",
    font: "lato",
    align: txt.Align.MIDDLE_LEFT,
    width: 115.2541,
    height: 73,
    size: 52,
    x: 0,
    y: 410,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "Save",
    font: "lato",
    align: txt.Align.MIDDLE_CENTER,
    width: 115,
    height: 73,
    size: 52,
    x: 410,
    y: 410,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "Save",
    font: "lato",
    align: txt.Align.MIDDLE_RIGHT,
    width: 115,
    height: 73,
    size: 52,
    x: 820,
    y: 410,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "Save",
    font: "lato",
    align: txt.Align.BOTTOM_LEFT,
    width: 115,
    height: 73,
    size: 52,
    x: 0,
    y: 820,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "Save",
    font: "lato",
    align: txt.Align.BOTTOM_CENTER,
    width: 115,
    height: 73,
    size: 52,
    x: 410,
    y: 820,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "Save",
    font: "lato",
    align: txt.Align.BOTTOM_RIGHT,
    width: 115,
    height: 73,
    size: 52,
    x: 820,
    y: 820,
    debug: true
  });

  stage.addChild(text);

  stage.update();
  return stage;
}
