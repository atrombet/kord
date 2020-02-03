import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';

const ChordButton = ({numbers, chord, playSound}) => {
  return (
    <View style={styles.chordButtonContainer}>
      <Text style={styles.chordButton} onPress={playSound}>
        {numbers ? chord.number : chord.display}
      </Text>
    </View>
  );
};

export default ChordButton;
