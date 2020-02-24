let chromeArgs = ["--disable-gpu", "--remote-debugging-port=9222"];
let firefoxArgs = [];

if (process.env.HEADLESS) {
  chromeArgs.push("--headless");
  firefoxArgs.push("--headless");
}

let serve_files = [
  {
    src: "packages/jasmine-pixelmatch/dist/jasmine-pixelmatch.js"
  },
  { src: "dist/easeljs.js" },
  { src: "dist/pathseg.js" },
  { src: "dist/txt.js" },
  { src: "examples/examples.js" },
  { src: "dist/examples.js" },
  { src: "tests/*.js" }
];

if (!process.env.HEADLESS) {
  serve_files.push({ src: "!tests/_headless.js" });
}

module.exports = {
  launch_in_dev: ["Chrome"],
  launch_in_ci: ["Chrome"],
  browser_args: {
    Chrome: chromeArgs,
    Firefox: firefoxArgs
  },
  test_page: "testem.mustache",
  before_tests: "npm run build",

  // TODO: split out visual tests
  src_files: ["src/*.ts", "examples/**/*.ts"],
  serve_files,
  css_files: [],
  routes: {
    "/images": "images"
  }
};
