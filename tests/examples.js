describe("Examples non-visual", function() {
  const TEST_TIMEOUT = 2000;

  afterEach(function() {
    removeCanvas();
  });

  describe("Text", function() {
    Object.entries(txtExamples.nonVisualExamples.Text).forEach(function(eg) {
      let exampleName = eg[0];
      let runExample = eg[1];
      it(
        exampleName,
        function() {
          var stage = runExample();
          expect(stage.children.length).toBeGreaterThan(0);
        },
        TEST_TIMEOUT
      );
    });
  });

  describe("CharacterText", function() {
    Object.entries(txtExamples.nonVisualExamples.CharacterText).forEach(
      function(eg) {
        let exampleName = eg[0];
        let runExample = eg[1];
        it(
          exampleName,
          function() {
            var stage = runExample();
            expect(stage.children.length).toBeGreaterThan(0);
          },
          TEST_TIMEOUT
        );
      }
    );
  });

  describe("PathText", function() {
    Object.entries(txtExamples.nonVisualExamples.PathText).forEach(function(
      eg
    ) {
      let exampleName = eg[0];
      let runExample = eg[1];
      it(
        exampleName,
        function() {
          var stage = runExample();
          expect(stage.children.length).toBeGreaterThan(0);
        },
        TEST_TIMEOUT
      );
    });
  });

  describe("Graphics", function() {
    Object.entries(txtExamples.nonVisualExamples.Graphics).forEach(function(
      eg
    ) {
      let exampleName = eg[0];
      let runExample = eg[1];
      it(
        exampleName,
        function() {
          var stage = runExample();
          expect(stage.children.length).toBeGreaterThan(0);
        },
        TEST_TIMEOUT
      );
    });
  });
});
