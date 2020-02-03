function buildExampleInit(examplePath) {
  var parts = examplePath.split("/");
  return txtExamples[parts[0]][parts[1]];
}

function buildExampleTitle(examplePath) {
  return (
    "txtjs example: " +
    examplePath
      .split("/")
      .join(" - ")
      .split("_")
      .join(" ")
  );
}

function clearExample() {
  var canvas = document.getElementsByTagName("canvas")[0];
  if (canvas) {
    document.body.removeChild(canvas);
  }
}

var example = location.hash.replace("#", "");
if (example) {
  document.title = buildExampleTitle(example);
  window.onload = function() {
    buildExampleInit(example)();
  };
}

window.onhashchange = function() {
  var example = location.hash.replace("#", "");
  clearExample();
  document.title = buildExampleTitle(example);
  buildExampleInit(example)();
};
