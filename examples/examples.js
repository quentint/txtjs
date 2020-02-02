txt.FontLoader.path = "../font/";

function buildExampleInit(examplePath) {
  var parts = examplePath.split("/");
  return txtExamples[parts[0]][parts[1]];
}

function buildExampleTitle(examplePath) {
  return (
    "txtjs example: " +
    examplePath
      .split("/")
      .join(" - ")
      .split("_")
      .join(" ")
  );
}

function clearExample() {
  var canvas = document.getElementsByTagName("canvas")[0];
  document.body.removeChild(canvas);
  canvas = null;
}

var example = location.hash.replace("#", "");
if (example) {
  document.title = buildExampleTitle(example);
  window.onload = function() {
    this.buildExampleInit(example)();
  };
}

window.onhashchange = function() {
  var example = location.hash.replace("#", "");
  clearExample();
  document.title = buildExampleTitle(example);
  this.buildExampleInit(example)();
};

var PIXEL_RATIO = (function() {
  var ctx = document.createElement("canvas").getContext("2d"),
    dpr = window.devicePixelRatio || 1,
    bsr =
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1;
  return dpr / bsr;
})();

function createHiDPICanvas(w, h, ratio) {
  if (!ratio) {
    ratio = PIXEL_RATIO;
  }
  var can = document.createElement("canvas");
  can.width = w * ratio;
  can.height = h * ratio;
  can.style.width = w + "px";
  can.style.height = h + "px";
  can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
  return can;
}
