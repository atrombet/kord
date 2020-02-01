import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chordButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333333',
    textAlign: 'center',
  },
  numberNameSwitch: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyPickerContainer: {
    height: 216,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyPicker: {
    width: 40,
  },
  keyPickerText: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.black,
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
