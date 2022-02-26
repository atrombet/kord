/**
 * Kord Music App
 * https://github.com/atrombet/kord
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Platform } from 'react-native';
import { ChordLayout, KeyPicker, NumberNameSwitch, HeaderBar } from './components';
import { useAppState } from './state/AppState';
import { KEYS } from './constants';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-splash-screen';

export const App: React.FC = () => {
  //Hide Splash screen on app load.
  useEffect(() => {
    SplashScreen.hide();
  });

  // Setup state
  const { numbers, setNumbers, selectedKey, setSelectedKey, pickerVisible, setPickerVisible } = useAppState();
  // Create array of key values to populate picker.
  const keys = Object.values(KEYS);

  // Define functions that update state
  const updateNumbers = (value: boolean) => {
    setNumbers(value);
  };
  const updateKey = (value: string) => {
    setPickerVisible(false);
    setSelectedKey(KEYS[value]);
  };
  const showPicker = () => {
    setPickerVisible(true);
  };

  // View
  return (
    <LinearGradient
      useAngle={true}
      angle={45}
      angleCenter={{ x: 0.5, y: 0.5 }}
      colors={['#072a62', '#0c4546']}
      style={styles.app__gradient}>
      {Platform.OS === 'ios' ? (
        <StatusBar barStyle="light-content" />
      ) : (
        <StatusBar backgroundColor="transparent" translucent />
      )}
      <SafeAreaView style={styles.app__container}>
        <HeaderBar />
        <ChordLayout selectedKey={selectedKey} numbers={numbers} />
        <NumberNameSwitch numbers={numbers} onValueChange={updateNumbers} />
        <KeyPicker
          selectedKey={selectedKey}
          keys={keys}
          pickerVisible={pickerVisible}
          showPicker={showPicker}
          onValueChange={updateKey}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  app__gradient: {
    height: '100%',
    paddingTop: Platform.OS === 'ios' ? 0 : 40
  },
  app__container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
