const path = require('path');
const {validateThemeConfig} = require('./validateThemeConfig');

function theme() {
  return {
    name: 'live-player',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },

    // configureWebpack() {
    //   return {
    //     resolve: {
    //       alias: {
    //         buble: path.resolve(__dirname, './custom-buble.js'),
    //       },
    //     },
    //   };
    // },
  };
}

module.exports = theme;

theme.validateThemeConfig = validateThemeConfig;
