describe("Examples visual", function() {
  // Font downloading delays renders
  const RENDER_WAIT = 100;
  const TEST_TIMEOUT = 2000;

  afterEach(function() {
    removeCanvas();
  });

  describe("Text", function() {
    Object.entries(txtExamples.visualExamples.Text).forEach(function(eg) {
      let exampleName = eg[0];
      let runExample = eg[1];
      it(
        exampleName,
        async function(done) {
          var stage = runExample();
          expect(stage.children.length).toBeGreaterThan(0);
          let referenceImageData = imgToImageData(
            await loadImage("images/Text/" + exampleName + ".png")
          );
          // let referenceImageData = null;
          setTimeout(function() {
            let canvasImageData = getCanvasImageData(stage.canvas);
            expect(canvasImageData).toVisuallyEqual(referenceImageData);
            done();
          }, RENDER_WAIT);
        },
        TEST_TIMEOUT
      );
    });
  });

  describe("CharacterText", function() {
    Object.entries(txtExamples.visualExamples.CharacterText).forEach(function(
      eg
    ) {
      let exampleName = eg[0];
      let runExample = eg[1];
      it(
        exampleName,
        async function(done) {
          var stage = runExample();
          expect(stage.children.length).toBeGreaterThan(0);
          let referenceImageData = imgToImageData(
            await loadImage("images/CharacterText/" + exampleName + ".png")
          );
          setTimeout(function() {
            let canvasImageData = getCanvasImageData(stage.canvas);
            expect(canvasImageData).toVisuallyEqual(referenceImageData);
            done();
          }, RENDER_WAIT);
        },
        TEST_TIMEOUT
      );
    });
  });

  describe("PathText", function() {
    Object.entries(txtExamples.visualExamples.PathText).forEach(function(eg) {
      let exampleName = eg[0];
      let runExample = eg[1];
      it(
        exampleName,
        async function(done) {
          var stage = runExample();
          expect(stage.children.length).toBeGreaterThan(0);
          let referenceImageData = imgToImageData(
            await loadImage("images/PathText/" + exampleName + ".png")
          );
          // TODO: figure out how to handle async - perhaps preload fonts?
          setTimeout(function() {
            let canvasImageData = getCanvasImageData(stage.canvas);
            expect(canvasImageData).toVisuallyEqual(referenceImageData);
            done();
          }, RENDER_WAIT);
        },
        TEST_TIMEOUT
      );
    });
  });

  describe("Graphics", function() {
    Object.entries(txtExamples.visualExamples.Graphics).forEach(function(eg) {
      let exampleName = eg[0];
      let runExample = eg[1];
      it(
        exampleName,
        async function() {
          var stage = runExample();
          expect(stage.children.length).toBeGreaterThan(0);
          let referenceImageData = imgToImageData(
            await loadImage("images/Graphics/" + exampleName + ".png")
          );
          let canvasImageData = getCanvasImageData(stage.canvas);
          expect(canvasImageData).toVisuallyEqual(referenceImageData);
        },
        TEST_TIMEOUT
      );
    });
  });
});

function getCanvasImageData(canvas) {
  return canvas
    .getContext("2d")
    .getImageData(0, 0, canvas.width, canvas.height);
}
