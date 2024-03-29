import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
//Icons
import Icons from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

const Search = () => {
  const themeMode = useSelector(state => state.theme.mode);
  return (
    <View style={{
      flex: 1,
      backgroundColor: themeMode.background,
    }}>
      <TextInput
        style={{
          width: '90%',
          height: 60,
          marginLeft: 19,
          marginVertical: 10,
          paddingLeft: 20,
          backgroundColor: '#e3e1e1',
          borderRadius: 30,
          color: '#333333',
          elevation: 6,
          fontSize: 20,
          fontFamily: 'Nunito-Bold'
        }}
        placeholder="Search"
        placeholderTextColor={'#000'}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          marginLeft: 290,
          marginTop: 25,
          width: 35,
          height: 35,
        }}>
        <Icons name={'search'} size={30} color={'#333333'} />
      </TouchableOpacity>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
          <View
            style={{
              width: '45%',
              height: 190,
              backgroundColor: 'grey',
              elevation: 6,
              borderRadius: 15,
              margin: 5,
            }}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
