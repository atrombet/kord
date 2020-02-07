import React from 'react';
import {View, Image, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/styles';

const HeaderBar = () => {
  const goToResources = () => {
    Linking.openURL('http://kordmusicapp.com/resources');
  };

  return (
    <View style={styles.headerBar}>
      <View style={{width: 30}} />
      <Image
        style={{height: 48, width: 145.5}}
        source={require('../assets/kord-header-logo.png')}
      />
      <TouchableOpacity onPress={goToResources}>
        <Icon name="launch" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;
