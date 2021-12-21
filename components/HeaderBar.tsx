import React from 'react';
import { View, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const HeaderBar: React.FC = () => {
  const goToResources = () => {
    Linking.openURL('http://kordmusicapp.com/resources');
  };

  return (
    <View style={styles.headerBar}>
      <View style={styles.headerBar__spacer} />
      <Image style={styles.headerBar__logo} source={require('../assets/kord-header-logo.png')} />
      <TouchableOpacity onPress={goToResources}>
        <Icon name="launch" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    width: '100%',
    height: 64,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerBar__spacer: {
    width: 30
  },
  headerBar__logo: {
    height: 48,
    width: 145.5
  }
});
