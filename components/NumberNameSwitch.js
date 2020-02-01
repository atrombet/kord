import React from 'react';
import {View, Switch, Text} from 'react-native';
import styles from '../styles/styles';

const NumberNameSwitch = ({numbers, onValueChange}) => {
  return (
    <View style={styles.numberNameSwitch}>
      <Switch value={numbers} onValueChange={onValueChange} />
      <Text>{numbers ? 'Numbers' : 'Names'}</Text>
    </View>
  );
};

export default NumberNameSwitch;
