const { imgToImageData, loadImage } = jasminePixelmatch;

function removeCanvas() {
  const canvas = document.getElementsByTagName("canvas")[0];
  if (canvas) {
    document.body.removeChild(canvas);
  }
}
