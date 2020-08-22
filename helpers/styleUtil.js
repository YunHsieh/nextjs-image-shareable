const rootSzie = 14;
/**
 * @desc layout to html 單位換算
 * @param {value} number - layout 顯示的單位數值
 * @return {string} - 轉換成欲使用的單位, 目前採用 rem
 */
export const convertUnit = (value, rs=rootSzie) => {
  return `${(value / rs).toFixed(2)}rem`;
}

export const theme = {
  primaryColor: "rgb(0, 155, 74)",
  secondaryColor: "rgb(232, 124, 7)",
  darkColor : "rgb(51, 51, 51)",
  grayDarkColor: "rgb(74, 74, 74)",
  blackColor: "rgb(0, 0, 0)",
  redColor: "rgb(234, 59, 50)",
  orangeRedColor: "rgb(211, 63, 56)",
  grayDove: "rgb(102, 102, 102)",
  grayColor: "rgb(108, 108, 108)",
  grayLightColor: "rgb(128, 128, 128)",
  grayLighterColor: "rgb(187, 187, 187)",
  grayColorGainsboro: "rgb(220, 220, 220)",
  grayColor90: "rgb(229, 229, 229)",
  grayConcrete: "rgb(243, 243, 243)",
  successColor: "rgb(0, 155, 74)",
  warningColor: "rgb(232, 124, 7)",
  errorColor: "rgb(211, 63, 57)",
  borderColor: "rgb(170, 170, 170)",
  backgroundColor: "rgb(245, 245, 245)",
  lightColor: "rgb(255, 255, 255)",
  linkColor: "$primary-color",
  linkColorDark: "rgb(0, 155, 74)",
  linkColorLight: "rgb(0, 155, 74)",
  outlineColor: "rgb(51, 126, 181)",
  animationSpeed: ".3s",
  mobileSize: 768,
  rootSize: rootSzie,
  borderRadius: convertUnit(2.8, rootSzie),
  fontSize1: convertUnit(24, rootSzie),
  fontSize2: convertUnit(20, rootSzie),
  fontSize3: convertUnit(18, rootSzie),
  fontSize4: convertUnit(16, rootSzie),
  fontSize5: convertUnit(14, rootSzie),
  fontSize6: convertUnit(12, rootSzie),
  space: convertUnit(20, rootSzie),
}
