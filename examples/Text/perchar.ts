import createHiDPICanvas from "../../lib/hidpi-canvas";
export default function init() {
  let canvas = createHiDPICanvas(1000, 1000, 2);
  document.body.appendChild(canvas);
  let stage = new createjs.Stage(canvas);

  stage.addChild(
    new txt.Text({
      text:
        "LARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER",
      font: "comfortaa",
      style: [
        { size: 1 },
        { size: 2 },
        { size: 4 },
        { size: 6 },
        { size: 8 },
        { size: 10 },
        { size: 12 },
        { size: 14 },
        { size: 16 },
        { size: 18 },
        { size: 20 },
        { size: 22 },
        { size: 24 },
        { size: 26 },
        { size: 28 },
        { size: 30 },
        { size: 32 },
        { size: 34 },
        { size: 36 },
        { size: 38 },
        { size: 40 },
        { size: 42 },
        { size: 44 },
        { size: 46 },
        { size: 48 },
        { size: 50 },
        { size: 52 },
        { size: 54 },
        { size: 56 },
        { size: 58 },
        { size: 60 },
        { size: 62 },
        { size: 64 },
        { size: 66 },
        { size: 68 },
        { size: 70 },
        { size: 72 },
        { size: 77 },
        { size: 76 },
        { size: 78 },
        { size: 80 },
        { size: 82 },
        { size: 84 },
        { size: 86 },
        { size: 88 },
        { size: 90 },
        { size: 92 },
        { size: 94 },
        { size: 96 },
        { size: 98 },
        { size: 100 },
        { size: 102 },
        { size: 104 },
        { size: 106 },
        { size: 108 },
        { size: 110 },
        { size: 112 },
        { size: 114 },
        { size: 116 },
        { size: 118 },
        { size: 120 },
        { size: 122 },
        { size: 124 },
        { size: 126 },
        { size: 128 },
        { size: 130 },
        { size: 132 },
        { size: 134 },
        { size: 136 },
        { size: 138 },
        { size: 140 },
        { size: 142 },
        { size: 144 },
        { size: 146 },
        { size: 148 },
        { size: 140 },
        { size: 142 },
        { size: 144 },
        { size: 146 },
        { size: 148 },
        { size: 150 },
        { size: 152 },
        { size: 154 },
        { size: 156 },
        { size: 158 },
        { size: 160 },
        { size: 162 },
        { size: 164 },
        { size: 166 },
        { size: 168 },
        { size: 170 },
        { size: 172 },
        { size: 174 },
        { size: 176 },
        { size: 178 },
        { size: 180 },
        { size: 182 },
        { size: 184 },
        { size: 186 },
        { size: 188 }
      ],
      width: 1800,
      align: txt.Align.TOP_LEFT,
      size: 150,
      x: 10,
      y: 10
    })
  );

  stage.update();
  return stage;
}
