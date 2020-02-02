import React from 'react';
import {View, Text} from 'react-native';
import Sound from 'react-native-sound';
import styles from '../styles/styles';

const ChordButton = ({numbers, number, chord}) => {
  const sound = new Sound(chord.fileName, Sound.MAIN_BUNDLE);
  const playChord = () => {
    sound.play();
  };
  return (
    <View style={styles.chordButtonContainer}>
      <Text style={styles.chordButton} onPress={playChord}>
        {numbers ? number : chord.display}
      </Text>
    </View>
  );
};

export default ChordButton;
