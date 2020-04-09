import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
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
    <TouchableOpacity style={containerStyle} onPressIn={playSound}>
      <Text style={buttonStyle}>{numbers ? chord.number : chord.display}</Text>
    </TouchableOpacity>
  );
};

export default ChordButton;
