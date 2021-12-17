import React from 'react';
import { View, Switch, Text } from 'react-native';
import styles from '../styles/styles';

interface NameNumberSwitchProps {
  numbers: any;
  onValueChange: any;
}

export const NumberNameSwitch: React.FC<NameNumberSwitchProps> = ({ numbers, onValueChange }) => {
  return (
    <View style={styles.numberNameSwitch}>
      <Text style={{ ...styles.numberNameSwitchText, textAlign: 'right' }}>Names</Text>
      <Switch value={numbers} onValueChange={onValueChange} />
      <Text style={styles.numberNameSwitchText}>Numbers</Text>
    </View>
  );
};
