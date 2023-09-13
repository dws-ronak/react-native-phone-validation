"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.checkPhoneValidation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeSvg = require("react-native-svg");
var _CountryModal = _interopRequireDefault(require("./CountryModal"));
var _Metrics = require("./Metrics");
var _country = _interopRequireDefault(require("./country.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const checkPhoneValidation = (country, phone) => {
  if (Array.isArray(country === null || country === void 0 ? void 0 : country.phoneLength)) {
    var _country$phoneLength;
    if (country !== null && country !== void 0 && (_country$phoneLength = country.phoneLength) !== null && _country$phoneLength !== void 0 && _country$phoneLength.includes(phone === null || phone === void 0 ? void 0 : phone.length)) return true;else return false;
  } else {
    if ((phone === null || phone === void 0 ? void 0 : phone.length) === (country === null || country === void 0 ? void 0 : country.phoneLength)) return true;else return false;
  }
};
exports.checkPhoneValidation = checkPhoneValidation;
const PhoneValidation = props => {
  const [openModal, setOpenModal] = (0, _react.useState)(false);
  const [country, setCountry] = (0, _react.useState)({});
  const [text, setText] = (0, _react.useState)('');
  const [maxLength, setMaxLength] = (0, _react.useState)(0);
  const handleText = text => {
    if (text) {
      const numericRegex = /^[0-9]*$/;
      if (numericRegex.test(text)) {
        setText(text);
        props.setValue(text);
      }
    } else {
      setText('');
      props.setValue('');
    }
  };
  (0, _react.useEffect)(() => {
    setCountry(_country.default === null || _country.default === void 0 ? void 0 : _country.default.find(item => (item === null || item === void 0 ? void 0 : item.code) === 'IN'));
    props.setCountry(_country.default === null || _country.default === void 0 ? void 0 : _country.default.find(item => (item === null || item === void 0 ? void 0 : item.code) === 'IN'));
  }, []);
  (0, _react.useEffect)(() => {
    setText('');
    props.setValue('');
    props.setCountry(country);
    if (Array.isArray(country === null || country === void 0 ? void 0 : country.phoneLength)) {
      const maxLength = Math.max.apply(null, country === null || country === void 0 ? void 0 : country.phoneLength);
      setMaxLength(maxLength);
    } else setMaxLength(country === null || country === void 0 ? void 0 : country.phoneLength);
  }, [country]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.SafeAreaView, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.inputContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: styles.dropDownView,
    onPress: () => setOpenModal(true)
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.SvgUri, {
    uri: (country === null || country === void 0 ? void 0 : country.image) ?? '',
    style: styles.countryImage
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require('./images/down-arrow.png'),
    style: styles.arrowImage
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.separatorView
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.inputView
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.phoneText
  }, "+", country === null || country === void 0 ? void 0 : country.phone), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    style: styles.input,
    placeholder: "Enter phone number",
    value: text,
    onChangeText: handleText,
    inputMode: "tel",
    maxLength: maxLength
  }), text && /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: () => {
      setText('');
      props.setValue('');
      _reactNative.Keyboard.dismiss();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require('./images/close.png'),
    style: styles.closeImage
  })))), /*#__PURE__*/_react.default.createElement(_CountryModal.default, {
    openModal,
    setOpenModal,
    setCountry
  }));
};
const styles = _reactNative.StyleSheet.create({
  dropDownView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingRight: (0, _Metrics.horizontalScale)(5),
    borderTopLeftRadius: (0, _Metrics.moderateScale)(5),
    borderBottomLeftRadius: (0, _Metrics.moderateScale)(5)
  },
  countryImage: {
    width: (0, _Metrics.moderateScale)(25),
    height: (0, _Metrics.moderateScale)(25),
    margin: (0, _Metrics.moderateScale)(5)
  },
  arrowImage: {
    width: (0, _Metrics.moderateScale)(15),
    height: (0, _Metrics.moderateScale)(15),
    margin: (0, _Metrics.moderateScale)(5),
    tintColor: 'grey'
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    margin: (0, _Metrics.moderateScale)(10),
    borderRadius: (0, _Metrics.moderateScale)(5),
    marginTop: (0, _Metrics.verticalScale)(30)
  },
  inputView: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: (0, _Metrics.horizontalScale)(5),
    flexDirection: 'row',
    ..._reactNative.Platform.select({
      ios: {
        margin: (0, _Metrics.moderateScale)(5)
      },
      android: {
        marginHorizontal: (0, _Metrics.horizontalScale)(5)
      }
    })
  },
  input: {
    flex: 1,
    fontSize: (0, _Metrics.moderateScale)(15)
  },
  separatorView: {
    width: (0, _Metrics.horizontalScale)(1),
    backgroundColor: 'grey'
  },
  closeImage: {
    width: (0, _Metrics.moderateScale)(15),
    height: (0, _Metrics.moderateScale)(15),
    tintColor: 'grey',
    margin: (0, _Metrics.moderateScale)(5)
  },
  phoneText: {
    fontSize: (0, _Metrics.moderateScale)(15),
    color: 'black',
    marginRight: (0, _Metrics.horizontalScale)(8),
    fontWeight: '600'
  }
});
var _default = PhoneValidation;
exports.default = _default;
//# sourceMappingURL=index.js.map