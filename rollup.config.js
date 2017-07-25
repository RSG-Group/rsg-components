import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { rollup } from "rollup";
import { pick } from "lodash";

const config = {
  entry: "src/index.js",
  format: "es",
  plugins: [resolve(), commonjs({
    include: "node_modules/**",
  }), babel({
    plugins: ["external-helpers"],
    presets: ["babili"],
    exclude: "node_modules/**",
  })],
  external: ["lodash", "react", "aphrodite-jss", "aphrodite"],
  sourceMap: true,
  dest: "lib/index.esm.js",
};


rollup(pick(config, ["entry", "plugins", "external"])).then((bundle) => {
  bundle.write({
    dest: "lib/index.js",
    sourceMap: true,
    format: "umd",
    moduleName: "RSGComponents",
    globals: {
      lodash: "_",
      react: "React",
      "aphrodite-jss": "aphrodite-jss",
      aphrodite: "aphrodite",
    },
  });
});

export default config;
