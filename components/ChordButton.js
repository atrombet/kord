import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Sound from 'react-native-sound';

const ChordButton = ({letters}) => {
  const chord = new Sound('c.mp3', Sound.MAIN_BUNDLE);
  const playChord = () => {
    chord.play();
  };
  return (
    <View style={styles.chordButton}>
      <Button title={letters ? 'C' : '1'} onPress={playChord} />
    </View>
  );
};

const styles = StyleSheet.create({
  chordButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333333',
    textAlign: 'center',
  },
});

export default ChordButton;
