export const commonColors = {
  bgBlue: '#49c7e7'
};

import { extendTheme } from '@mui/joy';

export const blockColorDefs = {
  red: '#e7161e',
  orange: '#fe9727',
  yellow: '#e1cb1f',
  green: '#4aec04',
  blue: '#31ecff',
  purple: '#5629b7',
  sevenPurple: '#be6edb',
  pink: '#e02897',
  gray: '#aba9aa',
  white: '#fff'
};

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        red: {
          primary: blockColorDefs.red,
          light: blockColorDefs.red,
          dark: blockColorDefs.red
        },
        orange: {
          primary: blockColorDefs.orange,
          light: blockColorDefs.orange,
          dark: blockColorDefs.orange
        },
        yellow: {
          primary: blockColorDefs.yellow,
          light: blockColorDefs.yellow,
          dark: blockColorDefs.yellow
        },
        green: {
          primary: blockColorDefs.green,
          light: blockColorDefs.green,
          dark: blockColorDefs.green
        },
        blue: {
          primary: blockColorDefs.blue,
          light: blockColorDefs.blue,
          dark: blockColorDefs.blue
        },
        purple: {
          primary: blockColorDefs.purple,
          light: blockColorDefs.purple,
          dark: blockColorDefs.purple
        },
        sevenPurple: {
          primary: blockColorDefs.sevenPurple,
          light: blockColorDefs.sevenPurple,
          dark: blockColorDefs.sevenPurple
        },
        pink: {
          primary: blockColorDefs.pink,
          light: blockColorDefs.pink,
          dark: blockColorDefs.pink
        },
        gray: {
          primary: blockColorDefs.gray,
          light: blockColorDefs.gray,
          dark: blockColorDefs.gray
        },
        white: {
          primary: blockColorDefs.white,
          light: blockColorDefs.white,
          dark: blockColorDefs.white
        },
        background: {
          body: commonColors.bgBlue
        }
      }
    }
  }
});

declare module '@mui/joy/styles' {
  interface Palette {
    red: CustomColor;
    orange: CustomColor;
    yellow: CustomColor;
    green: CustomColor;
    blue: CustomColor;
    purple: CustomColor;
    sevenPurple: CustomColor;
    pink: CustomColor;
    gray: CustomColor;
    white: CustomColor;
  }
}

type CustomColor = {
  primary: string;
  light: string;
  dark: string;
};
