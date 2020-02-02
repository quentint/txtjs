export default function init() {
  let canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  let stage = new createjs.Stage(canvas);

  stage.addChild(
    new txt.CharacterText({
      text: "abcd",
      font: "cinzel",
      singleLine: true,
      align: txt.Align.MIDDLE_CENTER,
      autoExpand: true,
      maxTracking: 9000,
      lineHeight: 120,
      width: 1600,
      height: 130,
      size: 120,
      x: 10,
      y: 0,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      text: "abcd",
      font: "cinzel",
      singleLine: true,
      align: txt.Align.MIDDLE_CENTER,
      autoExpand: true,
      maxTracking: 9000,
      lineHeight: 120,
      width: 1500,
      height: 130,
      size: 120,
      x: 10,
      y: 150,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      text: "abcd",
      font: "cinzel",
      singleLine: true,
      align: txt.Align.MIDDLE_CENTER,
      autoExpand: true,
      maxTracking: 9000,
      lineHeight: 120,
      width: 1400,
      height: 130,
      size: 120,
      x: 10,
      y: 300,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      text: "abcd",
      font: "cinzel",
      singleLine: true,
      align: txt.Align.MIDDLE_CENTER,
      autoExpand: true,
      maxTracking: 9000,
      lineHeight: 120,
      width: 1300,
      height: 130,
      size: 120,
      x: 10,
      y: 450,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      text: "abcd",
      font: "cinzel",
      singleLine: true,
      align: txt.Align.MIDDLE_CENTER,
      autoExpand: true,
      maxTracking: 9000,
      lineHeight: 120,
      width: 1200,
      height: 130,
      size: 120,
      x: 10,
      y: 600,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      text: "abcd",
      font: "cinzel",
      singleLine: true,
      align: txt.Align.MIDDLE_CENTER,
      autoExpand: true,
      maxTracking: 9000,
      lineHeight: 120,
      width: 1100,
      height: 130,
      size: 120,
      x: 10,
      y: 750,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      text: "abcd",
      font: "cinzel",
      singleLine: true,
      align: txt.Align.MIDDLE_CENTER,
      autoExpand: true,
      maxTracking: 9000,
      lineHeight: 120,
      width: 1000,
      height: 130,
      size: 120,
      x: 10,
      y: 900,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      text: "abcd",
      font: "cinzel",
      singleLine: true,
      align: txt.Align.MIDDLE_CENTER,
      autoExpand: true,
      maxTracking: 9000,
      lineHeight: 120,
      width: 900,
      height: 130,
      size: 120,
      x: 10,
      y: 1050,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      text: "abcd",
      font: "cinzel",
      singleLine: true,
      align: txt.Align.MIDDLE_CENTER,
      autoExpand: true,
      maxTracking: 9000,
      lineHeight: 120,
      width: 800,
      height: 130,
      size: 120,
      x: 10,
      y: 1200,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      text: "abcd",
      font: "cinzel",
      singleLine: true,
      align: txt.Align.MIDDLE_CENTER,
      autoExpand: true,
      maxTracking: 9000,
      lineHeight: 120,
      width: 700,
      height: 130,
      size: 120,
      x: 10,
      y: 1350,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      text: "abcd",
      font: "cinzel",
      singleLine: true,
      align: txt.Align.MIDDLE_CENTER,
      autoExpand: true,
      maxTracking: 9000,
      lineHeight: 120,
      width: 600,
      height: 130,
      size: 120,
      x: 10,
      y: 1500,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      text: "abcd",
      font: "cinzel",
      singleLine: true,
      align: txt.Align.MIDDLE_CENTER,
      autoExpand: true,
      maxTracking: 9000,
      lineHeight: 120,
      width: 500,
      height: 130,
      size: 120,
      x: 10,
      y: 1650,
      debug: true
    })
  );

  stage.update();
  return stage;
}
