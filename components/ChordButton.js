import React from 'react';
import {View, Button} from 'react-native';
import Sound from 'react-native-sound';
import styles from '../styles/styles';

const ChordButton = ({numbers}) => {
  const chord = new Sound('c.mp3', Sound.MAIN_BUNDLE);
  const playChord = () => {
    chord.play();
  };
  return (
    <View style={styles.chordButton}>
      <Button title={numbers ? '1' : 'C'} onPress={playChord} />
    </View>
  );
};

export default ChordButton;
