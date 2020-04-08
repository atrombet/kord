import React from 'react';
import {View, Switch, Text} from 'react-native';
import styles from '../styles/styles';

const NumberNameSwitch = ({numbers, onValueChange}) => {
  return (
    <View style={styles.numberNameSwitch}>
      <Text style={{...styles.numberNameSwitchText, textAlign: 'right'}}>Names</Text>
      <Switch value={numbers} onValueChange={onValueChange} />
      <Text style={styles.numberNameSwitchText}>Numbers</Text>
    </View>
  );
};

export default NumberNameSwitch;
