var example = location.search.split("eg=")[1];
var addScript = document.createElement("script");
addScript.src = example + ".js";
var parts = example
  .split("_")
  .join(" ")
  .split("/")
  .join(" - ");
document.title = "txtjs example: " + parts;
(
  document.getElementsByTagName("head")[0] || document.documentElement
).appendChild(addScript);

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
