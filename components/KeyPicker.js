import React from 'react';
import {View, Picker, Text} from 'react-native';
import styles from '../styles/styles';

const KeyPicker = ({
  selectedKey,
  keys,
  onValueChange,
  pickerVisible,
  showPicker,
}) => {
  return (
    <View style={styles.keyPickerContainer}>
      <Text style={styles.keyPickerText}>Select a key: </Text>
      {pickerVisible ? (
        <Picker
          style={styles.keyPicker}
          selectedValue={selectedKey.id}
          onValueChange={onValueChange}
          mode="dropdown">
          {keys.map(({id, display}, index) => {
            return <Picker.Item label={display} value={id} key={index} />;
          })}
        </Picker>
      ) : (
        <Text style={{...styles.keyPickerText, width: 40}} onPress={showPicker}>{selectedKey.display}</Text>
      )}
    </View>
  );
};

export default KeyPicker;
