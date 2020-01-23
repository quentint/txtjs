afterEach(function() {
  if (canvas) {
    document.body.removeChild(canvas);
    canvas = null;
  }
});

describe("Smoke test", function() {
  it("Can load txt.js library and check version", function() {
    expect(txt).not.toBeNull();
    expect(txt.Info.VERSION).toEqual("0.9.5"); // remember to update all parts of codebase
  });

  it("Renders", function() {
    init();
  });
});
