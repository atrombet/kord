/**
 * Kord Music App
 * https://github.com/atrombet/kord
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styles from './styles/styles';
import {
  ChordLayout,
  KeyPicker,
  NumberNameSwitch,
  HeaderBar,
} from './components';
import useAppState from './state/AppState';
import {KEY_MAP} from './constants';

const App: () => React$Node = () => {
  // Setup state
  const {
    numbers,
    setNumbers,
    selectedKey,
    setSelectedKey,
    pickerVisible,
    setPickerVisible,
  } = useAppState();
  // Create array of key values to populate picker.
  const keys = Array.from(KEY_MAP.values());

  // Define functions that update state
  const updateNumbers = value => {
    setNumbers(value);
  };
  const updateKey = value => {
    setPickerVisible(false);
    setSelectedKey(KEY_MAP.get(value));
  };
  const showPicker = () => {
    setPickerVisible(true);
  };

  // View
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
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
    </>
  );
};

export default App;
