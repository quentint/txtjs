// TODO: move into jasmine-pixelmatch project 
declare global {
  const jasminePixelmatch: {
    imgToImageData(img: HTMLImageElement): ImageData;
    loadImage(url: string): Promise<HTMLImageElement>;
  };
}

export const { imgToImageData, loadImage } = jasminePixelmatch;

export function removeCanvas() {
  const canvas = document.getElementsByTagName("canvas")[0];
  if (canvas) {
    document.body.removeChild(canvas);
  }
}
