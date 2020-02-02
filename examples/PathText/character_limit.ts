export default function init() {
  let canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  let stage = new createjs.Stage(canvas);
  stage.scaleX = stage.scaleY = 4;

  stage.addChild(
    new txt.PathText({
      x: -46.0,
      y: 101.0,
      flipped: false,
      text: "This Is Text On Path This Is Text On Path",
      font: "lobster",
      size: 16,
      valign: txt.VerticalAlign.Center,
      path:
        "M 226 159.333333333333 C 350.816352746667 159.333333333333 452 123.665351484444 452 79.6666666666667 C 452 35.667981848889 350.816352746667 0 226 0 C 101.183647253333 0 0 35.667981848889 0 79.6666666666667 C 0 123.665351484444 101.183647253333 159.333333333333 226 159.333333333333 Z",
      start: 620.5843673934,
      end: 394.750579307083,
      debug: true,
      tracking: 0
    })
  );

  stage.update();
  return stage;
}
