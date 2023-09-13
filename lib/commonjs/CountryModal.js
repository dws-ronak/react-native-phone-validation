"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeSvg = require("react-native-svg");
var _Metrics = require("./Metrics");
var _country = _interopRequireDefault(require("./country.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const CountryModal = _ref => {
  let {
    openModal,
    setOpenModal,
    setCountry
  } = _ref;
  const [text, setText] = (0, _react.useState)('');
  const [countries, setCountries] = (0, _react.useState)(_country.default);
  (0, _react.useEffect)(() => {
    if (text) {
      const newCountryData = countries === null || countries === void 0 ? void 0 : countries.filter(item => {
        var _item$label;
        const itemData = item === null || item === void 0 || (_item$label = item.label) === null || _item$label === void 0 ? void 0 : _item$label.toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setCountries(newCountryData);
    } else {
      setCountries(_country.default);
    }
  }, [text]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
    visible: openModal,
    animationType: "slide"
  }, /*#__PURE__*/_react.default.createElement(_reactNative.SafeAreaView, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: styles.closeButton,
    onPress: () => setOpenModal(false)
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require('./images/close.png'),
    style: styles.closeImage
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.inputContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require('./images/search.png'),
    style: styles.searchImage
  }), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    value: text,
    onChangeText: setText,
    style: styles.input,
    placeholder: "Search your country..."
  }), text && /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: () => {
      setText('');
      _reactNative.Keyboard.dismiss();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require('./images/close.png'),
    style: styles.closeImage
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    data: countries,
    renderItem: _ref2 => {
      let {
        item
      } = _ref2;
      return /*#__PURE__*/_react.default.createElement(RenderItem, {
        item,
        setCountry,
        setText,
        setOpenModal
      });
    },
    keyExtractor: (_, index) => index.toString(),
    bounces: false,
    showsVerticalScrollIndicator: false,
    ListEmptyComponent: () => {
      return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
        style: styles.emptyView
      }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
        style: styles.emptyText
      }, "Search something else!"));
    }
  })));
};
const RenderItem = _ref3 => {
  var _item$label2;
  let {
    item,
    setCountry,
    setText,
    setOpenModal
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: () => {
      setCountry(item);
      setOpenModal(false);
      setText('');
    },
    style: styles.itemView
  }, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.SvgUri, {
    uri: (item === null || item === void 0 ? void 0 : item.image) ?? '',
    style: styles.itemImage
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: (item === null || item === void 0 || (_item$label2 = item.label) === null || _item$label2 === void 0 ? void 0 : _item$label2.length) >= 35 ? {
      flexDirection: 'column'
    } : {
      flexDirection: 'row'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.itemLabel
  }, (item === null || item === void 0 ? void 0 : item.label) ?? ''), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.itemPhone
  }, "(+", (item === null || item === void 0 ? void 0 : item.phone) ?? '', ")"))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.itemSeparator
  }));
};
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  },
  closeButton: {
    borderColor: 'grey',
    borderWidth: 1,
    alignSelf: 'flex-end',
    margin: (0, _Metrics.moderateScale)(8),
    padding: (0, _Metrics.moderateScale)(2),
    borderRadius: (0, _Metrics.moderateScale)(50)
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: (0, _Metrics.moderateScale)(50),
    borderColor: 'grey',
    margin: (0, _Metrics.moderateScale)(5),
    ..._reactNative.Platform.select({
      ios: {
        padding: (0, _Metrics.moderateScale)(2)
      },
      android: {
        paddingHorizontal: (0, _Metrics.horizontalScale)(5)
      }
    })
  },
  input: {
    paddingHorizontal: (0, _Metrics.horizontalScale)(5),
    flex: 1,
    fontSize: (0, _Metrics.moderateScale)(15)
  },
  closeImage: {
    width: (0, _Metrics.moderateScale)(15),
    height: (0, _Metrics.moderateScale)(15),
    tintColor: 'grey',
    margin: (0, _Metrics.moderateScale)(5)
  },
  searchImage: {
    width: (0, _Metrics.moderateScale)(20),
    height: (0, _Metrics.moderateScale)(20),
    tintColor: 'grey',
    margin: (0, _Metrics.moderateScale)(5)
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: (0, _Metrics.moderateScale)(2)
  },
  itemImage: {
    width: (0, _Metrics.moderateScale)(25),
    height: (0, _Metrics.moderateScale)(25),
    margin: (0, _Metrics.moderateScale)(2)
  },
  itemLabel: {
    fontSize: (0, _Metrics.moderateScale)(15),
    fontWeight: '500',
    margin: (0, _Metrics.moderateScale)(2),
    color: 'black'
  },
  itemPhone: {
    fontSize: (0, _Metrics.moderateScale)(14),
    fontWeight: 'bold',
    margin: (0, _Metrics.moderateScale)(2),
    color: 'grey'
  },
  itemSeparator: {
    height: (0, _Metrics.verticalScale)(1),
    width: '100%',
    backgroundColor: 'lightgrey',
    alignSelf: 'center'
  },
  emptyView: {
    alignSelf: 'center',
    marginTop: (0, _Metrics.verticalScale)(20)
  },
  emptyText: {
    fontSize: (0, _Metrics.moderateScale)(16),
    fontWeight: 'bold',
    color: 'grey'
  }
});
var _default = CountryModal;
exports.default = _default;
//# sourceMappingURL=CountryModal.js.map