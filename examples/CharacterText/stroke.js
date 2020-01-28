var canvas;
var stage;

function init() {
  canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  stage = new createjs.Stage(canvas);

  stage.addChild(
    new txt.CharacterText({
      text: "Harland Clarke",
      font: "lobster",
      lineHeight: 300,
      width: 1900,
      height: 300,
      strokeColor: "#444",
      fillColor: null,
      style: [
        { strokeWidth: 1 },
        { strokeWidth: 2, fillColor: "#FF0000" },
        { strokeWidth: 3 },
        { strokeWidth: 4, fillColor: "#FF0000" },
        { strokeWidth: 5 },
        { strokeWidth: 6, fillColor: "#FF0000" },
        { strokeWidth: 7 },
        { strokeWidth: 8, fillColor: "#FF0000" },
        { strokeWidth: 9 },
        { strokeWidth: 10, fillColor: "#FF0000" },
        { strokeWidth: 11 },
        { strokeWidth: 12, fillColor: "#FF0000" },
        { strokeWidth: 13 },
        { strokeWidth: 14, fillColor: "#FF0000" }
      ],
      size: 300,
      x: 10,
      y: 10
    })
  );

  stage.addChild(
    new txt.CharacterText({
      text: "Harland Clarke",
      font: "lobster",
      lineHeight: 300,
      height: 300,
      width: 1900,
      strokeColor: "#00aa00",
      strokeWidth: 6,
      fillColor: null,
      size: 300,
      x: 10,
      y: 300
    })
  );

  stage.addChild(
    new txt.CharacterText({
      text: "Harland Clarke",
      font: "lobster",
      lineHeight: 300,
      height: 300,
      width: 1900,
      fillColor: null,
      strokeColor: "#f00",
      strokeWidth: 1,
      size: 300,
      x: 10,
      y: 600
    })
  );

  stage.update();
}
