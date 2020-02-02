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
      babel({ extensions, include: ["examples/**/*"] })
    ],
    output: [
      {
        file: "dist/examples.js",
        format: "iife",
        name: "txtExamples",
        amd: {
          id: "txtExamples"
        }
      }
    ]
  },
  {
    input: "./src/index.ts",
    plugins: [
      // Allows node_modules resolution
      resolve({ extensions }),
      // Allow bundling cjs modules. Rollup doesn't understand cjs
      commonjs(),
      // Compile TypeScript/JavaScript files
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
