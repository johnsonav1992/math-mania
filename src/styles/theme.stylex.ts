import * as stylex from "@stylexjs/stylex";

export const commonColors = stylex.defineVars({
  bgBlue: "#49c7e7",
});

export const blockColorDefs = {
  red: "#e7161e",
  orange: "#fe9727",
  yellow: "#e1cb1f",
  green: "#4aec04",
  blue: "#31ecff",
  purple: "#5629b7",
  sevenPurple: "#be6edb",
  pink: "#e02897",
  gray: "#aba9aa",
  white: "#fff",
};

export const blockColors = stylex.defineVars(blockColorDefs);
