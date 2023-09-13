import React, { useEffect, useState } from 'react';
import { FlatList, Image, Keyboard, Modal, Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';
import data from './country.json';
const CountryModal = _ref => {
  let {
    openModal,
    setOpenModal,
    setCountry
  } = _ref;
  const [text, setText] = useState('');
  const [countries, setCountries] = useState(data);
  useEffect(() => {
    if (text) {
      const newCountryData = countries === null || countries === void 0 ? void 0 : countries.filter(item => {
        var _item$label;
        const itemData = item === null || item === void 0 || (_item$label = item.label) === null || _item$label === void 0 ? void 0 : _item$label.toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setCountries(newCountryData);
    } else {
      setCountries(data);
    }
  }, [text]);
  return /*#__PURE__*/React.createElement(Modal, {
    visible: openModal,
    animationType: "slide"
  }, /*#__PURE__*/React.createElement(SafeAreaView, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.closeButton,
    onPress: () => setOpenModal(false)
  }, /*#__PURE__*/React.createElement(Image, {
    source: require('./images/close.png'),
    style: styles.closeImage
  })), /*#__PURE__*/React.createElement(View, {
    style: styles.inputContainer
  }, /*#__PURE__*/React.createElement(Image, {
    source: require('./images/search.png'),
    style: styles.searchImage
  }), /*#__PURE__*/React.createElement(TextInput, {
    value: text,
    onChangeText: setText,
    style: styles.input,
    placeholder: "Search your country..."
  }), text && /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => {
      setText('');
      Keyboard.dismiss();
    }
  }, /*#__PURE__*/React.createElement(Image, {
    source: require('./images/close.png'),
    style: styles.closeImage
  }))), /*#__PURE__*/React.createElement(FlatList, {
    data: countries,
    renderItem: _ref2 => {
      let {
        item
      } = _ref2;
      return /*#__PURE__*/React.createElement(RenderItem, {
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
      return /*#__PURE__*/React.createElement(View, {
        style: styles.emptyView
      }, /*#__PURE__*/React.createElement(Text, {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Pressable, {
    onPress: () => {
      setCountry(item);
      setOpenModal(false);
      setText('');
    },
    style: styles.itemView
  }, /*#__PURE__*/React.createElement(SvgUri, {
    uri: (item === null || item === void 0 ? void 0 : item.image) ?? '',
    style: styles.itemImage
  }), /*#__PURE__*/React.createElement(View, {
    style: (item === null || item === void 0 || (_item$label2 = item.label) === null || _item$label2 === void 0 ? void 0 : _item$label2.length) >= 35 ? {
      flexDirection: 'column'
    } : {
      flexDirection: 'row'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.itemLabel
  }, (item === null || item === void 0 ? void 0 : item.label) ?? ''), /*#__PURE__*/React.createElement(Text, {
    style: styles.itemPhone
  }, "(+", (item === null || item === void 0 ? void 0 : item.phone) ?? '', ")"))), /*#__PURE__*/React.createElement(View, {
    style: styles.itemSeparator
  }));
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  closeButton: {
    borderColor: 'grey',
    borderWidth: 1,
    alignSelf: 'flex-end',
    margin: moderateScale(8),
    padding: moderateScale(2),
    borderRadius: moderateScale(50)
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: moderateScale(50),
    borderColor: 'grey',
    margin: moderateScale(5),
    ...Platform.select({
      ios: {
        padding: moderateScale(2)
      },
      android: {
        paddingHorizontal: horizontalScale(5)
      }
    })
  },
  input: {
    paddingHorizontal: horizontalScale(5),
    flex: 1,
    fontSize: moderateScale(15)
  },
  closeImage: {
    width: moderateScale(15),
    height: moderateScale(15),
    tintColor: 'grey',
    margin: moderateScale(5)
  },
  searchImage: {
    width: moderateScale(20),
    height: moderateScale(20),
    tintColor: 'grey',
    margin: moderateScale(5)
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: moderateScale(2)
  },
  itemImage: {
    width: moderateScale(25),
    height: moderateScale(25),
    margin: moderateScale(2)
  },
  itemLabel: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    margin: moderateScale(2),
    color: 'black'
  },
  itemPhone: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    margin: moderateScale(2),
    color: 'grey'
  },
  itemSeparator: {
    height: verticalScale(1),
    width: '100%',
    backgroundColor: 'lightgrey',
    alignSelf: 'center'
  },
  emptyView: {
    alignSelf: 'center',
    marginTop: verticalScale(20)
  },
  emptyText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: 'grey'
  }
});
export default CountryModal;
//# sourceMappingURL=CountryModal.js.map