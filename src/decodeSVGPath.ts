import Graphics from "./Graphics";

createjs.Graphics.prototype.decodeSVGPath = function(data: string) {
  Graphics.init(this, data);
  return this;
};
