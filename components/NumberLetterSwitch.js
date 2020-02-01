import React from 'react';
import {View, Switch, Text, StyleSheet} from 'react-native';

const NumberLetterSwitch = ({letters, onValueChange}) => {
  return (
    <View style={styles.nlSwitch}>
      <Switch value={letters} onValueChange={onValueChange} />
      <Text>{letters ? 'Letters' : 'Numbers'}</Text>
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
