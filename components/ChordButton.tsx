import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Chord } from '../interfaces';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface ChordButtonProps {
  numbers: boolean;
  chord: Chord;
  playSound: () => void;
  size?: string;
}

export const ChordButton: React.FC<ChordButtonProps> = ({ numbers, chord, playSound, size }) => {
  let buttonStyle, containerStyle;
  switch (size) {
    case 'large':
      containerStyle = styles.chordButton__containerLarge;
      buttonStyle = styles.chordButton__large;
      break;
    case 'small':
      containerStyle = styles.chordButton__containerSmall;
      buttonStyle = styles.chordButton__small;
      break;
    default:
      containerStyle = styles.chordButton__container;
      buttonStyle = styles.chordButton;
      break;
  }
  return (
    <TouchableOpacity style={containerStyle} onPressIn={playSound}>
      <Text style={buttonStyle}>{numbers ? chord.number : chord.display}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chordButton__container: {
    height: 56,
    width: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: Colors.white
  },
  chordButton: {
    height: 54,
    width: 54,
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 19,
    lineHeight: 18,
    color: Colors.white
  },
  chordButton__containerLarge: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.white
  },
  chordButton__large: {
    height: 58,
    width: 58,
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 19,
    lineHeight: 24,
    color: Colors.white
  },
  chordButton__containerSmall: {
    position: 'absolute',
    top: -36,
    right: -12,
    height: 34,
    width: 34,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.white
  },
  chordButton__small: {
    height: 32,
    width: 32,
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 10,
    lineHeight: 14,
    color: Colors.white
  }
});
