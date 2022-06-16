'use strict';

module.exports = {
  presets: ['@babel/preset-env', ["@babel/preset-react", {"runtime": "automatic"}], "@babel/preset-typescript"],
  plugins: ['react-hot-loader/babel', "babel-plugin-styled-components"],
};
