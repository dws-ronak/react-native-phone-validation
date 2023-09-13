import React, { useEffect, useState } from 'react';
import {
  Image,
  Keyboard,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import CountryModal from './CountryModal';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';
import data from './country.json';

export const checkPhoneValidation = (country: any, phone: any) => {
  if (Array.isArray(country?.phoneLength)) {
    if (country?.phoneLength?.includes(phone?.length)) return true;
    else return false;
  } else {
    if (phone?.length === country?.phoneLength) return true;
    else return false;
  }
};

const PhoneValidation = (props: any) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [country, setCountry] = useState<any>({});
  const [text, setText] = useState<string>('');
  const [maxLength, setMaxLength] = useState<number>(0);

  const handleText = (text: string) => {
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
    setCountry(data?.find((item: any) => item?.code === 'IN'));
    props.setCountry(data?.find((item: any) => item?.code === 'IN'));
  }, []);

  useEffect(() => {
    setText('');
    props.setValue('');
    props.setCountry(country);

    if (Array.isArray(country?.phoneLength)) {
      const maxLength = Math.max.apply(null, country?.phoneLength);
      setMaxLength(maxLength);
    } else setMaxLength(country?.phoneLength);
  }, [country]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.dropDownView}
          onPress={() => setOpenModal(true)}
        >
          <SvgUri uri={country?.image ?? ''} style={styles.countryImage} />
          <Image
            source={require('./images/down-arrow.png')}
            style={styles.arrowImage}
          />
        </TouchableOpacity>
        <View style={styles.separatorView} />
        <View style={styles.inputView}>
          <Text style={styles.phoneText}>+{country?.phone}</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            value={text}
            onChangeText={handleText}
            inputMode="tel"
            maxLength={maxLength}
          />
          {text && (
            <TouchableOpacity
              onPress={() => {
                setText('');
                props.setValue('');
                Keyboard.dismiss();
              }}
            >
              <Image
                source={require('./images/close.png')}
                style={styles.closeImage}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <CountryModal {...{ openModal, setOpenModal, setCountry }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dropDownView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingRight: horizontalScale(5),
    borderTopLeftRadius: moderateScale(5),
    borderBottomLeftRadius: moderateScale(5),
  },
  countryImage: {
    width: moderateScale(25),
    height: moderateScale(25),
    margin: moderateScale(5),
  },
  arrowImage: {
    width: moderateScale(15),
    height: moderateScale(15),
    margin: moderateScale(5),
    tintColor: 'grey',
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    margin: moderateScale(10),
    borderRadius: moderateScale(5),
    marginTop: verticalScale(30),
  },
  inputView: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: horizontalScale(5),
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        margin: moderateScale(5),
      },
      android: {
        marginHorizontal: horizontalScale(5),
      },
    }),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(15),
  },
  separatorView: {
    width: horizontalScale(1),
    backgroundColor: 'grey',
  },
  closeImage: {
    width: moderateScale(15),
    height: moderateScale(15),
    tintColor: 'grey',
    margin: moderateScale(5),
  },
  phoneText: {
    fontSize: moderateScale(15),
    color: 'black',
    marginRight: horizontalScale(8),
    fontWeight: '600',
  },
});

export default PhoneValidation;
