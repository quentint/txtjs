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

  var text = new txt.Text({
    text: "The fox jumped over the log.",
    font: "raleway",
    align: txt.Align.TOP_RIGHT,
    tracking: -4,
    lineHeight: 120,
    width: 600,
    height: 360,
    size: 120,
    x: 10,
    y: 10
  });

  stage.addChild(text);

  stage.update();
}
