import { Dimensions } from 'react-native';
let {
  width,
  height
} = Dimensions.get('window');
if (width > height) {
  [width, height] = [height, width];
}
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const horizontalScale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = function (size) {
  let factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  return size + (horizontalScale(size) - size) * factor;
};
export { horizontalScale, moderateScale, verticalScale };
//# sourceMappingURL=Metrics.js.map