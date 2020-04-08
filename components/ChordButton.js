import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';

const ChordButton = ({numbers, chord, playSound, size}) => {
  let buttonStyle, containerStyle;
  switch (size) {
    case 'large':
      containerStyle = styles.chordButtonContainerLarge;
      buttonStyle = styles.chordButtonLarge;
      break;
    case 'small':
      containerStyle = styles.chordButtonContainerSmall;
      buttonStyle = styles.chordButtonSmall;
      break;
    default:
      containerStyle = styles.chordButtonContainer;
      buttonStyle = styles.chordButton;
      break;
  }
  return (
    <View style={containerStyle}>
      <Text style={buttonStyle} onPress={playSound}>
        {numbers ? chord.number : chord.display}
      </Text>
    </View>
  );
};

export default ChordButton;
