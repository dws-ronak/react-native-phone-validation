"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verticalScale = exports.moderateScale = exports.horizontalScale = void 0;
var _reactNative = require("react-native");
let {
  width,
  height
} = _reactNative.Dimensions.get('window');
if (width > height) {
  [width, height] = [height, width];
}
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const horizontalScale = size => width / guidelineBaseWidth * size;
exports.horizontalScale = horizontalScale;
const verticalScale = size => height / guidelineBaseHeight * size;
exports.verticalScale = verticalScale;
const moderateScale = function (size) {
  let factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  return size + (horizontalScale(size) - size) * factor;
};
exports.moderateScale = moderateScale;
//# sourceMappingURL=Metrics.js.map