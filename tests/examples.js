describe("Execute all examples", function() {
  afterEach(function() {
    txtExamples.clearExample();
  });

  Object.entries(txtExamples.Text).forEach(function(eg) {
    it("Text - " + eg[0], function() {
      var stage = eg[1]();
      expect(stage.children.length).toBeGreaterThan(0);
    });
  });

  Object.entries(txtExamples.CharacterText).forEach(function(eg) {
    it("CharacterText - " + eg[0], function() {
      var stage = eg[1]();
      expect(stage.children.length).toBeGreaterThan(0);
    });
  });

  Object.entries(txtExamples.PathText).forEach(function(eg) {
    it("PathText - " + eg[0], function() {
      var stage = eg[1]();
      expect(stage.children.length).toBeGreaterThan(0);
    });
  });

  Object.entries(txtExamples.Graphics).forEach(function(eg) {
    it("Graphics - " + eg[0], function() {
      var stage = eg[1]();
      expect(stage.children.length).toBeGreaterThan(0);
    });
  });
});
