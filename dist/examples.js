var txtExamples = (function (exports) {
  'use strict';

  var context = document.createElement("canvas").getContext("2d");
  var devicePixelRatio = window.devicePixelRatio || 1;
  var backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
  var PIXEL_RATIO = devicePixelRatio / backingStorePixelRatio;

  function createHiDPICanvas(w, h, ratio) {
    if (!ratio) {
      ratio = PIXEL_RATIO;
    }

    var canvas = document.createElement("canvas");
    canvas.width = w * ratio;
    canvas.height = h * ratio;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return canvas;
  }

  function init() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
      text: "First poiretone",
      font: "poiretone",
      align: txt.Align.TOP_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 0,
      accessibilityPriority: 0,
      accessibilityText: "<h1>First poiretone</h1>",
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "Second poiretone",
      font: "poiretone",
      align: txt.Align.TOP_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 0,
      accessibilityPriority: 1,
      accessibilityText: "<h2>Second poiretone</h2>",
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "Third poiretone",
      font: "poiretone",
      align: txt.Align.TOP_RIGHT,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 0,
      accessibilityPriority: 2,
      accessibilityText: "<h3>Third poiretone</h3>",
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "ANOTHER 1 poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 410,
      accessibilityPriority: 0,
      accessibilityText: "<h1>ANOTHER 1 poiretone</h1>",
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "low 5 poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 410,
      accessibilityPriority: 5,
      accessibilityText: "<p>low 5 poiretone</p>",
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "poiretone default",
      font: "poiretone",
      align: txt.Align.MIDDLE_RIGHT,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "low 3 poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 820,
      accessibilityPriority: 3,
      accessibilityText: "<p>low 3 poiretone</p>",
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "another default poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "bottom 7 poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_RIGHT,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 820,
      accessibilityPriority: 7,
      accessibilityText: "<p>bottom 7 poiretone</p>",
      debug: true
    });
    stage.addChild(text);
    stage.update();
    return stage;
  }

  function init$1() {
    var canvas = createHiDPICanvas(1100, 1100, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var shape = new createjs.Shape();
    shape.graphics.beginFill("#76d6ff");
    shape.graphics.drawRect(10, 10, 1000, 1000);
    stage.addChild(shape);
    stage.addChild(new txt.CharacterText({
      text: "< Align.TOP_LEFT",
      font: "cantarell",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.TOP_LEFT,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.CharacterText({
      text: "Align.TOP_RIGHT >",
      font: "amaticsc",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.TOP_RIGHT,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.CharacterText({
      text: "< Align.TOP_CENTER >",
      font: "glegoo",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.TOP_CENTER,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.CharacterText({
      text: "< Align.MIDDLE_LEFT",
      font: "indieflower",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.MIDDLE_LEFT,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.CharacterText({
      text: "Align.MIDDLE_RIGHT >",
      font: "lato",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.MIDDLE_RIGHT,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.CharacterText({
      text: "< Align.MIDDLE_CENTER >",
      font: "luckiestguy",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.MIDDLE_CENTER,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.CharacterText({
      text: "< Align.BOTTOM_LEFT",
      font: "opensans",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.BOTTOM_LEFT,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.CharacterText({
      text: "Align.BOTTOM_RIGHT >",
      font: "nixieone",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.BOTTOM_RIGHT,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.CharacterText({
      text: "< Align.BOTTOM_CENTER >",
      font: "pacifico",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.BOTTOM_CENTER,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.update();
    return stage;
  }

  function init$2() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.update();
    return stage;
  }

  function init$3() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.CharacterText({
      text: "The fox jumped over...",
      font: "raleway",
      singleLine: true,
      autoReduce: true,
      tracking: 200,
      minSize: 70,
      lineHeight: 120,
      width: 1600,
      height: 130,
      size: 120,
      x: 10,
      y: 0,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "The fox jumped over...",
      font: "raleway",
      singleLine: true,
      autoReduce: true,
      tracking: 200,
      minSize: 70,
      lineHeight: 120,
      width: 1500,
      height: 130,
      size: 120,
      x: 10,
      y: 150,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "The fox jumped over...",
      font: "raleway",
      singleLine: true,
      autoReduce: true,
      tracking: 200,
      minSize: 70,
      lineHeight: 120,
      width: 1400,
      height: 130,
      size: 120,
      x: 10,
      y: 300,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "The fox jumped over...",
      font: "raleway",
      singleLine: true,
      autoReduce: true,
      tracking: 200,
      minSize: 70,
      lineHeight: 120,
      width: 1300,
      height: 130,
      size: 120,
      x: 10,
      y: 450,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "The fox jumped over...",
      font: "raleway",
      singleLine: true,
      autoReduce: true,
      tracking: 200,
      minSize: 70,
      lineHeight: 120,
      width: 1200,
      height: 130,
      size: 120,
      x: 10,
      y: 600,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "The fox jumped over...",
      font: "raleway",
      singleLine: true,
      autoReduce: true,
      tracking: 200,
      minSize: 70,
      lineHeight: 120,
      width: 1100,
      height: 130,
      size: 120,
      x: 10,
      y: 750,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "The fox jumped over...",
      font: "raleway",
      singleLine: true,
      autoReduce: true,
      tracking: 200,
      minSize: 70,
      lineHeight: 120,
      width: 1000,
      height: 130,
      size: 120,
      x: 10,
      y: 900,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "The fox jumped over...",
      font: "raleway",
      singleLine: true,
      autoReduce: true,
      tracking: 200,
      minSize: 70,
      lineHeight: 120,
      width: 900,
      height: 130,
      size: 120,
      x: 10,
      y: 1050,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "The fox jumped over...",
      font: "raleway",
      singleLine: true,
      autoReduce: true,
      tracking: 200,
      minSize: 70,
      lineHeight: 120,
      width: 800,
      height: 130,
      size: 120,
      x: 10,
      y: 1200,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "The fox jumped over...",
      font: "raleway",
      singleLine: true,
      autoReduce: true,
      tracking: 200,
      minSize: 70,
      lineHeight: 120,
      width: 700,
      height: 130,
      size: 120,
      x: 10,
      y: 1350,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "The fox jumped over...",
      font: "raleway",
      singleLine: true,
      autoReduce: true,
      tracking: 200,
      minSize: 70,
      lineHeight: 120,
      width: 600,
      height: 130,
      size: 120,
      x: 10,
      y: 1500,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "The fox jumped over...",
      font: "raleway",
      singleLine: true,
      autoReduce: true,
      tracking: 200,
      minSize: 70,
      lineHeight: 120,
      width: 500,
      height: 130,
      size: 120,
      x: 10,
      y: 1650,
      debug: true
    }));
    stage.update();
    return stage;
  }

  function init$4() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.CharacterText({
      text: "Harland Clarke...",
      font: "glegoo",
      singleLine: true,
      autoReduce: true,
      autoExpand: true,
      minSize: 70,
      maxTracking: 260,
      tracking: 200,
      lineHeight: 120,
      width: 1600,
      height: 130,
      size: 120,
      x: 10,
      y: 0,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Harland Clarke...",
      font: "glegoo",
      singleLine: true,
      autoReduce: true,
      autoExpand: true,
      minSize: 70,
      maxTracking: 260,
      tracking: 200,
      lineHeight: 120,
      width: 1500,
      height: 130,
      size: 120,
      x: 10,
      y: 150,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Harland Clarke...",
      font: "glegoo",
      singleLine: true,
      autoReduce: true,
      autoExpand: true,
      minSize: 70,
      maxTracking: 260,
      tracking: 200,
      lineHeight: 120,
      width: 1400,
      height: 130,
      size: 120,
      x: 10,
      y: 300,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Harland Clarke...",
      font: "glegoo",
      singleLine: true,
      autoReduce: true,
      autoExpand: true,
      minSize: 70,
      maxTracking: 260,
      tracking: 200,
      lineHeight: 120,
      width: 1300,
      height: 130,
      size: 120,
      x: 10,
      y: 450,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Harland Clarke...",
      font: "glegoo",
      singleLine: true,
      autoReduce: true,
      autoExpand: true,
      minSize: 70,
      maxTracking: 260,
      tracking: 200,
      lineHeight: 120,
      width: 1200,
      height: 130,
      size: 120,
      x: 10,
      y: 600,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Harland Clarke...",
      font: "glegoo",
      singleLine: true,
      autoReduce: true,
      autoExpand: true,
      minSize: 70,
      maxTracking: 260,
      tracking: 200,
      lineHeight: 120,
      width: 1100,
      height: 130,
      size: 120,
      x: 10,
      y: 750,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Harland Clarke...",
      font: "glegoo",
      singleLine: true,
      autoReduce: true,
      autoExpand: true,
      minSize: 70,
      maxTracking: 260,
      tracking: 200,
      lineHeight: 120,
      width: 1000,
      height: 130,
      size: 120,
      x: 10,
      y: 900,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Harland Clarke...",
      font: "glegoo",
      singleLine: true,
      autoReduce: true,
      autoExpand: true,
      minSize: 70,
      maxTracking: 260,
      tracking: 200,
      lineHeight: 120,
      width: 900,
      height: 130,
      size: 120,
      x: 10,
      y: 1050,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Harland Clarke...",
      font: "glegoo",
      singleLine: true,
      autoReduce: true,
      autoExpand: true,
      minSize: 70,
      maxTracking: 260,
      tracking: 200,
      lineHeight: 120,
      width: 800,
      height: 130,
      size: 120,
      x: 10,
      y: 1200,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Harland Clarke...",
      font: "glegoo",
      singleLine: true,
      autoReduce: true,
      autoExpand: true,
      minSize: 70,
      maxTracking: 260,
      tracking: 200,
      lineHeight: 120,
      width: 700,
      height: 130,
      size: 120,
      x: 10,
      y: 1350,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Harland Clarke...",
      font: "glegoo",
      singleLine: true,
      autoReduce: true,
      autoExpand: true,
      minSize: 70,
      maxTracking: 260,
      tracking: 200,
      lineHeight: 120,
      width: 600,
      height: 130,
      size: 120,
      x: 10,
      y: 1500,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Harland Clarke...",
      font: "glegoo",
      singleLine: true,
      autoReduce: true,
      autoExpand: true,
      minSize: 70,
      maxTracking: 260,
      tracking: 200,
      lineHeight: 120,
      width: 500,
      height: 130,
      size: 120,
      x: 10,
      y: 1650,
      debug: true
    }));
    stage.update();
    return stage;
  }

  function init$5() {
    var canvas = createHiDPICanvas(2000, 2000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.scaleX = stage.scaleY = 6;
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.update();
    return stage;
  }

  function init$6() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas); //set cache to true
    // defaults to false

    txt.FontLoader.cache = true; //set cache version
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
    return stage;
  }

  function init$7() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.CharacterText({
      text: "Hello World",
      font: "play",
      characterCase: txt.Case.NORMAL,
      lineHeight: 100,
      width: 800,
      height: 100,
      size: 100,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.CharacterText({
      text: "Hello World",
      font: "play",
      characterCase: txt.Case.UPPER,
      lineHeight: 100,
      width: 800,
      height: 100,
      size: 100,
      x: 10,
      y: 120
    }));
    stage.addChild(new txt.CharacterText({
      text: "Hello World",
      font: "play",
      characterCase: txt.Case.LOWER,
      lineHeight: 100,
      width: 800,
      height: 100,
      size: 100,
      x: 10,
      y: 230
    }));
    stage.addChild(new txt.CharacterText({
      text: "Hello World",
      font: "play",
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 100,
      width: 800,
      height: 100,
      size: 100,
      x: 10,
      y: 340
    }));
    stage.update();
    return stage;
  }

  function init$8() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
      text: "The fox jumped over the log.",
      font: "arimo",
      character: {
        click: function click(event) {
          console.log("click");
        }
      },
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
    return stage;
  }

  function init$9() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.CharacterText({
      text: "7\r\n8\n7\r3\r2",
      font: "tinos",
      align: txt.Align.MIDDLE_CENTER,
      lineHeight: 100,
      width: 150,
      height: 1000,
      size: 100,
      debug: true,
      x: 10,
      y: 10
    }));
    stage.update();
    return stage;
  }

  function init$a() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
      text: "The fox jumped over the log.",
      font: "arimo",
      complete: function complete() {
        console.log("complete");
      },
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
    return stage;
  }

  function init$b() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
      text: "Chess Onward The big blue file brush Who be dribble flower office",
      font: "lobster",
      tracking: 0,
      lineHeight: 200,
      width: 1800,
      height: 600,
      ligatures: true,
      align: txt.Align.TOP_LEFT,
      size: 200,
      x: 50,
      y: 50,
      debug: true
    });
    stage.addChild(text);
    stage.update();
    return stage;
  }

  function init$c() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var i = 1;
    var h = 8;

    while (i < 30) {
      h = h + 5 * i;
      stage.addChild(new txt.CharacterText({
        text: '"Logic will take you from A to B. Imagination will take you everywhere." - Albert Einstein',
        font: "righteous",
        fillColor: null,
        strokeWidth: 2,
        strokeColor: "#d48",
        lineHeight: h * 1.4,
        height: h * 1.4,
        width: 50000,
        size: h,
        y: h * 1.4
      }));
      i++;
    }

    stage.update();
    return stage;
  }

  var speech = "President Pitzer, Mr. Vice President, Governor, Congressman Thomas, Senator Wiley, and Congressman Miller, Mr. Webb, Mr. Bell, scientists, distinguished guests, and ladies and gentlemen: I appreciate your president having made me an honorary visiting professor, and I will assure you that my first lecture will be very brief. I am delighted to be here and I'm particularly delighted to be here on this occasion. We meet at a college noted for knowledge, in a city noted for progress, in a state noted for strength, and we stand in need of all three, for we meet in an hour of change and challenge, in a decade of hope and fear, in an age of both knowledge and ignorance. The greater our knowledge increases, the greater our ignorance unfolds. Despite the striking fact that most of the scientists that the world has ever known are alive and working today, despite the fact that this Nation's own scientific manpower is doubling every 12 years in a rate of growth more than three times that of our population as a whole, despite that, the vast stretches of the unknown and the unanswered and the unfinished still far outstrip our collective comprehension. No man can fully grasp how far and how fast we have come, but condense, if you will, the 50,000 years of man's recorded history in a time span of but a half-century. Stated in these terms, we know very little about the first 40 years, except at the end of them advanced man had learned to use the skins of animals to cover them. Then about 10 years ago, under this standard, man emerged from his caves to construct other kinds of shelter. Only five years ago man learned to write and use a cart with wheels. Christianity began less than two years ago. The printing press came this year, and then less than two months ago, during this whole 50-year span of human history, the steam engine provided a new source of power. Newton explored the meaning of gravity. Last month electric lights and telephones and automobiles and airplanes became available. Only last week did we develop penicillin and television and nuclear power, and now if America's new spacecraft succeeds in reaching Venus, we will have literally reached the stars before midnight tonight. This is a breathtaking pace, and such a pace cannot help but create new ills as it dispels old, new ignorance, new problems, new dangers. Surely the opening vistas of space promise high costs and hardships, as well as high reward. So it is not surprising that some would have us stay where we are a little longer to rest, to wait. But this city of Houston, this state of Texas, this country of the United States was not built by those who waited and rested and wished to look behind them. This country was conquered by those who moved forward--and so will space. William Bradford, speaking in 1630 of the founding of the Plymouth Bay Colony, said that all great and honorable actions are accompanied with great difficulties, and both must be enterprised and overcome with answerable courage. If this capsule history of our progress teaches us anything, it is that man, in his quest for knowledge and progress, is determined and cannot be deterred. The exploration of space will go ahead, whether we join in it or not, and it is one of the great adventures of all time, and no nation which expects to be the leader of other nations can expect to stay behind in this race for space. Those who came before us made certain that this country rode the first waves of the industrial revolution, the first waves of modern invention, and the first wave of nuclear power, and this generation does not intend to founder in the backwash of the coming age of space. We mean to be a part of it--we mean to lead it. For the eyes of the world now look into space, to the moon and to the planets beyond, and we have vowed that we shall not see it governed by a hostile flag of conquest, but by a banner of freedom and peace. We have vowed that we shall not see space filled with weapons of mass destruction, but with instruments of knowledge and understanding. Yet the vows of this Nation can only be fulfilled if we in this Nation are first, and, therefore, we intend to be first. In short, our leadership in science and industry, our hopes for peace and security, our obligations to ourselves as well as others, all require us to make this effort, to solve these mysteries, to solve them for the good of all men, and to become the world's leading space-faring nation. We set sail on this new sea because there is new knowledge to be gained, and new rights to be won, and they must be won and used for the progress of all people. For space science, like nuclear science and all technology, has no conscience of its own. Whether it will become a force for good or ill depends on man, and only if the United States occupies a position of pre-eminence can we help decide whether this new ocean will be a sea of peace or a new terrifying theater of war. I do not say that we should or will go unprotected against the hostile misuse of space any more than we go unprotected against the hostile use of land or sea, but I do say that space can be explored and mastered without feeding the fires of war, without repeating the mistakes that man has made in extending his writ around this globe of ours. There is no strife, no prejudice, no national conflict in outer space as yet. Its hazards are hostile to us all. Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again. But why, some say, the moon? Why choose this as our goal? And they may well ask why climb the highest mountain? Why, 35 years ago, fly the Atlantic? Why does Rice play Texas? We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too. It is for these reasons that I regard the decision last year to shift our efforts in space from low to high gear as among the most important decisions that will be made during my incumbency in the office of the Presidency. In the last 24 hours we have seen facilities now being created for the greatest and most complex exploration in man's history. We have felt the ground shake and the air shattered by the testing of a Saturn C-1 booster rocket, many times as powerful as the Atlas which launched John Glenn, generating power equivalent to 10,000 automobiles with their accelerators on the floor. We have seen the site where five F-1 rocket engines, each one as powerful as all eight engines of the Saturn combined, will be clustered together to make the advanced Saturn missile, assembled in a new building to be built at Cape Canaveral as tall as a 48 story structure, as wide as a city block, and as long as two lengths of this field. Within these last 19 months at least 45 satellites have circled the earth. Some 40 of them were made in the United States of America and they were far more sophisticated and supplied far more knowledge to the people of the world than those of the Soviet Union. The Mariner spacecraft now on its way to Venus is the most intricate instrument in the history of space science. The accuracy of that shot is comparable to firing a missile from Cape Canaveral and dropping it in this stadium between the 40-yard lines. Transit satellites are helping our ships at sea to steer a safer course. Tiros satellites have given us unprecedented warnings of hurricanes and storms, and will do the same for forest fires and icebergs. We have had our failures, but so have others, even if they do not admit them. And they may be less public. To be sure, we are behind, and will be behind for some time in manned flight. But we do not intend to stay behind, and in this decade, we shall make up and move ahead. The growth of our science and education will be enriched by new knowledge of our universe and environment, by new techniques of learning and mapping and observation, by new tools and computers for industry, medicine, the home as well as the school. Technical institutions, such as Rice, will reap the harvest of these gains. And finally, the space effort itself, while still in its infancy, has already created a great number of new companies, and tens of thousands of new jobs. Space and related industries are generating new demands in investment and skilled personnel, and this city and this state, and this region, will share greatly in this growth. What was once the furthest outpost on the old frontier of the West will be the furthest outpost on the new frontier of science and space. Houston, your city of Houston, with its Manned Spacecraft Center, will become the heart of a large scientific and engineering community. During the next 5 years the National Aeronautics and Space Administration expects to double the number of scientists and engineers in this area, to increase its outlays for salaries and expenses to $60 million a year; to invest some $200 million in plant and laboratory facilities; and to direct or contract for new space efforts over $1 billion from this center in this city. To be sure, all this costs us all a good deal of money. This year's space budget is three times what it was in January 1961, and it is greater than the space budget of the previous eight years combined. That budget now stands at $5,400 million a year--a staggering sum, though somewhat less than we pay for cigarettes and cigars every year. Space expenditures will soon rise some more, from 40 cents per person per week to more than 50 cents a week for every man, woman and child in the United States, for we have given this program a high national priority--even though I realize that this is in some measure an act of faith and vision, for we do not now know what benefits await us. But if I were to say, my fellow citizens, that we shall send to the moon, 240,000 miles away from the control station in Houston, a giant rocket more than 300 feet tall, the length of this football field, made of new metal alloys, some of which have not yet been invented, capable of standing heat and stresses several times more than have ever been experienced, fitted together with a precision better than the finest watch, carrying all the equipment needed for propulsion, guidance, control, communications, food and survival, on an untried mission, to an unknown celestial body, and then return it safely to earth, re-entering the atmosphere at speeds of over 25,000 miles per hour, causing heat about half that of the temperature of the sun--almost as hot as it is here today--and do all this, and do it right, and do it first before this decade is out--then we must be bold. I'm the one who is doing all the work, so we just want you to stay cool for a minute. However, I think we're going to do it, and I think that we must pay what needs to be paid. I don't think we ought to waste any money, but I think we ought to do the job. And this will be done in the decade of the Sixties. It may be done while some of you are still here at school at this college and university. It will be done during the terms of office of some of the people who sit here on this platform. But it will be done. And it will be done before the end of this decade. And I am delighted that this university is playing a part in putting a man on the moon as part of a great national effort of the United States of America. Many years ago the great British explorer George Mallory, who was to die on Mount Everest, was asked why did he want to climb it. He said, 'Because it is there.' Well, space is there, and we're going to climb it, and the moon and the planets are there, and new hopes for knowledge and peace are there. And, therefore, as we set sail we ask God's blessing on the most hazardous and dangerous and greatest adventure on which man has ever embarked. Thank you.";

  function init$d() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
      text: speech,
      font: "poiretone",
      lineHeight: 70,
      align: txt.Align.TOP_LEFT,
      width: 1800,
      height: 1800,
      size: 70,
      x: 20,
      y: 20,
      debug: true
    });
    stage.addChild(text);
    stage.update();
    return stage;
  }

  function init$e() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.TOP_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.TOP_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.TOP_RIGHT,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_RIGHT,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_RIGHT,
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

  function init$f() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.TOP_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.TOP_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.TOP_RIGHT,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_RIGHT,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_RIGHT,
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

  function init$g() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.TOP_LEFT,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.TOP_CENTER,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.TOP_RIGHT,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_LEFT,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_CENTER,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_RIGHT,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_LEFT,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_CENTER,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_RIGHT,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
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

  function init$h() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
      text: "love\n me some\n poiretone",
      font: "poiretone",
      align: txt.Align.TOP_LEFT,
      lineHeight: 140,
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
      lineHeight: 140,
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
      lineHeight: 140,
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
      lineHeight: 140,
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
      lineHeight: 140,
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
      lineHeight: 140,
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
      lineHeight: 140,
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
      lineHeight: 140,
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
      lineHeight: 140,
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

  function init$i() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
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

  function init$j() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
      text: "love\nme some poirtone",
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
      text: "love\nme some poirtone",
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
      text: "love\nme some poirtone",
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
      text: "love\nme some poirtone",
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
      text: "love\nme some poirtone",
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
      text: "love\nme some poirtone",
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
      text: "love\nme some poirtone",
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
      text: "love\nme some poirtone",
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
      text: "love\nme some poirtone",
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

  function init$k() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.CharacterText({
      text: "LARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER",
      font: "comfortaa",
      style: [{
        size: 1
      }, {
        size: 2
      }, {
        size: 4
      }, {
        size: 6
      }, {
        size: 8
      }, {
        size: 10
      }, {
        size: 12
      }, {
        size: 14
      }, {
        size: 16
      }, {
        size: 18
      }, {
        size: 20
      }, {
        size: 22
      }, {
        size: 24
      }, {
        size: 26
      }, {
        size: 28
      }, {
        size: 30
      }, {
        size: 32
      }, {
        size: 34
      }, {
        size: 36
      }, {
        size: 38
      }, {
        size: 40
      }, {
        size: 42
      }, {
        size: 44
      }, {
        size: 46
      }, {
        size: 48
      }, {
        size: 50
      }, {
        size: 52
      }, {
        size: 54
      }, {
        size: 56
      }, {
        size: 58
      }, {
        size: 60
      }, {
        size: 62
      }, {
        size: 64
      }, {
        size: 66
      }, {
        size: 68
      }, {
        size: 70
      }, {
        size: 72
      }, {
        size: 77
      }, {
        size: 76
      }, {
        size: 78
      }, {
        size: 80
      }, {
        size: 82
      }, {
        size: 84
      }, {
        size: 86
      }, {
        size: 88
      }, {
        size: 90
      }, {
        size: 92
      }, {
        size: 94
      }, {
        size: 96
      }, {
        size: 98
      }, {
        size: 100
      }, {
        size: 102
      }, {
        size: 104
      }, {
        size: 106
      }, {
        size: 108
      }, {
        size: 110
      }, {
        size: 112
      }, {
        size: 114
      }, {
        size: 116
      }, {
        size: 118
      }, {
        size: 120
      }, {
        size: 122
      }, {
        size: 124
      }, {
        size: 126
      }, {
        size: 128
      }, {
        size: 130
      }, {
        size: 132
      }, {
        size: 134
      }, {
        size: 136
      }, {
        size: 138
      }, {
        size: 140
      }, {
        size: 142
      }, {
        size: 144
      }, {
        size: 146
      }, {
        size: 148
      }, {
        size: 140
      }, {
        size: 142
      }, {
        size: 144
      }, {
        size: 146
      }, {
        size: 148
      }, {
        size: 150
      }, {
        size: 152
      }, {
        size: 154
      }, {
        size: 156
      }, {
        size: 158
      }, {
        size: 160
      }, {
        size: 162
      }, {
        size: 164
      }, {
        size: 166
      }, {
        size: 168
      }, {
        size: 170
      }, {
        size: 172
      }, {
        size: 174
      }, {
        size: 176
      }, {
        size: 178
      }, {
        size: 180
      }, {
        size: 182
      }, {
        size: 184
      }, {
        size: 186
      }, {
        size: 188
      }],
      width: 1800,
      align: txt.Align.TOP_LEFT,
      size: 150,
      x: 10,
      y: 10
    }));
    stage.update();
    return stage;
  }

  function init$l() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.CharacterText({
      text: "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
      font: "comfortaa",
      style: [{
        size: 100
      },,,,, {
        font: "dancingscript"
      },,,,,,, {
        size: 100,
        font: "lobster"
      },,,,,, {},,,,,],
      width: 1800,
      align: txt.Align.TOP_LEFT,
      size: 150,
      x: 10,
      y: 10
    }));
    stage.update();
    return stage;
  }

  function init$m() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
      text: "TTT",
      font: "opensans",
      align: txt.Align.TOP_LEFT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 0,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "TTT",
      font: "opensans",
      align: txt.Align.TOP_CENTER,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 410,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "TTT",
      font: "opensans",
      align: txt.Align.TOP_RIGHT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 820,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "TTT",
      font: "opensans",
      align: txt.Align.MIDDLE_LEFT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 0,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "TTT",
      font: "opensans",
      align: txt.Align.MIDDLE_CENTER,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 410,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "TTT",
      font: "opensans",
      align: txt.Align.MIDDLE_RIGHT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 820,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "TTT",
      font: "opensans",
      align: txt.Align.BOTTOM_LEFT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 0,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "TTT",
      font: "opensans",
      align: txt.Align.BOTTOM_CENTER,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 410,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "TTT",
      font: "opensans",
      align: txt.Align.BOTTOM_RIGHT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 820,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    stage.update();
    return stage;
  }

  function init$n() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
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

  function init$o() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.CharacterText({
      text: "Harland Clarke",
      font: "lobster",
      lineHeight: 300,
      width: 1900,
      height: 300,
      strokeColor: "#444",
      fillColor: null,
      style: [{
        strokeWidth: 1
      }, {
        strokeWidth: 2,
        fillColor: "#FF0000"
      }, {
        strokeWidth: 3
      }, {
        strokeWidth: 4,
        fillColor: "#FF0000"
      }, {
        strokeWidth: 5
      }, {
        strokeWidth: 6,
        fillColor: "#FF0000"
      }, {
        strokeWidth: 7
      }, {
        strokeWidth: 8,
        fillColor: "#FF0000"
      }, {
        strokeWidth: 9
      }, {
        strokeWidth: 10,
        fillColor: "#FF0000"
      }, {
        strokeWidth: 11
      }, {
        strokeWidth: 12,
        fillColor: "#FF0000"
      }, {
        strokeWidth: 13
      }, {
        strokeWidth: 14,
        fillColor: "#FF0000"
      }],
      size: 300,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.addChild(new txt.CharacterText({
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
    }));
    stage.update();
    return stage;
  }

  function init$p() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
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
    return stage;
  }

  function init$q() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
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
    window.setTimeout(function () {
      text.font = "lobster";
      text.layout();
    }, 2000);
    return stage;
  }

  function init$r() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.CharacterText({
      text: "Tracking!          -100",
      font: "librebaskerville",
      lineHeight: 300,
      width: 1900,
      height: 300,
      tracking: -100,
      size: 200,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.CharacterText({
      text: "Tracking!      -50",
      font: "librebaskerville",
      lineHeight: 300,
      width: 1900,
      height: 300,
      tracking: -50,
      size: 200,
      x: 10,
      y: 210
    }));
    stage.addChild(new txt.CharacterText({
      text: "Tracking!     0",
      font: "librebaskerville",
      lineHeight: 300,
      width: 1900,
      height: 300,
      tracking: 0,
      size: 200,
      x: 10,
      y: 410
    }));
    stage.addChild(new txt.CharacterText({
      text: "Tracking!   50",
      font: "librebaskerville",
      lineHeight: 300,
      width: 1900,
      height: 300,
      tracking: 50,
      size: 200,
      x: 10,
      y: 610
    }));
    stage.addChild(new txt.CharacterText({
      text: "Tracking! 100",
      font: "librebaskerville",
      lineHeight: 300,
      width: 1900,
      height: 300,
      tracking: 100,
      size: 200,
      x: 10,
      y: 810
    }));
    stage.update();
    return stage;
  }

  function init$s() {
    var canvas = createHiDPICanvas(2000, 2000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.scaleX = stage.scaleY = 1;
    var i = new createjs.Bitmap("tracking_test.png");
    i.x = 25;
    i.y = 14;
    i.scaleX = i.scaleY = 1;
    stage.addChild(i);
    stage.addChild(new txt.CharacterText({
      text: "0 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 0,
      size: 62,
      x: 100,
      y: 100
    }));
    stage.addChild(new txt.CharacterText({
      text: "100 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 100,
      size: 62,
      x: 100,
      y: 170
    }));
    stage.addChild(new txt.CharacterText({
      text: "200 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 200,
      size: 62,
      x: 100,
      y: 239
    }));
    stage.addChild(new txt.CharacterText({
      text: "300 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 300,
      size: 62,
      x: 100,
      y: 309
    }));
    stage.addChild(new txt.CharacterText({
      text: "400 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 400,
      size: 62,
      x: 100,
      y: 378
    }));
    stage.addChild(new txt.CharacterText({
      text: "500 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 500,
      size: 62,
      x: 100,
      y: 448
    }));
    stage.addChild(new txt.CharacterText({
      text: "0 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 0,
      size: 62,
      x: 100,
      y: 517
    }));
    stage.addChild(new txt.CharacterText({
      text: "100 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 100,
      size: 62,
      x: 100,
      y: 586
    }));
    stage.addChild(new txt.CharacterText({
      text: "200 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 200,
      size: 62,
      x: 100,
      y: 656
    }));
    stage.addChild(new txt.CharacterText({
      text: "300 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 300,
      size: 62,
      x: 100,
      y: 725
    }));
    stage.addChild(new txt.CharacterText({
      text: "400 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 400,
      size: 62,
      x: 100,
      y: 794
    }));
    stage.addChild(new txt.CharacterText({
      text: "500 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 500,
      size: 62,
      x: 100,
      y: 864
    }));
    stage.addChild(new txt.CharacterText({
      text: "0 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 0,
      size: 62,
      x: 100,
      y: 919
    }));
    stage.addChild(new txt.CharacterText({
      text: "100 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 100,
      size: 62,
      x: 100,
      y: 988
    }));
    stage.addChild(new txt.CharacterText({
      text: "200 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 200,
      size: 62,
      x: 100,
      y: 1058
    }));
    stage.addChild(new txt.CharacterText({
      text: "300 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 300,
      size: 62,
      x: 100,
      y: 1127
    }));
    stage.addChild(new txt.CharacterText({
      text: "400 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 400,
      size: 62,
      x: 100,
      y: 1197
    }));
    stage.addChild(new txt.CharacterText({
      text: "500 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 500,
      size: 62,
      x: 100,
      y: 1266
    }));
    stage.addChild(new txt.CharacterText({
      text: "0 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 0,
      size: 29,
      x: 1454,
      y: 95
    }));
    stage.addChild(new txt.CharacterText({
      text: "100 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 100,
      size: 29,
      x: 1454,
      y: 164
    }));
    stage.addChild(new txt.CharacterText({
      text: "200 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 200,
      size: 29,
      x: 1454,
      y: 233
    }));
    stage.addChild(new txt.CharacterText({
      text: "300 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 300,
      size: 29,
      x: 1454,
      y: 303
    }));
    stage.addChild(new txt.CharacterText({
      text: "400 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 400,
      size: 29,
      x: 1454,
      y: 372
    }));
    stage.addChild(new txt.CharacterText({
      text: "500 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 500,
      size: 29,
      x: 1454,
      y: 442
    }));
    stage.addChild(new txt.CharacterText({
      text: "0 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 0,
      size: 29,
      x: 1454,
      y: 511
    }));
    stage.addChild(new txt.CharacterText({
      text: "100 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 100,
      size: 29,
      x: 1454,
      y: 580
    }));
    stage.addChild(new txt.CharacterText({
      text: "200 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 200,
      size: 29,
      x: 1454,
      y: 650
    }));
    stage.addChild(new txt.CharacterText({
      text: "300 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 300,
      size: 29,
      x: 1454,
      y: 719
    }));
    stage.addChild(new txt.CharacterText({
      text: "400 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 400,
      size: 29,
      x: 1454,
      y: 789
    }));
    stage.addChild(new txt.CharacterText({
      text: "500 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 500,
      size: 29,
      x: 1454,
      y: 858
    }));
    stage.addChild(new txt.CharacterText({
      text: "0 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 0,
      size: 29,
      x: 1454,
      y: 920
    }));
    stage.addChild(new txt.CharacterText({
      text: "100 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 100,
      size: 29,
      x: 1454,
      y: 989
    }));
    stage.addChild(new txt.CharacterText({
      text: "200 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 200,
      size: 29,
      x: 1454,
      y: 1060
    }));
    stage.addChild(new txt.CharacterText({
      text: "300 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 300,
      size: 29,
      x: 1454,
      y: 1129
    }));
    stage.addChild(new txt.CharacterText({
      text: "400 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 400,
      size: 29,
      x: 1454,
      y: 1198
    }));
    stage.addChild(new txt.CharacterText({
      text: "500 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 500,
      size: 29,
      x: 1454,
      y: 1268
    }));
    stage.update();
    return stage;
  }

  function init$t() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.CharacterText({
      text: '"Logic will take you from A to B. Imagination will take you everywhere." - Albert Einstein',
      font: "quicksand",
      lineHeight: 100,
      width: 800,
      height: 480,
      size: 80,
      x: 10,
      y: 10,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: '"Logic will take you from A to B. Imagination will take you everywhere." - Albert Einstein',
      font: "righteous",
      lineHeight: 90,
      width: 900,
      height: 450,
      size: 90,
      x: 900,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: '"Logic will take you from A to B. Imagination will take you everywhere." - Albert Einstein',
      font: "lobster",
      lineHeight: 200,
      width: 1700,
      height: 850,
      size: 150,
      x: 20,
      y: 500,
      debug: true
    }));
    stage.update();
    return stage;
  }

  function init$u() {
    var canvas = createHiDPICanvas(1000, 2000, 1);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 260,
      height: 100,
      size: 20,
      x: 10,
      y: 0,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 250,
      height: 100,
      size: 20,
      x: 10,
      y: 100,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 240,
      height: 100,
      size: 20,
      x: 10,
      y: 200,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 230,
      height: 100,
      size: 20,
      x: 10,
      y: 300,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 220,
      height: 100,
      size: 20,
      x: 10,
      y: 400,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 210,
      height: 100,
      size: 20,
      x: 10,
      y: 500,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 200,
      height: 100,
      size: 20,
      x: 10,
      y: 600,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 190,
      height: 100,
      size: 20,
      x: 10,
      y: 700,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 180,
      height: 100,
      size: 20,
      x: 10,
      y: 800,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 170,
      height: 100,
      size: 20,
      x: 10,
      y: 900,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 160,
      height: 100,
      size: 20,
      x: 10,
      y: 1000,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 150,
      height: 100,
      size: 20,
      x: 10,
      y: 1100,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 140,
      height: 100,
      size: 20,
      x: 10,
      y: 1200,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 130,
      height: 100,
      size: 20,
      x: 10,
      y: 1300,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 120,
      height: 120,
      size: 20,
      x: 10,
      y: 1400,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 110,
      height: 120,
      size: 20,
      x: 10,
      y: 1520,
      debug: true
    }));
    stage.addChild(new txt.CharacterText({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 100,
      height: 120,
      size: 20,
      x: 10,
      y: 1640,
      debug: true
    }));
    stage.update();
    return stage;
  }

  function init$v() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
      text: "123 444 555\n6",
      font: "lato",
      align: 4,
      tracking: 0,
      lineHeight: 38.4,
      ligatures: false,
      width: 123.86006745195687,
      height: 146.61010452961662,
      size: 32,
      debug: true,
      x: 10,
      y: 10
    });
    text.scaleX = text.scaleY = 10;
    stage.addChild(text);
    stage.update();
    return stage;
  }

  function init$w() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
      text: "TTT YYY\nWW",
      font: "opensans",
      align: txt.Align.TOP_LEFT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 0,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "TTT YYY\nWW",
      font: "opensans",
      align: txt.Align.TOP_CENTER,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 410,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "TTT YYY\nWW",
      font: "opensans",
      align: txt.Align.TOP_RIGHT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 820,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "TTT YYY\nWW",
      font: "opensans",
      align: txt.Align.MIDDLE_LEFT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 0,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "TTT YYY\nWW",
      font: "opensans",
      align: txt.Align.MIDDLE_CENTER,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 410,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "TTT YYY\nWW",
      font: "opensans",
      align: txt.Align.MIDDLE_RIGHT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 820,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "TTT YYY\nWW",
      font: "opensans",
      align: txt.Align.BOTTOM_LEFT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 0,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "TTT YYY\nWW",
      font: "opensans",
      align: txt.Align.BOTTOM_CENTER,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 410,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.CharacterText({
      text: "TTT YYY\nWW",
      font: "opensans",
      align: txt.Align.BOTTOM_RIGHT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 820,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    stage.update();
    return stage;
  }

  function init$x() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.CharacterText({
      text: "1\n2345\n6789 01",
      font: "lato",
      align: 4,
      tracking: 0,
      lineHeight: 38.4,
      ligatures: false,
      width: 65,
      height: 150,
      size: 32,
      debug: true,
      x: 50,
      y: 50
    });
    text.scaleX = text.scaleY = 10;
    stage.addChild(text);
    stage.update();
    return stage;
  }

  var characterText = {
    accessibility: init,
    alignment: init$1,
    autosize_expand: init$2,
    autosize_reduce: init$3,
    autosize_reduce_expand: init$4,
    autosize_reduce_layout: init$5,
    cache: init$6,
    "case": init$7,
    child_events: init$8,
    column: init$9,
    complete: init$a,
    ligatures: init$b,
    loadtest: init$c,
    moon: init$d,
    multiline_align: init$e,
    multiline_align_breaks: init$f,
    multiline_align_smallcaps: init$g,
    multiline_line_height_larger: init$h,
    multiline_line_height_smaller: init$i,
    multiline_line_height_smaller_breaks: init$j,
    perchar: init$k,
    percharfont: init$l,
    single_word_center_align_tracking: init$m,
    single_word_oneline: init$n,
    stroke: init$o,
    text: init$p,
    text_change_font: init$q,
    tracking: init$r,
    tracking_layout_test: init$s,
    wordwrap: init$t,
    wordwrap_calc: init$u,
    wordwrap_natural_lineheight: init$v,
    wordwrap_natural_newline: init$w,
    wordwrap_newline_error: init$x
  };

  function init$y() {
    var canvas = createHiDPICanvas(1800, 1800, 1);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var a = new createjs.Shape();
    a.graphics.setStrokeStyle(4);
    a.graphics.beginStroke("#00F");
    a.graphics.beginFill("#F00");
    a.graphics.decodeSVGPath("M 300 200 h -150 a 150 150 0 1 0 150 -150 z");
    stage.addChild(a);
    var b = new createjs.Shape();
    b.graphics.setStrokeStyle(4);
    b.graphics.beginStroke("#000");
    b.graphics.beginFill("#FF0");
    b.graphics.decodeSVGPath("M 275 175 v -150 a 150 150 0 0 0 -150 150 z");
    stage.addChild(b);
    var c = new createjs.Shape();
    c.graphics.setStrokeStyle(4);
    c.graphics.beginStroke("#F00");
    c.graphics.decodeSVGPath("M 600 400 l 50 -25 a25 25 -30 0 1 50 -25 l 50 -25 a25 50 -30 0 1 50 -25 l 50 -25 a25 75 -30 0 1 50 -25 l 50 -25 a 25 100 -30 0 1 50 -25 l50 -25");
    stage.addChild(c);
    var d = new createjs.Shape();
    d.graphics.setStrokeStyle(4);
    d.graphics.beginStroke("#F00");
    d.graphics.decodeSVGPath("M 600,75 a100,50 0 0,0 100,50");
    stage.addChild(d);
    d = new createjs.Shape();
    d.graphics.setStrokeStyle(4);
    d.graphics.beginStroke("#0F0");
    d.graphics.decodeSVGPath("M 600,75 a100,50 0 0,1 100,50");
    stage.addChild(d);
    d = new createjs.Shape();
    d.graphics.setStrokeStyle(4);
    d.graphics.beginStroke("#00F");
    d.graphics.decodeSVGPath("M 600,75 a100,50 0 1,0 100,50");
    stage.addChild(d);
    d = new createjs.Shape();
    d.graphics.setStrokeStyle(4);
    d.graphics.beginStroke("#F0F");
    d.graphics.decodeSVGPath("M 600,75 a100,50 0 1,1 100,50");
    stage.addChild(d);
    stage.update();
    return stage;
  }

  function init$z() {
    var canvas = createHiDPICanvas(1800, 1800, 1);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var a = new createjs.Shape();
    a.graphics.setStrokeStyle(10);
    a.graphics.beginStroke("#F00");
    a.graphics.decodeSVGPath("M 25 70 A 40 40 0 1 0 25 69 Z");
    a.graphics.endFill();
    a.graphics.endStroke();
    a.graphics.setStrokeStyle(1);
    a.graphics.beginStroke("#00F");
    a.graphics.beginFill("#0F0");
    a.graphics.decodeSVGPath("m 150 100 a 50 40 0 1 0 25 -70 z");
    a.graphics.endFill();
    a.graphics.endStroke();
    a.graphics.setStrokeStyle(1);
    a.graphics.beginStroke("#000");
    a.graphics.decodeSVGPath("M 350 245 a 40 40 0 1 0 80 60");
    a.graphics.endFill();
    a.graphics.endStroke();
    a.graphics.beginFill("#C0C000");
    a.graphics.decodeSVGPath("M 270 30 A 50 50 0 1 0 345 30 a 50 50 0 1 0 50 0 a 50 50 0 1 0 25 0 z");
    a.graphics.endFill();
    a.graphics.endStroke();
    a.graphics.setStrokeStyle(3);
    a.graphics.beginStroke("#000000");
    a.graphics.beginFill("#CF0000");
    a.graphics.decodeSVGPath("M 30 150 a 40 40 0 0 1 65 50 Z m 30 30 A 20 20 0 0 0 125 230 Z m 40 24 a 20 20 0 0 1 65 50 z"); //M 30 150 a 40 40 0 0 1 65 50 Z
    //m 30 30 A 20 20 0 0 0 125 230 Z
    //m 40 24 a 20 20 0 0 1 65 50 z

    a.graphics.endFill();
    a.graphics.endStroke();
    a.graphics.setStrokeStyle(1);
    a.graphics.beginStroke("#FF0000");
    a.graphics.decodeSVGPath("M 215 190 A 40 200 10 0 0 265 190 A 40 200 20 0 1 315 190 A 40 200 30 0 0 365 190 A 40 200 40 0 1 415 190 A 40 200 50 0 0 465 190");
    stage.addChild(a);
    stage.update();
    return stage;
  }

  var svgPath = "M961 45 C961 69 952 77 942 77 C929 77 917 63 890 63 " + "C843 63 836 120 836 177 C836 277 854 297 854 363 " + "C854 411 828 430 780 430 C739 430 712 419 661 419 " + "C609 419 585 482 543 482 C506 482 469 459 469 422 " + "C469 390 496 370 530 357 C535 333 535 293 535 276 " + "C535 135 411 61 276 61 C188 61 120 117 120 216 " + "C120 309 181 372 269 372 C292 372 340 372 340 338 " + "C340 309 295 289 295 259 C295 237 309 223 351 223 " + "C395 223 436 286 436 331 C436 416 344 438 277 438 " + "C129 438 25 349 25 198 C25 64 136 -21 279 -21 " + "C591 -21 626 201 626 306 L626 335 C635 334 643 333 645 333 " + "C670 333 710 339 730 339 C736 339 741 339 747 337 " + "C752 335 754 326 754 314 C754 277 736 205 736 163 " + "C736 85 752 -12 876 -12 C917 -12 961 3 961 45 L961 45 Z";

  function init$A() {
    var canvas = createHiDPICanvas(1800, 1800, 1);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var a = new createjs.Shape();
    a.graphics.beginFill("#000");
    a.graphics.setStrokeStyle(10);
    a.graphics.beginStroke("#F00");
    a.graphics.decodeSVGPath(svgPath);
    a.graphics.endFill();
    a.graphics.endStroke();
    a.y = 250;
    a.scaleX = 0.5;
    a.scaleY = -0.5;
    stage.addChild(a);
    stage.update();
    return stage;
  }

  var graphics = {
    pathGraphics: init$y,
    pathGraphics2: init$z,
    pathGraphics3: init$A
  };

  function circle(x, y, r) {
    return "M " + x + " " + y + " " + "m " + -r + ",0 " + "a " + r + "," + r + " 0 1,0 " + r * 2 + ",0 " + "a " + r + "," + r + " 0 1,0 " + -r * 2 + ",0";
  }

  function init$B() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.x = 10;
    stage.scaleX = stage.scaleY = 2;
    stage.addChild(new txt.PathText({
      x: 500,
      y: 500,
      flipped: true,
      text: "Yoda, Jedi Master",
      fillColor: "#111",
      font: "lobster",
      start: 2200,
      end: 310,
      align: txt.PathAlign.Center,
      size: 60,
      tracking: 0,
      rotation: 270,
      path: circle(0, 0, 400),
      accessibilityPriority: 0,
      accessibilityText: '<h1><a href="http://en.wikipedia.org/wiki/Yoda">Yoda</a>, Jedi Master</h1>',
      debug: true
    }));
    stage.addChild(new txt.PathText({
      x: 500,
      y: 500,
      flipped: false,
      text: '"Try not. Do or do not. There is no try."',
      fillColor: "#111",
      font: "lobster",
      start: 2300,
      align: txt.PathAlign.Center,
      size: 60,
      tracking: 0,
      rotation: 270,
      path: circle(0, 0, 370),
      accessibilityPriority: 0,
      accessibilityText: '<p>"Try not. Do or do not. There is no try."</p>',
      debug: true
    }));
    stage.update();
    return stage;
  }

  function init$C() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.x = 10;
    stage.scaleX = stage.scaleY = 2;
    stage.addChild(new txt.PathText({
      x: 50,
      y: 50,
      flipped: false,
      text: "Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.",
      fillColor: "#111",
      font: "comfortaa",
      start: 10,
      align: txt.PathAlign.Center,
      size: 30,
      path: "M10 10 H 500 V 500 H 10 L 10 10",
      debug: true,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 300,
      y: 300,
      flipped: false,
      text: "Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.",
      fillColor: "#111",
      font: "comfortaa",
      start: 100,
      align: txt.PathAlign.Left,
      size: 30,
      path: "M10 10 H 500 V 500 H 10 L 10 10",
      debug: true,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 600,
      y: 600,
      flipped: false,
      text: "Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.",
      fillColor: "#111",
      font: "comfortaa",
      start: 0,
      align: txt.PathAlign.Right,
      size: 30,
      path: "M10 10 H 500 V 500 H 10 L 10 10",
      debug: true,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 100,
      y: 50,
      flipped: false,
      text: "Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.",
      fillColor: "#111",
      font: "comfortaa",
      start: 10,
      align: txt.PathAlign.Center,
      size: 30,
      path: "M41,373 L50,351 L60,329 L69,308 L78,287 L87,267 L97,248 L106,230 L115,213 L124,198 L134,185 L143,173 L152,163 L162,154 L171,148 L180,144 L189,142 L199,142 L208,144 L217,148 L226,154 L236,163 L245,173 L254,185 L264,198 L273,213 L282,230 L291,248 L301,267 L310,287 L319,308 L328,329 L338,351 L347,373 L356,395 L366,417 L375,438 L384,459 L393,479 L403,498 L412,516 L421,533 L430,548 L440,561 L449,573 L458,583 L468,592 L477,598 L486,602 L495,604 L505,604 L514,602 L523,598 L532,592 L542,583 L551,573 L560,561 L570,548 L579,533 L588,516 L597,498 L607,479 L616,459 L625,438 L634,417 L644,395 L653,373 L662,351 L672,329 L681,308 L690,287 L699,267 L709,248 L718,230 L727,213 L736,198 L746,185 L755,173 L764,163 L774,154 L783,148 L792,144 L801,142 L811,142 L820,144 L829,148 L838,154 L848,163 L857,173 L866,185 L876,198 L885,213 L894,230 L903,248 L913,267 L922,287 L931,308 L940,329 L950,351 L959,373",
      debug: true,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 100,
      y: 300,
      flipped: false,
      text: "Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.",
      fillColor: "#111",
      font: "comfortaa",
      start: 10,
      align: txt.PathAlign.Left,
      size: 30,
      path: "M41,373 L50,351 L60,329 L69,308 L78,287 L87,267 L97,248 L106,230 L115,213 L124,198 L134,185 L143,173 L152,163 L162,154 L171,148 L180,144 L189,142 L199,142 L208,144 L217,148 L226,154 L236,163 L245,173 L254,185 L264,198 L273,213 L282,230 L291,248 L301,267 L310,287 L319,308 L328,329 L338,351 L347,373 L356,395 L366,417 L375,438 L384,459 L393,479 L403,498 L412,516 L421,533 L430,548 L440,561 L449,573 L458,583 L468,592 L477,598 L486,602 L495,604 L505,604 L514,602 L523,598 L532,592 L542,583 L551,573 L560,561 L570,548 L579,533 L588,516 L597,498 L607,479 L616,459 L625,438 L634,417 L644,395 L653,373 L662,351 L672,329 L681,308 L690,287 L699,267 L709,248 L718,230 L727,213 L736,198 L746,185 L755,173 L764,163 L774,154 L783,148 L792,144 L801,142 L811,142 L820,144 L829,148 L838,154 L848,163 L857,173 L866,185 L876,198 L885,213 L894,230 L903,248 L913,267 L922,287 L931,308 L940,329 L950,351 L959,373",
      debug: true,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 100,
      y: 600,
      flipped: false,
      text: "Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.",
      fillColor: "#111",
      font: "comfortaa",
      start: 10,
      align: txt.PathAlign.Right,
      size: 30,
      path: "M41,373 L50,351 L60,329 L69,308 L78,287 L87,267 L97,248 L106,230 L115,213 L124,198 L134,185 L143,173 L152,163 L162,154 L171,148 L180,144 L189,142 L199,142 L208,144 L217,148 L226,154 L236,163 L245,173 L254,185 L264,198 L273,213 L282,230 L291,248 L301,267 L310,287 L319,308 L328,329 L338,351 L347,373 L356,395 L366,417 L375,438 L384,459 L393,479 L403,498 L412,516 L421,533 L430,548 L440,561 L449,573 L458,583 L468,592 L477,598 L486,602 L495,604 L505,604 L514,602 L523,598 L532,592 L542,583 L551,573 L560,561 L570,548 L579,533 L588,516 L597,498 L607,479 L616,459 L625,438 L634,417 L644,395 L653,373 L662,351 L672,329 L681,308 L690,287 L699,267 L709,248 L718,230 L727,213 L736,198 L746,185 L755,173 L764,163 L774,154 L783,148 L792,144 L801,142 L811,142 L820,144 L829,148 L838,154 L848,163 L857,173 L866,185 L876,198 L885,213 L894,230 L903,248 L913,267 L922,287 L931,308 L940,329 L950,351 L959,373",
      debug: true,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 300,
      y: 300,
      flipped: false,
      text: "Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.",
      fillColor: "#111",
      font: "comfortaa",
      start: 10,
      align: txt.PathAlign.Center,
      size: 30,
      path: circle(0, 0, 280),
      debug: true,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 500,
      y: 500,
      flipped: false,
      text: "Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.",
      fillColor: "#111",
      font: "comfortaa",
      start: 10,
      align: txt.PathAlign.Left,
      size: 30,
      path: circle(0, 0, 280),
      debug: true,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 700,
      y: 700,
      flipped: false,
      text: "Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.",
      fillColor: "#111",
      font: "comfortaa",
      start: 10,
      align: txt.PathAlign.Right,
      size: 30,
      path: circle(0, 0, 280),
      debug: true,
      tracking: 0
    }));
    stage.update();
    return stage;
  }

  function init$D() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas); //set cache to true
    // defaults to false

    txt.FontLoader.cache = true; //set cache version
    //if version changes it will overwrite cache and load data remotely
    //version is stored with the font locally.

    txt.FontLoader.version = 4;
    stage.addChild(new txt.PathText({
      text: "txt.PathText is complete, have a great weekend.",
      font: "lobster",
      align: txt.PathAlign.Right,
      path: "m258.09999999999997,178a48.416000000000004,48.416000000000004 0 0 0 48.416000000000004,48.416000000000004a78.32000000000001,78.32000000000001 0 0 0 78.32000000000001,-78.32000000000001a126.73600000000002,126.73600000000002 0 0 0 -126.73600000000002,-126.73600000000002a205.056,205.056 0 0 0 -205.056,205.056a331.79200000000003,331.79200000000003 0 0 0 331.79200000000003,331.79200000000003a536.8480000000001,536.8480000000001 0 0 0 536.8480000000001,-536.8480000000001",
      tracking: 0,
      size: 90,
      x: 259,
      y: 168,
      debug: true
    }));
    stage.update();
    return stage;
  }

  function init$E() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.scaleX = stage.scaleY = 4;
    stage.addChild(new txt.PathText({
      x: -46.0,
      y: 101.0,
      flipped: false,
      text: "This Is Text On Path This Is Text On Path",
      font: "lobster",
      size: 16,
      valign: txt.VerticalAlign.Center,
      path: "M 226 159.333333333333 C 350.816352746667 159.333333333333 452 123.665351484444 452 79.6666666666667 C 452 35.667981848889 350.816352746667 0 226 0 C 101.183647253333 0 0 35.667981848889 0 79.6666666666667 C 0 123.665351484444 101.183647253333 159.333333333333 226 159.333333333333 Z",
      start: 620.5843673934,
      end: 394.750579307083,
      debug: true,
      tracking: 0
    }));
    stage.update();
    return stage;
  }

  function init$F() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.PathText({
      text: ".............mmmmmmm,kkkkkkkk.....txt.PathText is complete, have a great weekend.",
      font: "lobster",
      minSize: 80,
      autoReduce: true,
      align: txt.PathAlign.Center,
      path: "m258.09999999999997,178a48.416000000000004,48.416000000000004 0 0 0 48.416000000000004,48.416000000000004a78.32000000000001,78.32000000000001 0 0 0 78.32000000000001,-78.32000000000001a126.73600000000002,126.73600000000002 0 0 0 -126.73600000000002,-126.73600000000002a205.056,205.056 0 0 0 -205.056,205.056a331.79200000000003,331.79200000000003 0 0 0 331.79200000000003,331.79200000000003a536.8480000000001,536.8480000000001 0 0 0 536.8480000000001,-536.8480000000001",
      tracking: 0,
      character: {
        click: function click(event) {
          console.log("click");
        }
      },
      size: 90,
      x: 259,
      y: 168,
      debug: true
    }));
    stage.update();
    return stage;
  }

  function init$G() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.x = 50;
    stage.y = 50;
    stage.scaleX = stage.scaleY = 8;
    stage.addChild(new txt.PathText({
      autoExpand: true,
      autoReduce: true,
      characterCase: 1,
      start: 400,
      end: 400,
      fillColor: "#231f20",
      flipped: false,
      font: "roboto",
      height: 104.0489,
      maxSize: 120,
      minSize: 8,
      path: "M 52.4 104.048956523861 C 81.3397207253334 104.048956523861 104.8 80.7568137917513 104.8 52.0245 C 104.8 23.2921862082486 81.3397207253334 0.00004347613943 52.4 0.00004347613943 C 23.4602792746667 0.00004347613943 8.88178419700125e-15 23.2921862082486 8.88178419700125e-15 52.0245 C 8.88178419700125e-15 80.7568137917513 23.4602792746667 104.048956523861 52.4 104.048956523861 Z ",
      singleLine: true,
      size: 12,
      strokeColor: "#231f20",
      strokeWidth: 0,
      text: "JESSICA THOMPSON • JESSICA THOMPSON • JESSICA THOMPSON • ",
      tracking: 18,
      valign: 2,
      width: 104.8,
      x: 0,
      y: 0,
      debug: false
    }));
    stage.update();
    return stage;
  }

  function init$H() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.x = 10;
    stage.scaleX = stage.scaleY = 2;
    stage.addChild(new txt.PathText({
      x: 500,
      y: 500,
      flipped: true,
      text: "Yoda, Jedi Master",
      fillColor: "#111",
      font: "lobster",
      start: 2200,
      end: 310,
      align: txt.PathAlign.Center,
      size: 60,
      tracking: 0,
      rotation: 270,
      path: circle(0, 0, 400),
      debug: true
    }));
    stage.addChild(new txt.PathText({
      x: 500,
      y: 500,
      flipped: false,
      text: '"Try not. Do or do not. There is no try."',
      fillColor: "#111",
      font: "lobster",
      start: 2300,
      align: txt.PathAlign.Center,
      size: 60,
      tracking: 0,
      rotation: 270,
      path: circle(0, 0, 370),
      debug: true
    }));
    stage.update();
    return stage;
  }

  function init$I() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.x = 10;
    stage.scaleX = stage.scaleY = 2;
    stage.addChild(new txt.PathText({
      x: 500,
      y: 500,
      flipped: true,
      text: "Yoda, Jedi Master",
      fillColor: "#111",
      font: "lobster",
      start: 2200,
      end: 310,
      align: txt.PathAlign.Center,
      initialTracking: 200,
      size: 60,
      tracking: 0,
      rotation: 270,
      path: circle(0, 0, 400),
      debug: true
    }));
    stage.addChild(new txt.PathText({
      x: 500,
      y: 500,
      flipped: false,
      text: '"Try not. Do or do not. There is no try."',
      fillColor: "#111",
      font: "lobster",
      start: 2300,
      align: txt.PathAlign.Center,
      initialTracking: 200,
      size: 60,
      tracking: 0,
      rotation: 270,
      path: circle(0, 0, 370),
      debug: true
    }));
    stage.update();
    return stage;
  }

  function init$J() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.scaleX = stage.scaleY = 4;
    stage.addChild(new txt.PathText({
      x: -46.0,
      y: 101.0,
      flipped: false,
      text: "This Is Text On Path",
      font: "lobster",
      size: 16,
      valign: txt.VerticalAlign.Center,
      path: "M 226 159.333333333333 C 350.816352746667 159.333333333333 452 123.665351484444 452 79.6666666666667 C 452 35.667981848889 350.816352746667 0 226 0 C 101.183647253333 0 0 35.667981848889 0 79.6666666666667 C 0 123.665351484444 101.183647253333 159.333333333333 226 159.333333333333 Z",
      start: 620.5843673934,
      end: 394.750579307083,
      debug: true,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: -46.0,
      y: 267.3333,
      flipped: true,
      text: "This Is Text On Path Inverted",
      font: "lobster",
      size: 16,
      path: "M 226 159.333366666667 C 350.816352746667 159.333366666667 452 123.665384817778 452 79.6667 C 452 35.6680151822221 350.816352746667 0.00003333333325 226 0.00003333333325 C 101.183647253333 0.00003333333325 0 35.6680151822221 0 79.6667 C 0 123.665384817778 101.183647253333 159.333366666667 226 159.333366666667 Z",
      start: 904.155004709136,
      end: 115.333461219884,
      debug: false,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 36.0,
      y: 160.5833,
      flipped: false,
      text: "This is curvy path text... groovy right? I think so, how about you?",
      font: "montserrat",
      size: 11,
      path: "M 0 57.7500333333333 C 0 57.7500333333333 28.5 0.00003333333342 66 0.00003333333342 C 103.5 0.00003333333342 126 54.6667 130.5 63.0000333333333 C 135 71.3333666666666 162.75 99.7500333333333 221.25 99.7500333333333 C 279.75 99.7500333333333 288 58.5000333333332 288 44.2500333333333 C 288 30.0000333333333 0 57.7500333333333 0 57.7500333333333",
      start: 0,
      end: 385.455997043843,
      debug: false,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 36.0,
      y: 202.125,
      flipped: false,
      text: "This is curvy path text... with different brackets",
      font: "montserrat",
      size: 11,
      path: "M 0 57.7499999999999 C 0 57.7499999999999 28.5 5.6843418860808e-14 66 5.6843418860808e-14 C 103.5 5.6843418860808e-14 126 54.6666666666667 130.5 63 C 135 71.3333333333333 162.75 99.7499999999999 221.25 99.7499999999999 C 279.75 99.7499999999999 288 58.4999999999999 288 44.2499999999999 C 288 30 0 57.7499999999999 0 57.7499999999999",
      start: 53.2193374753861,
      end: 338.528731735386,
      debug: false,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 34.333,
      y: 334.6667,
      flipped: false,
      text: "This is curvy path text... with different brackets",
      font: "montserrat",
      size: 11,
      path: "M 0.00033333333334 -0.00003333333336 C 0.00033333333334 -0.00003333333336 -0.66633333333331 35.0833 62.3336666666667 35.0833 C 125.333666666667 35.0833 106.417 9.66663333333332 143.167 9.66663333333332 C 156.162050473979 9.66663333333332 179.332999643764 34.1360425930804 212.333333155215 15.2346712965402 C 245.333666666667 -3.66669999999999 284.667 42.7503779620275 284.667 12.2083 C 284.667 -35.0417 0.00033333333334 -0.00003333333336 0.00033333333334 -0.00003333333336",
      start: 34.2411224396698,
      end: 316.709414697189,
      debug: false,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 42.3333,
      y: 289.6667,
      flipped: false,
      text: "Line Text",
      font: "lobster",
      size: 16,
      path: "M 0.00003333333334 31.3333 L 74.6667 -0.00003333333336 L 0.00003333333334 31.3333",
      start: 0,
      end: 80.9746187943413,
      debug: false,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 170.0,
      y: 129.3333,
      flipped: false,
      text: "Strange box text... I’m not sure about this...",
      font: "montserrat",
      size: 10,
      path: "M 0 0.00003333333331 L 0 35.0833666666666 L 73 35.0833666666666 L 73 0.00003333333331 L 0 0.00003333333331 Z",
      start: 214.5,
      end: 0,
      debug: false,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 259.6667,
      y: 168.0,
      flipped: false,
      text: "Polygon text is also very odd",
      font: "montserrat",
      size: 11,
      path: "M 45.6106379326471 0 L 15.2035237553268 0 L -0.00003333333336 26.3333333333333 L 15.2035237553268 52.6666666666666 L 45.6106379326471 52.6666666666667 L 60.8141950213072 26.3333333333333 L 45.6106379326471 0 Z",
      start: 29.9443379326471,
      end: 30.9443379326471,
      debug: false,
      tracking: 0
    }));
    stage.update();
    return stage;
  }

  function init$K() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.PathText({
      text: ".............mmmmmmm,kkkkkkkk.....txt.PathText is complete, have a great weekend.",
      font: "lobster",
      minSize: 80,
      autoReduce: true,
      align: txt.PathAlign.Center,
      path: "m258.09999999999997,178a48.416000000000004,48.416000000000004 0 0 0 48.416000000000004,48.416000000000004a78.32000000000001,78.32000000000001 0 0 0 78.32000000000001,-78.32000000000001a126.73600000000002,126.73600000000002 0 0 0 -126.73600000000002,-126.73600000000002a205.056,205.056 0 0 0 -205.056,205.056a331.79200000000003,331.79200000000003 0 0 0 331.79200000000003,331.79200000000003a536.8480000000001,536.8480000000001 0 0 0 536.8480000000001,-536.8480000000001",
      tracking: 0,
      size: 90,
      x: 259,
      y: 168,
      debug: true
    }));
    stage.update();
    return stage;
  }

  function init$L() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.x = 10;
    stage.scaleX = 2;
    stage.scaleY = 2;
    stage.addChild(new txt.PathText({
      x: 500,
      y: 600,
      flipped: false,
      text: "Path Alignment",
      fillColor: "#111",
      font: "lobster",
      start: 2500,
      end: 0,
      align: txt.PathAlign.Center,
      valign: txt.VerticalAlign.Center,
      size: 150,
      tracking: 0,
      rotation: 270,
      path: circle(0, 0, 400),
      debug: true
    }));
    stage.addChild(new txt.PathText({
      x: 500,
      y: 600,
      flipped: false,
      text: "Victory",
      fillColor: "#111",
      font: "lobster",
      start: 2500,
      align: txt.PathAlign.Center,
      valign: txt.VerticalAlign.Percent,
      valignPercent: 0.001,
      size: 200,
      tracking: 0,
      rotation: 270,
      path: circle(0, 0, 400),
      debug: true
    }));
    stage.update();
    return stage;
  }

  function init$M() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.scaleX = stage.scaleY = 4;
    stage.addChild(new txt.PathText({
      x: 27,
      y: 101.0,
      flipped: false,
      text: "Vertical Alignment Vertical Alignment Vertical Alignment",
      font: "lobster",
      size: 40,
      valign: txt.VerticalAlign.BaseLine,
      path: "M 226 159.333333333333 C 350.816352746667 159.333333333333 452 123.665351484444 452 79.6666666666667 C 452 35.667981848889 350.816352746667 0 226 0 C 101.183647253333 0 0 35.667981848889 0 79.6666666666667 C 0 123.665351484444 101.183647253333 159.333333333333 226 159.333333333333 Z",
      start: 620.5843673934,
      end: 394.750579307083,
      debug: true,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 27,
      y: 101.0,
      flipped: false,
      text: "Vertical Alignment Vertical Alignment Vertical Alignment",
      font: "lobster",
      size: 40,
      valign: txt.VerticalAlign.Top,
      path: "M 226 159.333333333333 C 350.816352746667 159.333333333333 452 123.665351484444 452 79.6666666666667 C 452 35.667981848889 350.816352746667 0 226 0 C 101.183647253333 0 0 35.667981848889 0 79.6666666666667 C 0 123.665351484444 101.183647253333 159.333333333333 226 159.333333333333 Z",
      start: 620.5843673934,
      end: 394.750579307083,
      debug: true,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 27,
      y: 101.0,
      flipped: false,
      text: "Vertical Alignment Vertical Alignment Vertical Alignment",
      font: "lobster",
      size: 40,
      valign: txt.VerticalAlign.Center,
      path: "M 226 159.333333333333 C 350.816352746667 159.333333333333 452 123.665351484444 452 79.6666666666667 C 452 35.667981848889 350.816352746667 0 226 0 C 101.183647253333 0 0 35.667981848889 0 79.6666666666667 C 0 123.665351484444 101.183647253333 159.333333333333 226 159.333333333333 Z",
      start: 620.5843673934,
      end: 394.750579307083,
      debug: true,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 27,
      y: 101.0,
      flipped: false,
      text: "Vertical Alignment Vertical Alignment Vertical Alignment",
      font: "lobster",
      size: 40,
      valign: txt.VerticalAlign.CapHeight,
      path: "M 226 159.333333333333 C 350.816352746667 159.333333333333 452 123.665351484444 452 79.6666666666667 C 452 35.667981848889 350.816352746667 0 226 0 C 101.183647253333 0 0 35.667981848889 0 79.6666666666667 C 0 123.665351484444 101.183647253333 159.333333333333 226 159.333333333333 Z",
      start: 620.5843673934,
      end: 394.750579307083,
      debug: true,
      tracking: 0
    }));
    stage.addChild(new txt.PathText({
      x: 27,
      y: 101.0,
      flipped: false,
      text: "Vertical Alignment Vertical Alignment Vertical Alignment",
      font: "lobster",
      size: 40,
      valign: txt.VerticalAlign.Bottom,
      path: "M 226 159.333333333333 C 350.816352746667 159.333333333333 452 123.665351484444 452 79.6666666666667 C 452 35.667981848889 350.816352746667 0 226 0 C 101.183647253333 0 0 35.667981848889 0 79.6666666666667 C 0 123.665351484444 101.183647253333 159.333333333333 226 159.333333333333 Z",
      start: 620.5843673934,
      end: 394.750579307083,
      debug: true,
      tracking: 0
    }));
    stage.update();
    return stage;
  }

  var pathText = {
    accessibility: init$B,
    alignment: init$C,
    cache: init$D,
    character_limit: init$E,
    child_events: init$F,
    circle_last_char: init$G,
    flipped: init$H,
    initial: init$I,
    layout: init$J,
    text: init$K,
    vertical_alignment: init$L,
    vertical_alignment_layout: init$M
  };

  function init$N() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.Text({
      text: "First poiretone",
      font: "poiretone",
      align: txt.Align.TOP_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 0,
      accessibilityPriority: 0,
      accessibilityText: "<h1>First poiretone</h1>",
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "Second poiretone",
      font: "poiretone",
      align: txt.Align.TOP_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 0,
      accessibilityPriority: 1,
      accessibilityText: "<h2>Second poiretone</h2>",
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "Third poiretone",
      font: "poiretone",
      align: txt.Align.TOP_RIGHT,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 0,
      accessibilityPriority: 2,
      accessibilityText: "<h3>Third poiretone</h3>",
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "ANOTHER 1 poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 410,
      accessibilityPriority: 0,
      accessibilityText: "<h1>ANOTHER 1 poiretone</h1>",
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "low 5 poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 410,
      accessibilityPriority: 5,
      accessibilityText: "<p>low 5 poiretone</p>",
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "poiretone default",
      font: "poiretone",
      align: txt.Align.MIDDLE_RIGHT,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "low 3 poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 820,
      accessibilityPriority: 3,
      accessibilityText: "<p>low 3 poiretone</p>",
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "another default poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "bottom 7 poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_RIGHT,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 820,
      accessibilityPriority: 7,
      accessibilityText: "<p>bottom 7 poiretone</p>",
      debug: true
    });
    stage.addChild(text);
    stage.update();
    return stage;
  }

  function init$O() {
    var canvas = createHiDPICanvas(1100, 1100, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var shape = new createjs.Shape();
    shape.graphics.beginFill("#76d6ff");
    shape.graphics.drawRect(10, 10, 1000, 1000);
    stage.addChild(shape);
    stage.addChild(new txt.Text({
      text: "< Align.TOP_LEFT",
      font: "cantarell",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.TOP_LEFT,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.Text({
      text: "Align.TOP_RIGHT >",
      font: "amaticsc",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.TOP_RIGHT,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.Text({
      text: "< Align.TOP_CENTER >",
      font: "glegoo",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.TOP_CENTER,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.Text({
      text: "< Align.MIDDLE_LEFT",
      font: "indieflower",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.MIDDLE_LEFT,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.Text({
      text: "Align.MIDDLE_RIGHT >",
      font: "lato",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.MIDDLE_RIGHT,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.Text({
      text: "< Align.MIDDLE_CENTER >",
      font: "luckiestguy",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.MIDDLE_CENTER,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.Text({
      text: "< Align.BOTTOM_LEFT",
      font: "opensans",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.BOTTOM_LEFT,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.Text({
      text: "Align.BOTTOM_RIGHT >",
      font: "nixieone",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.BOTTOM_RIGHT,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.Text({
      text: "< Align.BOTTOM_CENTER >",
      font: "pacifico",
      lineHeight: 50,
      width: 1000,
      height: 1000,
      align: txt.Align.BOTTOM_CENTER,
      size: 25,
      x: 10,
      y: 10
    }));
    stage.update();
    return stage;
  }

  function init$P() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas); //set cache to true
    // defaults to false

    txt.FontLoader.cache = true; //set cache version
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
    return stage;
  }

  function init$Q() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.Text({
      text: speech,
      font: "poiretone",
      lineHeight: 70,
      align: txt.Align.TOP_LEFT,
      width: 1800,
      height: 1800,
      size: 70,
      x: 20,
      y: 20,
      debug: true
    });
    stage.addChild(text);
    stage.update();
    return stage;
  }

  function init$R() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.Text({
      text: "Hello World",
      font: "play",
      characterCase: txt.Case.NORMAL,
      lineHeight: 100,
      width: 800,
      height: 100,
      size: 100,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.Text({
      text: "Hello World",
      font: "play",
      characterCase: txt.Case.UPPER,
      lineHeight: 100,
      width: 800,
      height: 100,
      size: 100,
      x: 10,
      y: 120
    }));
    stage.addChild(new txt.Text({
      text: "Hello World",
      font: "play",
      characterCase: txt.Case.LOWER,
      lineHeight: 100,
      width: 800,
      height: 100,
      size: 100,
      x: 10,
      y: 230
    }));
    stage.addChild(new txt.Text({
      text: "Hello World",
      font: "play",
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 100,
      width: 800,
      height: 100,
      size: 100,
      x: 10,
      y: 340
    }));
    stage.update();
    return stage;
  }

  function init$S() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.Text({
      text: "The fox jumped over the log.",
      font: "raleway",
      align: txt.Align.TOP_RIGHT,
      tracking: -4,
      character: {
        click: function click(event) {
          console.log("click");
        }
      },
      lineHeight: 120,
      width: 600,
      height: 360,
      size: 120,
      x: 10,
      y: 10
    });
    stage.addChild(text);
    stage.update();
    return stage;
  }

  function init$T() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.Text({
      text: "The fox jumped over the log.",
      font: "arimo",
      complete: function complete() {
        console.log("complete");
      },
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
    return stage;
  }

  function init$U() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas); //NOTE - If ligatures are not exported within the font, they will not be swapped in Text

    var text = new txt.Text({
      text: "Chess Onward The big blue file brush Who be dribble flower office",
      font: "lobster",
      tracking: 0,
      lineHeight: 200,
      width: 1800,
      height: 600,
      ligatures: true,
      align: txt.Align.TOP_LEFT,
      size: 200,
      x: 50,
      y: 50,
      debug: true
    });
    stage.addChild(text);
    stage.update();
    return stage;
  }

  function init$V() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var i = 1;
    var h = 8;

    while (i < 30) {
      h = h + 5 * i;
      stage.addChild(new txt.Text({
        text: '"Logic will take you from A to B. Imagination will take you everywhere." - Albert Einstein',
        font: "righteous",
        fillColor: null,
        strokeWidth: 2,
        strokeColor: "#d48",
        lineHeight: h * 1.4,
        height: h * 1.4,
        width: 50000,
        size: h,
        y: h * 1.4
      }));
      i++;
    }

    stage.update();
    return stage;
  }

  function init$W() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.Text({
      text: speech,
      font: "poiretone",
      lineHeight: 70,
      align: txt.Align.TOP_LEFT,
      width: 1800,
      height: 1800,
      size: 70,
      x: 20,
      y: 20,
      debug: true
    });
    stage.addChild(text);
    stage.update();
    return stage;
  }

  function init$X() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.Text({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.TOP_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.TOP_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.TOP_RIGHT,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_RIGHT,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love me some poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_RIGHT,
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

  function init$Y() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text;
    text = new txt.Text({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.TOP_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.TOP_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.TOP_RIGHT,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_RIGHT,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_LEFT,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_CENTER,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love me\nsome\npoiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_RIGHT,
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

  function init$Z() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.Text({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.TOP_LEFT,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.TOP_CENTER,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.TOP_RIGHT,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_LEFT,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_CENTER,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_RIGHT,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_LEFT,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_CENTER,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "Love me some poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_RIGHT,
      characterCase: txt.Case.SMALL_CAPS,
      lineHeight: 50,
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

  function init$_() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.Text({
      text: "love\n me some\n poiretone",
      font: "poiretone",
      align: txt.Align.TOP_LEFT,
      lineHeight: 140,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love\n me some\n poiretone",
      font: "poiretone",
      align: txt.Align.TOP_CENTER,
      lineHeight: 140,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love\n me some\n poiretone",
      font: "poiretone",
      align: txt.Align.TOP_RIGHT,
      lineHeight: 140,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love\n me some\n poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_LEFT,
      lineHeight: 140,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love\n me some\n poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_CENTER,
      lineHeight: 140,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love\n me some\n poiretone",
      font: "poiretone",
      align: txt.Align.MIDDLE_RIGHT,
      lineHeight: 140,
      width: 400,
      height: 400,
      size: 100,
      x: 820,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love\n me some\n poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_LEFT,
      lineHeight: 140,
      width: 400,
      height: 400,
      size: 100,
      x: 0,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love\n me some\n poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_CENTER,
      lineHeight: 140,
      width: 400,
      height: 400,
      size: 100,
      x: 410,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "love\n me some\n poiretone",
      font: "poiretone",
      align: txt.Align.BOTTOM_RIGHT,
      lineHeight: 140,
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

  function init$$() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.Text({
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
    text = new txt.Text({
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
    text = new txt.Text({
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
    text = new txt.Text({
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
    text = new txt.Text({
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
    text = new txt.Text({
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
    text = new txt.Text({
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
    text = new txt.Text({
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
    text = new txt.Text({
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

  function init$10() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.Text({
      text: "love\nme some\npoirtone",
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
    text = new txt.Text({
      text: "love\nme some\npoirtone",
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
    text = new txt.Text({
      text: "love\nme some\npoirtone",
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
    text = new txt.Text({
      text: "love\nme some\npoirtone",
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
    text = new txt.Text({
      text: "love\nme some\npoirtone",
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
    text = new txt.Text({
      text: "love\nme some\npoirtone",
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
    text = new txt.Text({
      text: "love\nme some\npoirtone",
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
    text = new txt.Text({
      text: "love\nme some\npoirtone",
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
    text = new txt.Text({
      text: "love\nme some\npoirtone",
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

  function init$11() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.Text({
      text: "LARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER",
      font: "comfortaa",
      style: [{
        size: 1
      }, {
        size: 2
      }, {
        size: 4
      }, {
        size: 6
      }, {
        size: 8
      }, {
        size: 10
      }, {
        size: 12
      }, {
        size: 14
      }, {
        size: 16
      }, {
        size: 18
      }, {
        size: 20
      }, {
        size: 22
      }, {
        size: 24
      }, {
        size: 26
      }, {
        size: 28
      }, {
        size: 30
      }, {
        size: 32
      }, {
        size: 34
      }, {
        size: 36
      }, {
        size: 38
      }, {
        size: 40
      }, {
        size: 42
      }, {
        size: 44
      }, {
        size: 46
      }, {
        size: 48
      }, {
        size: 50
      }, {
        size: 52
      }, {
        size: 54
      }, {
        size: 56
      }, {
        size: 58
      }, {
        size: 60
      }, {
        size: 62
      }, {
        size: 64
      }, {
        size: 66
      }, {
        size: 68
      }, {
        size: 70
      }, {
        size: 72
      }, {
        size: 77
      }, {
        size: 76
      }, {
        size: 78
      }, {
        size: 80
      }, {
        size: 82
      }, {
        size: 84
      }, {
        size: 86
      }, {
        size: 88
      }, {
        size: 90
      }, {
        size: 92
      }, {
        size: 94
      }, {
        size: 96
      }, {
        size: 98
      }, {
        size: 100
      }, {
        size: 102
      }, {
        size: 104
      }, {
        size: 106
      }, {
        size: 108
      }, {
        size: 110
      }, {
        size: 112
      }, {
        size: 114
      }, {
        size: 116
      }, {
        size: 118
      }, {
        size: 120
      }, {
        size: 122
      }, {
        size: 124
      }, {
        size: 126
      }, {
        size: 128
      }, {
        size: 130
      }, {
        size: 132
      }, {
        size: 134
      }, {
        size: 136
      }, {
        size: 138
      }, {
        size: 140
      }, {
        size: 142
      }, {
        size: 144
      }, {
        size: 146
      }, {
        size: 148
      }, {
        size: 140
      }, {
        size: 142
      }, {
        size: 144
      }, {
        size: 146
      }, {
        size: 148
      }, {
        size: 150
      }, {
        size: 152
      }, {
        size: 154
      }, {
        size: 156
      }, {
        size: 158
      }, {
        size: 160
      }, {
        size: 162
      }, {
        size: 164
      }, {
        size: 166
      }, {
        size: 168
      }, {
        size: 170
      }, {
        size: 172
      }, {
        size: 174
      }, {
        size: 176
      }, {
        size: 178
      }, {
        size: 180
      }, {
        size: 182
      }, {
        size: 184
      }, {
        size: 186
      }, {
        size: 188
      }],
      width: 1800,
      align: txt.Align.TOP_LEFT,
      size: 150,
      x: 10,
      y: 10
    }));
    stage.update();
    return stage;
  }

  function init$12() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.Text({
      text: "LARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER &\nLARGER",
      font: "comfortaa",
      style: [{
        size: 1
      }, {
        size: 2
      }, {
        size: 4
      }, {
        size: 6,
        font: "dancingscript"
      }, {
        size: 8,
        font: "dancingscript"
      }, {
        size: 10,
        font: "dancingscript"
      }, {
        size: 12,
        font: "dancingscript"
      }, {
        size: 14,
        font: "dancingscript"
      }, {
        size: 16
      }, {
        size: 18
      }, {
        size: 20
      }, {
        size: 22
      }, {
        size: 24
      }, {
        size: 26
      }, {
        size: 28
      }, {
        size: 30
      }, {
        size: 32
      }, {
        size: 34
      }, {
        size: 36
      }, {
        size: 38
      }, {
        size: 40
      }, {
        size: 42
      }, {
        size: 44
      }, {
        size: 46
      }, {
        size: 48
      }, {
        size: 50
      }, {
        size: 52
      }, {
        size: 54
      }, {
        size: 56
      }, {
        size: 58
      }, {
        size: 60
      }, {
        size: 62
      }, {
        size: 64
      }, {
        size: 66
      }, {
        size: 68
      }, {
        size: 70
      }, {
        size: 72
      }, {
        size: 77
      }, {
        size: 76
      }, {
        size: 78
      }, {
        size: 80
      }, {
        size: 82
      }, {
        size: 84
      }, {
        size: 86,
        font: "dancingscript"
      }, {
        size: 88,
        font: "dancingscript"
      }, {
        size: 90,
        font: "dancingscript"
      }, {
        size: 92,
        font: "dancingscript"
      }, {
        size: 94
      }, {
        size: 96
      }, {
        size: 98
      }, {
        size: 100
      }, {
        size: 102
      }, {
        size: 104
      }, {
        size: 106
      }, {
        size: 108
      }, {
        size: 110
      }, {
        size: 112
      }, {
        size: 114
      }, {
        size: 116,
        font: "dancingscript"
      }, {
        size: 118,
        font: "dancingscript"
      }, {
        size: 120,
        font: "dancingscript"
      }, {
        size: 122,
        font: "dancingscript"
      }, {
        size: 124,
        font: "dancingscript"
      }, {
        size: 126
      }, {
        size: 128
      }, {
        size: 130
      }, {
        size: 132,
        font: "lobster"
      }, {
        size: 134,
        font: "lobster"
      }, {
        size: 148,
        font: "lobster"
      }, {
        size: 140,
        font: "lobster"
      }, {
        size: 142,
        font: "lobster"
      }, {
        size: 144,
        font: "lobster"
      }, {
        size: 146,
        font: "lobster"
      }, {
        size: 148
      }, {
        size: 150,
        font: "lobster"
      }, {
        size: 152
      }, {
        size: 154
      }, {
        size: 156,
        font: "dancingscript"
      }, {
        size: 158,
        font: "dancingscript"
      }, {
        size: 160,
        font: "dancingscript"
      }, {
        size: 162
      }, {
        size: 164
      }, {
        size: 166
      }, {
        size: 168
      }, {
        size: 170
      }, {
        size: 172
      }, {
        size: 174
      }, {
        size: 176
      }, {
        size: 178
      }, {
        size: 180
      }, {
        size: 182
      }, {
        size: 184
      }, {
        size: 186
      }, {
        size: 188
      }],
      width: 1800,
      align: txt.Align.TOP_LEFT,
      size: 150,
      x: 10,
      y: 10
    }));
    stage.update();
    return stage;
  }

  function init$13() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text;
    text = new txt.Text({
      text: "TTT",
      font: "opensans",
      align: txt.Align.TOP_LEFT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 0,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "TTT",
      font: "opensans",
      align: txt.Align.TOP_CENTER,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 410,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "TTT",
      font: "opensans",
      align: txt.Align.TOP_RIGHT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 820,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "TTT",
      font: "opensans",
      align: txt.Align.MIDDLE_LEFT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 0,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "TTT",
      font: "opensans",
      align: txt.Align.MIDDLE_CENTER,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 410,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "TTT",
      font: "opensans",
      align: txt.Align.MIDDLE_RIGHT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 820,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "TTT",
      font: "opensans",
      align: txt.Align.BOTTOM_LEFT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 0,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "TTT",
      font: "opensans",
      align: txt.Align.BOTTOM_CENTER,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 410,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "TTT",
      font: "opensans",
      align: txt.Align.BOTTOM_RIGHT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 250,
      x: 820,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    stage.update();
    return stage;
  }

  function init$14() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.Text({
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
    text = new txt.Text({
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
    text = new txt.Text({
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
    text = new txt.Text({
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
    text = new txt.Text({
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
    text = new txt.Text({
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
    text = new txt.Text({
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
    text = new txt.Text({
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
    text = new txt.Text({
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

  function init$15() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.Text({
      text: "Harland Clarke",
      font: "lobster",
      lineHeight: 300,
      width: 1900,
      height: 300,
      strokeColor: "#444",
      fillColor: null,
      style: [{
        strokeWidth: 1
      }, {
        strokeWidth: 2,
        fillColor: "#FF0000"
      }, {
        strokeWidth: 3
      }, {
        strokeWidth: 4,
        fillColor: "#FF0000"
      }, {
        strokeWidth: 5
      }, {
        strokeWidth: 6,
        fillColor: "#FF0000"
      }, {
        strokeWidth: 7
      }, {
        strokeWidth: 8,
        fillColor: "#FF0000"
      }, {
        strokeWidth: 9
      }, {
        strokeWidth: 10,
        fillColor: "#FF0000"
      }, {
        strokeWidth: 11
      }, {
        strokeWidth: 12,
        fillColor: "#FF0000"
      }, {
        strokeWidth: 13
      }, {
        strokeWidth: 14,
        fillColor: "#FF0000"
      }],
      size: 300,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.Text({
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
    }));
    stage.addChild(new txt.Text({
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
    }));
    stage.update();
    return stage;
  }

  function init$16() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
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
    return stage;
  }

  function init$17() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
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
    window.setTimeout(function () {
      text.font = "lobster";
      text.layout();
    }, 2000);
    return stage;
  }

  function init$18() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.Text({
      text: "Tracking!          -100",
      font: "librebaskerville",
      lineHeight: 300,
      width: 1900,
      height: 300,
      tracking: -100,
      size: 200,
      x: 10,
      y: 10
    }));
    stage.addChild(new txt.Text({
      text: "Tracking!      -50",
      font: "librebaskerville",
      lineHeight: 300,
      width: 1900,
      height: 300,
      tracking: -50,
      size: 200,
      x: 10,
      y: 210
    }));
    stage.addChild(new txt.Text({
      text: "Tracking!     0",
      font: "librebaskerville",
      lineHeight: 300,
      width: 1900,
      height: 300,
      tracking: 0,
      size: 200,
      x: 10,
      y: 410
    }));
    stage.addChild(new txt.Text({
      text: "Tracking!   50",
      font: "librebaskerville",
      lineHeight: 300,
      width: 1900,
      height: 300,
      tracking: 50,
      size: 200,
      x: 10,
      y: 610
    }));
    stage.addChild(new txt.Text({
      text: "Tracking! 100",
      font: "librebaskerville",
      lineHeight: 300,
      width: 1900,
      height: 300,
      tracking: 100,
      size: 200,
      x: 10,
      y: 810
    }));
    stage.update();
    return stage;
  }

  function init$19() {
    var canvas = createHiDPICanvas(2000, 2000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.scaleX = stage.scaleY = 1;
    var i = new createjs.Bitmap("tracking_test.png");
    i.x = 25;
    i.y = 14;
    i.scaleX = i.scaleY = 1;
    stage.addChild(i);
    stage.addChild(new txt.Text({
      text: "0 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 0,
      size: 62,
      x: 100,
      y: 100
    }));
    stage.addChild(new txt.Text({
      text: "100 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 100,
      size: 62,
      x: 100,
      y: 170
    }));
    stage.addChild(new txt.Text({
      text: "200 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 200,
      size: 62,
      x: 100,
      y: 239
    }));
    stage.addChild(new txt.Text({
      text: "300 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 300,
      size: 62,
      x: 100,
      y: 309
    }));
    stage.addChild(new txt.Text({
      text: "400 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 400,
      size: 62,
      x: 100,
      y: 378
    }));
    stage.addChild(new txt.Text({
      text: "500 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 500,
      size: 62,
      x: 100,
      y: 448
    }));
    stage.addChild(new txt.Text({
      text: "0 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 0,
      size: 62,
      x: 100,
      y: 517
    }));
    stage.addChild(new txt.Text({
      text: "100 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 100,
      size: 62,
      x: 100,
      y: 586
    }));
    stage.addChild(new txt.Text({
      text: "200 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 200,
      size: 62,
      x: 100,
      y: 656
    }));
    stage.addChild(new txt.Text({
      text: "300 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 300,
      size: 62,
      x: 100,
      y: 725
    }));
    stage.addChild(new txt.Text({
      text: "400 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 400,
      size: 62,
      x: 100,
      y: 794
    }));
    stage.addChild(new txt.Text({
      text: "500 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 500,
      size: 62,
      x: 100,
      y: 864
    }));
    stage.addChild(new txt.Text({
      text: "0 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 0,
      size: 62,
      x: 100,
      y: 919
    }));
    stage.addChild(new txt.Text({
      text: "100 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 100,
      size: 62,
      x: 100,
      y: 988
    }));
    stage.addChild(new txt.Text({
      text: "200 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 200,
      size: 62,
      x: 100,
      y: 1058
    }));
    stage.addChild(new txt.Text({
      text: "300 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 300,
      size: 62,
      x: 100,
      y: 1127
    }));
    stage.addChild(new txt.Text({
      text: "400 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 400,
      size: 62,
      x: 100,
      y: 1197
    }));
    stage.addChild(new txt.Text({
      text: "500 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 500,
      size: 62,
      x: 100,
      y: 1266
    }));
    stage.addChild(new txt.Text({
      text: "0 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 0,
      size: 29,
      x: 1454,
      y: 95
    }));
    stage.addChild(new txt.Text({
      text: "100 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 100,
      size: 29,
      x: 1454,
      y: 164
    }));
    stage.addChild(new txt.Text({
      text: "200 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 200,
      size: 29,
      x: 1454,
      y: 233
    }));
    stage.addChild(new txt.Text({
      text: "300 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 300,
      size: 29,
      x: 1454,
      y: 303
    }));
    stage.addChild(new txt.Text({
      text: "400 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 400,
      size: 29,
      x: 1454,
      y: 372
    }));
    stage.addChild(new txt.Text({
      text: "500 abcdefghijklmnop",
      font: "abel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 500,
      size: 29,
      x: 1454,
      y: 442
    }));
    stage.addChild(new txt.Text({
      text: "0 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 0,
      size: 29,
      x: 1454,
      y: 511
    }));
    stage.addChild(new txt.Text({
      text: "100 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 100,
      size: 29,
      x: 1454,
      y: 580
    }));
    stage.addChild(new txt.Text({
      text: "200 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 200,
      size: 29,
      x: 1454,
      y: 650
    }));
    stage.addChild(new txt.Text({
      text: "300 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 300,
      size: 29,
      x: 1454,
      y: 719
    }));
    stage.addChild(new txt.Text({
      text: "400 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 400,
      size: 29,
      x: 1454,
      y: 789
    }));
    stage.addChild(new txt.Text({
      text: "500 abcdefghijklmnop",
      font: "cinzel",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 500,
      size: 29,
      x: 1454,
      y: 858
    }));
    stage.addChild(new txt.Text({
      text: "0 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 0,
      size: 29,
      x: 1454,
      y: 920
    }));
    stage.addChild(new txt.Text({
      text: "100 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 100,
      size: 29,
      x: 1454,
      y: 989
    }));
    stage.addChild(new txt.Text({
      text: "200 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 200,
      size: 29,
      x: 1454,
      y: 1060
    }));
    stage.addChild(new txt.Text({
      text: "300 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 300,
      size: 29,
      x: 1454,
      y: 1129
    }));
    stage.addChild(new txt.Text({
      text: "400 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 400,
      size: 29,
      x: 1454,
      y: 1198
    }));
    stage.addChild(new txt.Text({
      text: "500 abcdefghijklmnop",
      font: "craftygirls",
      width: 1900,
      height: 300,
      fillColor: "red",
      tracking: 500,
      size: 29,
      x: 1454,
      y: 1268
    }));
    stage.update();
    return stage;
  }

  function init$1a() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.Text({
      text: '"Logic will take you from A to B. Imagination will take you everywhere." - Albert Einstein',
      font: "quicksand",
      lineHeight: 100,
      width: 800,
      height: 480,
      size: 70,
      x: 10,
      y: 10,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: '"Logic will take you from A to B. Imagination will take you everywhere." - Albert Einstein',
      font: "righteous",
      lineHeight: 90,
      width: 900,
      height: 450,
      size: 90,
      x: 900,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: '"Logic will take you from A to B. Imagination will take you everywhere." - Albert Einstein',
      font: "lobster",
      lineHeight: 200,
      width: 1700,
      height: 850,
      size: 150,
      x: 20,
      y: 500,
      debug: true
    }));
    stage.update();
    return stage;
  }

  function init$1b() {
    var canvas = createHiDPICanvas(1000, 2000, 1);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 260,
      height: 100,
      size: 20,
      x: 10,
      y: 0,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 250,
      height: 100,
      size: 20,
      x: 10,
      y: 100,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 240,
      height: 100,
      size: 20,
      x: 10,
      y: 200,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 230,
      height: 100,
      size: 20,
      x: 10,
      y: 300,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 220,
      height: 100,
      size: 20,
      x: 10,
      y: 400,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 210,
      height: 100,
      size: 20,
      x: 10,
      y: 500,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 200,
      height: 100,
      size: 20,
      x: 10,
      y: 600,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 190,
      height: 100,
      size: 20,
      x: 10,
      y: 700,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 180,
      height: 100,
      size: 20,
      x: 10,
      y: 800,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 170,
      height: 100,
      size: 20,
      x: 10,
      y: 900,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 160,
      height: 100,
      size: 20,
      x: 10,
      y: 1000,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 150,
      height: 100,
      size: 20,
      x: 10,
      y: 1100,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 140,
      height: 100,
      size: 20,
      x: 10,
      y: 1200,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 130,
      height: 100,
      size: 20,
      x: 10,
      y: 1300,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 120,
      height: 120,
      size: 20,
      x: 10,
      y: 1400,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 110,
      height: 120,
      size: 20,
      x: 10,
      y: 1520,
      debug: true
    }));
    stage.addChild(new txt.Text({
      text: "Weekday, Month Day at Time\nLocation\nAddress - City, ST",
      font: "lato",
      width: 100,
      height: 120,
      size: 20,
      x: 10,
      y: 1640,
      debug: true
    }));
    stage.update();
    return stage;
  }

  function init$1c() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.Text({
      text: "123 444 555\n6",
      font: "lato",
      align: 4,
      tracking: 0,
      lineHeight: 38.4,
      ligatures: false,
      width: 123.86006745195687,
      height: 146.61010452961662,
      size: 32,
      debug: true,
      x: 10,
      y: 10
    });
    text.scaleX = text.scaleY = 10;
    stage.addChild(text);
    stage.update();
    return stage;
  }

  function init$1d() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.Text({
      text: "TTT YYY\nWWW",
      font: "opensans",
      align: txt.Align.TOP_LEFT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 0,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "TTT YYY\nWWW",
      font: "opensans",
      align: txt.Align.TOP_CENTER,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 410,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "TTT YYY\nWWW",
      font: "opensans",
      align: txt.Align.TOP_RIGHT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 820,
      y: 0,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "TTT YYY\nWWW",
      font: "opensans",
      align: txt.Align.MIDDLE_LEFT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 0,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "TTT YYY\nWWW",
      font: "opensans",
      align: txt.Align.MIDDLE_CENTER,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 410,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "TTT YYY\nWWW",
      font: "opensans",
      align: txt.Align.MIDDLE_RIGHT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 820,
      y: 410,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "TTT YYY\nWWW",
      font: "opensans",
      align: txt.Align.BOTTOM_LEFT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 0,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "TTT YYY\nWWW",
      font: "opensans",
      align: txt.Align.BOTTOM_CENTER,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 410,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    text = new txt.Text({
      text: "TTT YYY\nWWW",
      font: "opensans",
      align: txt.Align.BOTTOM_RIGHT,
      width: 400,
      height: 400,
      size: 150,
      tracking: 0,
      x: 820,
      y: 820,
      debug: true
    });
    stage.addChild(text);
    stage.update();
    return stage;
  }

  function init$1e() {
    var canvas = createHiDPICanvas(1000, 1000, 2);
    document.body.appendChild(canvas);
    var stage = new createjs.Stage(canvas);
    var text = new txt.Text({
      text: "1\n2345\n6789 01",
      font: "lato",
      align: 4,
      tracking: 0,
      lineHeight: 38.4,
      ligatures: false,
      width: 65,
      height: 150,
      size: 32,
      debug: true,
      x: 50,
      y: 50
    });
    text.scaleX = text.scaleY = 10;
    stage.addChild(text);
    stage.update();
    return stage;
  }

  var text = {
    accessibility: init$N,
    alignment: init$O,
    cache: init$P,
    card_test: init$Q,
    "case": init$R,
    child_events: init$S,
    complete: init$T,
    ligatures: init$U,
    loadtest: init$V,
    moon: init$W,
    multiline_align: init$X,
    multiline_align_breaks: init$Y,
    multiline_align_smallcaps: init$Z,
    multiline_line_height_larger: init$_,
    multiline_line_height_smaller: init$$,
    multiline_line_height_smaller_breaks: init$10,
    perchar: init$11,
    percharfont: init$12,
    single_word_center_align_tracking: init$13,
    single_word_oneline: init$14,
    stroke: init$15,
    text: init$16,
    text_change_font: init$17,
    tracking: init$18,
    tracking_layout_test: init$19,
    wordwrap: init$1a,
    wordwrap_calc: init$1b,
    wordwrap_natural_lineheight: init$1c,
    wordwrap_natural_newline: init$1d,
    wordwrap_newline_error: init$1e
  };

  function buildExampleInit(examplePath) {
    var parts = examplePath.split("/");
    return txtExamples[parts[0]][parts[1]];
  }

  function buildExampleTitle(examplePath) {
    return "txtjs example: " + examplePath.split("/").join(" - ").split("_").join(" ");
  }

  function clearExample() {
    var canvas = document.getElementsByTagName("canvas")[0];

    if (canvas) {
      document.body.removeChild(canvas);
    }
  }
  var example = location.hash.replace("#", "");

  if (example) {
    document.title = buildExampleTitle(example);

    window.onload = function () {
      buildExampleInit(example)();
    };
  }

  window.onhashchange = function () {
    var example = location.hash.replace("#", "");
    clearExample();
    document.title = buildExampleTitle(example);
    buildExampleInit(example)();
  };

  txt.FontLoader.path = "../font/";

  exports.CharacterText = characterText;
  exports.Graphics = graphics;
  exports.PathText = pathText;
  exports.Text = text;
  exports.clearExample = clearExample;
  exports.createHiDPICanvas = createHiDPICanvas;

  return exports;

}({}));
//# sourceMappingURL=examples.js.map
