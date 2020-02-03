import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

const extensions = [".ts"];

const name = "txt";

export default [
  {
    input: "./examples/index.ts",
    plugins: [
      resolve({ extensions }),
      commonjs(),
      babel({ extensions, include: ["examples/**/*", "lib/**/*"] })
    ],
    output: [
      {
        file: "dist/examples.js",
        format: "iife",
        name: "txtExamples"
      }
    ]
  },
  {
    input: "./site/index.ts",
    plugins: [
      resolve({ extensions }),
      commonjs(),
      babel({ extensions, include: ["site/**/*"] })
    ],
    output: [
      {
        file: "dist/demo.js",
        format: "iife"
      }
    ]
  },
  {
    input: "./src/index.ts",
    plugins: [
      resolve({ extensions }),
      commonjs(),
      babel({ extensions, include: ["src/**/*"] })
    ],
    output: [
      {
        file: pkg.main,
        format: "cjs"
      },
      {
        file: pkg.module,
        format: "es"
      },
      {
        name,
        file: pkg.browser,
        format: "iife"
      }
    ]
  }
];
