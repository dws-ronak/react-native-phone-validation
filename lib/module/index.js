import React, { useEffect, useState } from 'react';
import { Image, Keyboard, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import CountryModal from './CountryModal';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';
import data from './country.json';
export const checkPhoneValidation = (country, phone) => {
  if (Array.isArray(country === null || country === void 0 ? void 0 : country.phoneLength)) {
    var _country$phoneLength;
    if (country !== null && country !== void 0 && (_country$phoneLength = country.phoneLength) !== null && _country$phoneLength !== void 0 && _country$phoneLength.includes(phone === null || phone === void 0 ? void 0 : phone.length)) return true;else return false;
  } else {
    if ((phone === null || phone === void 0 ? void 0 : phone.length) === (country === null || country === void 0 ? void 0 : country.phoneLength)) return true;else return false;
  }
};
const PhoneValidation = props => {
  const [openModal, setOpenModal] = useState(false);
  const [country, setCountry] = useState({});
  const [text, setText] = useState('');
  const [maxLength, setMaxLength] = useState(0);
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
  useEffect(() => {
    setCountry(data === null || data === void 0 ? void 0 : data.find(item => (item === null || item === void 0 ? void 0 : item.code) === 'IN'));
    props.setCountry(data === null || data === void 0 ? void 0 : data.find(item => (item === null || item === void 0 ? void 0 : item.code) === 'IN'));
  }, []);
  useEffect(() => {
    setText('');
    props.setValue('');
    props.setCountry(country);
    if (Array.isArray(country === null || country === void 0 ? void 0 : country.phoneLength)) {
      const maxLength = Math.max.apply(null, country === null || country === void 0 ? void 0 : country.phoneLength);
      setMaxLength(maxLength);
    } else setMaxLength(country === null || country === void 0 ? void 0 : country.phoneLength);
  }, [country]);
  return /*#__PURE__*/React.createElement(SafeAreaView, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.inputContainer
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.dropDownView,
    onPress: () => setOpenModal(true)
  }, /*#__PURE__*/React.createElement(SvgUri, {
    uri: (country === null || country === void 0 ? void 0 : country.image) ?? '',
    style: styles.countryImage
  }), /*#__PURE__*/React.createElement(Image, {
    source: require('./images/down-arrow.png'),
    style: styles.arrowImage
  })), /*#__PURE__*/React.createElement(View, {
    style: styles.separatorView
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.inputView
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.phoneText
  }, "+", country === null || country === void 0 ? void 0 : country.phone), /*#__PURE__*/React.createElement(TextInput, {
    style: styles.input,
    placeholder: "Enter phone number",
    value: text,
    onChangeText: handleText,
    inputMode: "tel",
    maxLength: maxLength
  }), text && /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => {
      setText('');
      props.setValue('');
      Keyboard.dismiss();
    }
  }, /*#__PURE__*/React.createElement(Image, {
    source: require('./images/close.png'),
    style: styles.closeImage
  })))), /*#__PURE__*/React.createElement(CountryModal, {
    openModal,
    setOpenModal,
    setCountry
  }));
};
const styles = StyleSheet.create({
  dropDownView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingRight: horizontalScale(5),
    borderTopLeftRadius: moderateScale(5),
    borderBottomLeftRadius: moderateScale(5)
  },
  countryImage: {
    width: moderateScale(25),
    height: moderateScale(25),
    margin: moderateScale(5)
  },
  arrowImage: {
    width: moderateScale(15),
    height: moderateScale(15),
    margin: moderateScale(5),
    tintColor: 'grey'
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    margin: moderateScale(10),
    borderRadius: moderateScale(5),
    marginTop: verticalScale(30)
  },
  inputView: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: horizontalScale(5),
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        margin: moderateScale(5)
      },
      android: {
        marginHorizontal: horizontalScale(5)
      }
    })
  },
  input: {
    flex: 1,
    fontSize: moderateScale(15)
  },
  separatorView: {
    width: horizontalScale(1),
    backgroundColor: 'grey'
  },
  closeImage: {
    width: moderateScale(15),
    height: moderateScale(15),
    tintColor: 'grey',
    margin: moderateScale(5)
  },
  phoneText: {
    fontSize: moderateScale(15),
    color: 'black',
    marginRight: horizontalScale(8),
    fontWeight: '600'
  }
});
export default PhoneValidation;
//# sourceMappingURL=index.js.map