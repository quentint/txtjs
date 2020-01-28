createjs.Graphics.prototype.decodeSVGPath = function(data: string) {
  txt.Graphics.init(this, data);
  return this;
};

module txt {
  export class Graphics {
    /**
     * Build up createjs Graphics commands based on path data.
     */
    static init(target, svgpath: string) {
      var ca = Graphics.parsePathData(svgpath);
      var G = createjs.Graphics;
      var closedPath = false;

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
            target.append(
              new G.SVGArc(p[0], p[1], p[2], p[3], p[4], p[5], p[6])
            );
            break;

          case "Z":
            target.append(new G.ClosePath());
            target.append(new G.MoveTo(p[0], p[1]));
            break;
        }
      }
    }

    static parsePathData(data) {
      if (!data) {
        return [];
      }
      var cs = data;
      var cc = [
        "m",
        "M",
        "l",
        "L",
        "v",
        "V",
        "h",
        "H",
        "z",
        "Z",
        "c",
        "C",
        "q",
        "Q",
        "t",
        "T",
        "s",
        "S",
        "a",
        "A"
      ];
      cs = cs.replace(new RegExp(" ", "g"), ",");
      for (var n = 0; n < cc.length; n++) {
        cs = cs.replace(new RegExp(cc[n], "g"), "|" + cc[n]);
      }
      var arr = cs.split("|");
      var ca = [];
      var cpx = 0;
      var cpy = 0;
      var arrLength = arr.length;
      var startPoint = null;
      for (n = 1; n < arrLength; n++) {
        var str = arr[n];
        var c = str.charAt(0);
        str = str.slice(1);
        str = str.replace(new RegExp(",-", "g"), "-");
        str = str.replace(new RegExp("-", "g"), ",-");
        str = str.replace(new RegExp("e,-", "g"), "e-");
        var p = str.split(",");
        if (p.length > 0 && p[0] === "") {
          p.shift();
        }
        var pLength = p.length;
        for (var i = 0; i < pLength; i++) {
          p[i] = parseFloat(p[i]);
        }
        if (c === "z" || c === "Z") {
          p = [true];
        }

        while (p.length > 0) {
          if (isNaN(p[0])) {
            break;
          }
          var cmd = null;
          var points = [];
          var startX = cpx,
            startY = cpy;
          var prevCmd, ctlPtx, ctlPty;
          var rx, ry, psi, fa, fs, x1, y1;

          switch (c) {
            case "l":
              cpx += p.shift();
              cpy += p.shift();
              cmd = "L";
              points.push(cpx, cpy);
              break;

            case "L":
              cpx = p.shift();
              cpy = p.shift();
              points.push(cpx, cpy);
              break;

            case "m":
              var dx = p.shift();
              var dy = p.shift();
              cpx += dx;
              cpy += dy;
              if (startPoint == null) {
                startPoint = [cpx, cpy];
              }
              cmd = "M";
              points.push(cpx, cpy);
              c = "l";
              break;

            case "M":
              cpx = p.shift();
              cpy = p.shift();
              cmd = "M";
              if (startPoint == null) {
                startPoint = [cpx, cpy];
              }
              points.push(cpx, cpy);
              c = "L";
              break;

            case "h":
              cpx += p.shift();
              cmd = "L";
              points.push(cpx, cpy);
              break;

            case "H":
              cpx = p.shift();
              cmd = "L";
              points.push(cpx, cpy);
              break;

            case "v":
              cpy += p.shift();
              cmd = "L";
              points.push(cpx, cpy);
              break;

            case "V":
              cpy = p.shift();
              cmd = "L";
              points.push(cpx, cpy);
              break;

            case "C":
              points.push(p.shift(), p.shift(), p.shift(), p.shift());
              cpx = p.shift();
              cpy = p.shift();
              points.push(cpx, cpy);
              break;

            case "c":
              points.push(
                cpx + p.shift(),
                cpy + p.shift(),
                cpx + p.shift(),
                cpy + p.shift()
              );
              cpx += p.shift();
              cpy += p.shift();
              cmd = "C";
              points.push(cpx, cpy);
              break;

            case "S":
              ctlPtx = cpx;
              ctlPty = cpy;
              prevCmd = ca[ca.length - 1];
              if (prevCmd.command === "C") {
                ctlPtx = cpx + (cpx - prevCmd.points[2]);
                ctlPty = cpy + (cpy - prevCmd.points[3]);
              }
              points.push(ctlPtx, ctlPty, p.shift(), p.shift());
              cpx = p.shift();
              cpy = p.shift();
              cmd = "C";
              points.push(cpx, cpy);
              break;

            case "s":
              ctlPtx = cpx;
              ctlPty = cpy;
              prevCmd = ca[ca.length - 1];
              if (prevCmd.command === "C") {
                ctlPtx = cpx + (cpx - prevCmd.points[2]);
                ctlPty = cpy + (cpy - prevCmd.points[3]);
              }
              points.push(ctlPtx, ctlPty, cpx + p.shift(), cpy + p.shift());
              cpx += p.shift();
              cpy += p.shift();
              cmd = "C";
              points.push(cpx, cpy);
              break;

            case "Q":
              points.push(p.shift(), p.shift());
              cpx = p.shift();
              cpy = p.shift();
              points.push(cpx, cpy);
              break;

            case "q":
              points.push(cpx + p.shift(), cpy + p.shift());
              cpx += p.shift();
              cpy += p.shift();
              cmd = "Q";
              points.push(cpx, cpy);
              break;

            case "T":
              ctlPtx = cpx;
              ctlPty = cpy;
              prevCmd = ca[ca.length - 1];
              if (prevCmd.command === "Q") {
                ctlPtx = cpx + (cpx - prevCmd.points[0]);
                ctlPty = cpy + (cpy - prevCmd.points[1]);
              }
              cpx = p.shift();
              cpy = p.shift();
              cmd = "Q";
              points.push(ctlPtx, ctlPty, cpx, cpy);
              break;

            case "t":
              ctlPtx = cpx;
              ctlPty = cpy;
              prevCmd = ca[ca.length - 1];
              if (prevCmd.command === "Q") {
                ctlPtx = cpx + (cpx - prevCmd.points[0]);
                ctlPty = cpy + (cpy - prevCmd.points[1]);
              }
              cpx += p.shift();
              cpy += p.shift();
              cmd = "Q";
              points.push(ctlPtx, ctlPty, cpx, cpy);
              break;

            case "A":
              rx = p.shift();
              ry = p.shift();
              psi = p.shift();
              fa = p.shift();
              fs = p.shift();
              x1 = cpx;
              y1 = cpy;
              cpx = p.shift();
              cpy = p.shift();
              cmd = "A";
              points = [[x1, y1], rx, ry, psi, fa, fs, [cpx, cpy]];
              break;

            case "a":
              rx = p.shift();
              ry = p.shift();
              psi = p.shift();
              fa = p.shift();
              fs = p.shift();
              x1 = cpx;
              y1 = cpy;
              cpx += p.shift();
              cpy += p.shift();
              cmd = "A";
              points = [[x1, y1], rx, ry, psi, fa, fs, [cpx, cpy]];
              break;

            case "z":
              cmd = "Z";
              if (startPoint) {
                cpx = startPoint[0];
                cpy = startPoint[1];
                startPoint = null;
              } else {
                cpx = 0;
                cpy = 0;
              }
              p.shift();
              points = [cpx, cpy];
              break;

            case "Z":
              cmd = "Z";
              if (startPoint) {
                cpx = startPoint[0];
                cpy = startPoint[1];
                startPoint = null;
              } else {
                cpx = 0;
                cpy = 0;
              }
              p.shift();
              points = [cpx, cpy];
              break;
          }

          ca.push({
            command: cmd || c,
            points: points,
            start: {
              x: startX,
              y: startY
            }
          });
        }
      }
      return ca;
    }
  }
}
