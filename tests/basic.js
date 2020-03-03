describe("Smoke test", function() {
  afterEach(function() {
    txtExamples.clearExample();
  });

  it("Loads txt.js library and checks version", function() {
    expect(txt).not.toBeNull();
    expect(txt.Info.VERSION).toEqual("0.10.0"); // remember to update all parts of codebase
  });
});
