import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

const name = "txt";

const mainConfig = {
  input: "./src/index.ts",
  plugins: [typescript({})],
  external: ["txt"],
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    },
    {
      name,
      file: pkg.browser,
      format: "iife",
      sourcemap: true
    }
  ]
};

const examplesConfig = {
  input: "./examples/index.ts",
  plugins: [typescript()],
  output: [
    {
      file: "dist/examples.js",
      format: "iife",
      name: "txtExamples",
      sourcemap: true
    }
  ]
};

const siteConfig = {
  input: "./site/index.ts",
  plugins: [typescript()],
  output: [
    {
      file: "dist/site.js",
      format: "iife",
      sourcemap: true
    }
  ]
};

export default [mainConfig, examplesConfig, siteConfig];
