import Graphics from "./Graphics";
import applyMixins from "./applyMixins";

class GraphicsMixin {
  /**
   * decodeSVGPath intended for createjs.Graphics class
   */
  decodeSVGPath(data: string) {
    Graphics.init(this, data);
    return this;
  }
}

applyMixins(createjs.Graphics, [GraphicsMixin]);

declare global {
  namespace createjs {
    interface Graphics {
      decodeSVGPath(data: string): Graphics;
    }
  }
}
