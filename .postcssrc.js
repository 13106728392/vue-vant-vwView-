/*
 * @Author: your name
 * @Date: 2020-07-15 14:14:54
 * @LastEditTime: 2020-07-15 14:25:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vwporject\.postcssrc.js
 */ 
module.exports = ({ file }) => {
  const designWidth = file.dirname.includes('node_modules/vant') ? 375 : 750;  // 为了兼容vant默认的设计稿是375px的问题

  return {
    plugins: {
      autoprefixer: {},
      "postcss-px-to-viewport": {
        unitToConvert: "px",
        viewportWidth: designWidth,
        unitPrecision: 6,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: true,
        exclude: [],
        landscape: false
      }
    }
  }

}
