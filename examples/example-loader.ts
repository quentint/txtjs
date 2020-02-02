var example = location.hash.replace("#", "");
if (example) {
  document.title = buildExampleTitle(example);
  window.onload = function() {
    this.buildExampleInit(example)();
  };
}

window.onhashchange = function() {
  var example = location.hash.replace("#", "");
  clearExample();
  document.title = buildExampleTitle(example);
  this.buildExampleInit(example)();
};
