import createHiDPICanvas from "../../lib/hidpi-canvas";
export default function init() {
  let canvas = createHiDPICanvas(2000, 2000, 2);
  document.body.appendChild(canvas);
  let stage = new createjs.Stage(canvas);
  stage.scaleX = stage.scaleY = 6;

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "AB",
      tracking: 50000,
      x: 10,
      y: 0,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDE",
      tracking: 50000,
      x: 10,
      y: 10,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEF",
      tracking: 50000,
      x: 10,
      y: 20,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFG",
      tracking: 50000,
      x: 10,
      y: 30,
      debug: true
    })
  );
  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGH",
      tracking: 50000,
      x: 10,
      y: 40,
      debug: true
    })
  );
  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHI",
      tracking: 50000,
      x: 10,
      y: 50,
      debug: true
    })
  );
  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJ",
      tracking: 50000,
      x: 10,
      y: 60,
      debug: true
    })
  );
  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJK",
      tracking: 50000,
      x: 10,
      y: 70,
      debug: true
    })
  );
  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKL",
      tracking: 50000,
      x: 10,
      y: 80,
      debug: true
    })
  );
  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLM",
      tracking: 50000,
      x: 10,
      y: 90,
      debug: true
    })
  );
  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLMN",
      tracking: 50000,
      x: 10,
      y: 100,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLMNO",
      tracking: 50000,
      x: 10,
      y: 110,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLMNOP",
      tracking: 50000,
      x: 10,
      y: 120,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLMNOPQ",
      tracking: 50000,
      x: 10,
      y: 130,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLMNOPQR",
      tracking: 50000,
      x: 10,
      y: 140,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLMNOPQRS",
      tracking: 50000,
      x: 10,
      y: 150,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLMNOPQRST",
      tracking: 50000,
      x: 10,
      y: 160,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLMNOPQRSTU",
      tracking: 50000,
      x: 10,
      y: 170,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLMNOPQRSTUV",
      tracking: 50000,
      x: 10,
      y: 180,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLMNOPQRSTUV",
      tracking: 50000,
      x: 10,
      y: 190,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLMNOPQRSTUVW",
      tracking: 50000,
      x: 10,
      y: 200,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLMNOPQRSTUVWX",
      tracking: 50000,
      x: 10,
      y: 210,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLMNOPQRSTUVXY",
      tracking: 50000,
      x: 10,
      y: 220,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      tracking: 50000,
      x: 10,
      y: 230,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLMNOPQRSTUVWXYZA",
      tracking: 50000,
      x: 10,
      y: 240,
      debug: true
    })
  );

  stage.addChild(
    new txt.CharacterText({
      autoReduce: true,
      fillColor: "#231f20",
      font: "cinzel",
      height: 10,
      singleLine: true,
      size: 8,
      text: "ABCDEFGHIJKLMNOPQRSTUVWXYZAB",
      tracking: 50000,
      x: 10,
      y: 250,
      debug: true
    })
  );

  stage.update();
  return stage;
}
