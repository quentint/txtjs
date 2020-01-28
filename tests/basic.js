describe("Smoke test", function() {
  afterEach(function() {
    if (canvas) {
      document.body.removeChild(canvas);
      canvas = null;
    }
  });

  it("Loads txt.js library and checks version", function() {
    expect(txt).not.toBeNull();
    expect(txt.Info.VERSION).toEqual("0.9.5"); // remember to update all parts of codebase
  });

  it("Renders", function() {
    init();
    expect(stage.children.length).toBeGreaterThan(0);
  });
});
