import Graphics from "./Graphics";
import applyMixins from "./applyMixins";

/**
 * decodeSVGPath intended for createjs.Graphics class
 */
class DecodeSVGPathMixin {
  decodeSVGPath(data: string) {
    Graphics.init(this, data);
    return this;
  }
}

applyMixins(createjs.Graphics, [DecodeSVGPathMixin]);

declare global {
  namespace createjs {
    interface Graphics {
      decodeSVGPath(data: string): Graphics;
    }
  }
}
