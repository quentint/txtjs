var canvas;
var stage;

export default function init() {
  canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  stage = new createjs.Stage(canvas);

  //set cache to true
  // defaults to false
  txt.FontLoader.cache = true;

  //set cache version
  //if version changes it will overwrite cache and load data remotely
  //version is stored with the font locally.
  txt.FontLoader.version = 4;

  var text = new txt.CharacterText({
    text: "The fox jumped over the log.",
    font: "raleway",
    tracking: -4,
    lineHeight: 120,
    width: 600,
    height: 360,
    size: 120,
    x: 10,
    y: 10,
    debug: true
  });

  stage.addChild(text);

  text = new txt.CharacterText({
    text: "The fox jumped over the log.",
    font: "raleway",
    singleLine: true,
    tracking: -4,
    lineHeight: 120,
    width: 1600,
    height: 360,
    size: 120,
    x: 10,
    y: 500,
    debug: true
  });

  stage.addChild(text);

  stage.update();
}
