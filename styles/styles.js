import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  gradient: {
    ...StyleSheet.absoluteFill,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerBar: {
    width: '100%',
    height: 64,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Avenir Next',
    fontSize: 32,
  },
  chordGrid: {
    alignItems: 'center',
  },
  chordGridCenterColumn: {
    marginHorizontal: 20,
  },
  chordGridCell: {
    marginVertical: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
  },
  chordGridCellLarge: {
    marginVertical: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  chordButtonContainer: {
    height: 56,
    width: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  chordButton: {
    height: 54,
    width: 54,
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 19,
    lineHeight: 18,
    color: Colors.white,
  },
  chordButtonContainerLarge: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  chordButtonLarge: {
    height: 58,
    width: 58,
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 17,
    lineHeight: 24,
    color: Colors.white,
  },
  chordButtonContainerSmall: {
    position: 'absolute',
    top: -36,
    right: -12,
    height: 34,
    width: 34,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  chordButtonSmall: {
    height: 32,
    width: 32,
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 10,
    lineHeight: 14,
    color: Colors.white,
  },
  numberNameSwitch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberNameSwitchText: {
    color: Colors.white,
    padding: 16,
    width: 100,
  },
  keyPickerContainer: {
    height: 216,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.white,
  },
  keyPicker: {
    width: 40,
  },
  keyPickerText: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.white,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default styles;
