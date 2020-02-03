txt.FontLoader.path = "font/";

import circle from "../lib/circle-path";
import createHiDPICanvas from "../lib/hidpi-canvas";

let pathText, text, stage;

function init() {
  let canvas = createHiDPICanvas(500, 300, 2);
  canvas.style.maxWidth = "100%";
  document.getElementById("example").appendChild(canvas);
  stage = new createjs.Stage(canvas);

  text = new txt.Text({
    text: "This is TxtJS",
    font: "lobster",
    align: txt.Align.MIDDLE_CENTER,
    width: 500,
    height: 300,
    size: 100,
    start: 2700,
    x: 250,
    y: 150,
    debug: true
  });

  stage.addChild(text);

  pathText = new txt.PathText({
    text: "Text on a path!",
    font: "arimo",
    align: txt.PathAlign.Center,
    path: circle(0, 0, 200),
    rotation: 0,
    initialTracking: 200,
    width: 1000,
    height: 600,
    size: 50,
    start: 2700,
    x: 500,
    y: 300
  });

  stage.addChild(pathText);

  createjs.Ticker.on("tick", tick);
  createjs.Ticker.framerate = 30;
}

var counter = 0;
var counter2 = 0;

function tick(event) {
  pathText.tracking = 50 + Math.sin(counter) * 200;
  text.align =
    Math.sin(counter) > 0 ? txt.Align.BOTTOM_RIGHT : txt.Align.TOP_LEFT;

  counter = (counter + 0.05) % 7;
  counter2 = (counter2 + 3) % 500;
  text.width = 100 + counter2;
  text.x = 450 - counter2 / 2;
  text.font = counter > 2.5 ? "arimo" : "lobster";

  pathText.rotation = pathText.rotation + (1 % 360);

  text.layout();
  pathText.layout();
  stage.update(event);
}

document.onload = init();
