import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import { horizontalScale, moderateScale, verticalScale } from './Metrics';
import data from './country.json';

const CountryModal = ({ openModal, setOpenModal, setCountry }: any) => {
  const [text, setText] = useState('');
  const [countries, setCountries] = useState(data);

  useEffect(() => {
    if (text) {
      const newCountryData = countries?.filter((item: any) => {
        const itemData = item?.label?.toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });

      setCountries(newCountryData);
    } else {
      setCountries(data);
    }
  }, [text]);

  return (
    <Modal visible={openModal} animationType="slide">
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setOpenModal(false)}
        >
          <Image
            source={require('./images/close.png')}
            style={styles.closeImage}
          />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <Image
            source={require('./images/search.png')}
            style={styles.searchImage}
          />
          <TextInput
            value={text}
            onChangeText={setText}
            style={styles.input}
            placeholder="Search your country..."
          />
          {text && (
            <TouchableOpacity
              onPress={() => {
                setText('');
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
        <FlatList
          data={countries}
          renderItem={({ item }) => (
            <RenderItem {...{ item, setCountry, setText, setOpenModal }} />
          )}
          keyExtractor={(_, index) => index.toString()}
          bounces={false}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => {
            return (
              <View style={styles.emptyView}>
                <Text style={styles.emptyText}>Search something else!</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </Modal>
  );
};

const RenderItem = ({ item, setCountry, setText, setOpenModal }: any) => {
  return (
    <>
      <Pressable
        onPress={() => {
          setCountry(item);
          setOpenModal(false);
          setText('');
        }}
        style={styles.itemView}
      >
        <SvgUri uri={item?.image ?? ''} style={styles.itemImage} />
        <View
          style={
            item?.label?.length >= 35
              ? { flexDirection: 'column' }
              : { flexDirection: 'row' }
          }
        >
          <Text style={styles.itemLabel}>{item?.label ?? ''}</Text>
          <Text style={styles.itemPhone}>(+{item?.phone ?? ''})</Text>
        </View>
      </Pressable>
      <View style={styles.itemSeparator} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeButton: {
    borderColor: 'grey',
    borderWidth: 1,
    alignSelf: 'flex-end',
    margin: moderateScale(8),
    padding: moderateScale(2),
    borderRadius: moderateScale(50),
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
        padding: moderateScale(2),
      },
      android: {
        paddingHorizontal: horizontalScale(5),
      },
    }),
  },
  input: {
    paddingHorizontal: horizontalScale(5),
    flex: 1,
    fontSize: moderateScale(15),
  },
  closeImage: {
    width: moderateScale(15),
    height: moderateScale(15),
    tintColor: 'grey',
    margin: moderateScale(5),
  },
  searchImage: {
    width: moderateScale(20),
    height: moderateScale(20),
    tintColor: 'grey',
    margin: moderateScale(5),
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: moderateScale(2),
  },
  itemImage: {
    width: moderateScale(25),
    height: moderateScale(25),
    margin: moderateScale(2),
  },
  itemLabel: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    margin: moderateScale(2),
    color: 'black',
  },
  itemPhone: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    margin: moderateScale(2),
    color: 'grey',
  },
  itemSeparator: {
    height: verticalScale(1),
    width: '100%',
    backgroundColor: 'lightgrey',
    alignSelf: 'center',
  },
  emptyView: {
    alignSelf: 'center',
    marginTop: verticalScale(20),
  },
  emptyText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: 'grey',
  },
});

export default CountryModal;
