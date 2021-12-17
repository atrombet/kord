/**
 * Kord Music App
 * https://github.com/atrombet/kord
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styles from './styles/styles';
import { ChordLayout, KeyPicker, NumberNameSwitch, HeaderBar } from './components';
import { useAppState } from './state/AppState';
import { KEYS } from './constants';
import LinearGradient from 'react-native-linear-gradient';

const App: React.FC = () => {
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
      style={{ height: '100%' }}>
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
    </LinearGradient>
  );
};

export default App;
