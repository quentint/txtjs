// TODO: move this to the jasmine-pixelmatch project type definitions
declare namespace jasmine {
    interface Matchers<T> {
      toVisuallyEqual(imagedata: ImageData): boolean;
    }
}