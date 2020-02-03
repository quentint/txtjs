var context = document.createElement("canvas").getContext("2d");
let devicePixelRatio = window.devicePixelRatio || 1;
let backingStorePixelRatio =
  context.webkitBackingStorePixelRatio ||
  context.mozBackingStorePixelRatio ||
  context.msBackingStorePixelRatio ||
  context.oBackingStorePixelRatio ||
  context.backingStorePixelRatio ||
  1;

export default devicePixelRatio / backingStorePixelRatio;
