import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { rollup } from "rollup";
import { pick } from "lodash";

const config = {
  entry: "src/index.js",
  dest: "index.esm.js",
  format: "es",
  plugins: [resolve(), commonjs({
    include: "node_modules/**",
  }), babel({ plugins: ["external-helpers"], presets: ["babili"] })],
  external: ["lodash", "react", "aphrodite"],
  sourceMap: true,
};


rollup(pick(config, ["entry", "plugins", "external"])).then((bundle) => {
  bundle.write({
    dest: "index.js",
    sourceMap: true,
    format: "umd",
    moduleName: "RSGComponents",
    globals: { lodash: "_", react: "React", aphrodite: "Aphrodite" },
  });
});

export default config;
