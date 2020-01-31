import React from 'react';
import {View, Switch, Text, StyleSheet} from 'react-native';
import useAppState from '../state/AppState';

const NumberLetterSwitch = () => {
  const {mode, setMode} = useAppState();
  const updateMode = value => {
    setMode(value);
  };
  return (
    <View style={styles.nlSwitch}>
      <Switch value={mode} onValueChange={updateMode} />
      <Text>{mode ? 'Letters' : 'Numbers'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nlSwitch: {
    flex: 1,
    alignItems: 'center',
  },
});

export default NumberLetterSwitch;
