import SVGArc from "./SVGArc";
import { parsePathData } from "./SVGPath";

export default class Graphics {
  /**
   * Build up createjs Graphics commands based on path data.
   */
  static init(target, svgpath: string) {
    var ca = parsePathData(svgpath);
    var G = createjs.Graphics;

    for (var n = 0; n < ca.length; n++) {
      var c = ca[n].command;
      var p = ca[n].points;
      switch (c) {
        case "L":
          target.append(new G.LineTo(p[0], p[1]));
          break;

        case "M":
          target.append(new G.MoveTo(p[0], p[1]));
          break;

        case "C":
          target.append(
            new G.BezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5])
          );
          break;

        case "Q":
          target.append(new G.QuadraticCurveTo(p[0], p[1], p[2], p[3]));
          break;

        case "A":
          target.append(new SVGArc(p[0], p[1], p[2], p[3], p[4], p[5], p[6]));
          break;

        case "Z":
          target.append(new G.ClosePath());
          target.append(new G.MoveTo(p[0], p[1]));
          break;
      }
    }
  }

  static svgPathBoundingBox(svgpath: string) {
    // TODO: access a cached array?
    var ca = Graphics.parsePathData(svgpath);

    // TODO: start crude - find min max x and y values
    // TODO: enhance - look to a bounding box api
    // https://github.com/fabricjs/fabric.js/blob/a8b7a18043ab22dfd59691ef3c6ede0d425651e8/src/shapes/path.class.js#L547
  }

  // TODO: search for this in github to find out if it's common code
  // https://github.com/fabricjs/fabric.js/blob/a8b7a18043ab22dfd59691ef3c6ede0d425651e8/src/shapes/path.class.js#L498
}
