export default function init() {
  let canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  let stage = new createjs.Stage(canvas);

  let text = new txt.CharacterText({
    text: "love\n me some\n poiretone",
    font: "poiretone",
    align: txt.Align.TOP_LEFT,
    lineHeight: 70,
    width: 400,
    height: 400,
    size: 100,
    x: 0,
    y: 0,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "love\n me some\n poiretone",
    font: "poiretone",
    align: txt.Align.TOP_CENTER,
    lineHeight: 70,
    width: 400,
    height: 400,
    size: 100,
    x: 410,
    y: 0,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "love\n me some\n poiretone",
    font: "poiretone",
    align: txt.Align.TOP_RIGHT,
    lineHeight: 70,
    width: 400,
    height: 400,
    size: 100,
    x: 820,
    y: 0,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "love\n me some\n poiretone",
    font: "poiretone",
    align: txt.Align.MIDDLE_LEFT,
    lineHeight: 70,
    width: 400,
    height: 400,
    size: 100,
    x: 0,
    y: 410,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "love\n me some\n poiretone",
    font: "poiretone",
    align: txt.Align.MIDDLE_CENTER,
    lineHeight: 70,
    width: 400,
    height: 400,
    size: 100,
    x: 410,
    y: 410,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "love\n me some\n poiretone",
    font: "poiretone",
    align: txt.Align.MIDDLE_RIGHT,
    lineHeight: 70,
    width: 400,
    height: 400,
    size: 100,
    x: 820,
    y: 410,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "love\n me some\n poiretone",
    font: "poiretone",
    align: txt.Align.BOTTOM_LEFT,
    lineHeight: 70,
    width: 400,
    height: 400,
    size: 100,
    x: 0,
    y: 820,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "love\n me some\n poiretone",
    font: "poiretone",
    align: txt.Align.BOTTOM_CENTER,
    lineHeight: 70,
    width: 400,
    height: 400,
    size: 100,
    x: 410,
    y: 820,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "love\n me some\n poiretone",
    font: "poiretone",
    align: txt.Align.BOTTOM_RIGHT,
    lineHeight: 70,
    width: 400,
    height: 400,
    size: 100,
    x: 820,
    y: 820,
    debug: true
  });

  stage.addChild(text);

  stage.update();
  return stage;
}
