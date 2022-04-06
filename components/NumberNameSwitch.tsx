import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface NameNumberSwitchProps {
  numbers: any;
  onValueChange: any;
}

export const NumberNameSwitch: React.FC<NameNumberSwitchProps> = ({ numbers, onValueChange }) => {
  return (
    <View style={styles.numberNameSwitch}>
      <Text style={styles.numberNameSwitch__names}>Names</Text>
      <Switch value={numbers} onValueChange={onValueChange} />
      <Text style={styles.numberNameSwitch__numbers}>Numbers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberNameSwitch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%'
  },
  numberNameSwitch__numbers: {
    color: Colors.white,
    padding: 16,
    width: 100
  },
  numberNameSwitch__names: {
    color: Colors.white,
    padding: 16,
    width: 100,
    textAlign: 'right'
  }
});
