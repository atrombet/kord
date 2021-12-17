import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Key } from '../interfaces';
import styles from '../styles/styles';

interface KeyPickerProps {
  selectedKey: Key;
  keys: Key[];
  onValueChange: (value: string) => void;
  pickerVisible: boolean;
  showPicker: () => void;
}

export const KeyPicker: React.FC<KeyPickerProps> = ({
  selectedKey,
  keys,
  onValueChange,
  pickerVisible,
  showPicker
}) => {
  return (
    <View style={styles.keyPickerContainer}>
      <Text style={styles.keyPickerText}>Select a key: </Text>
      {pickerVisible ? (
        <Picker
          style={styles.keyPicker}
          selectedValue={selectedKey.id}
          onValueChange={onValueChange}
          mode="dropdown"
          itemStyle={{ width: 100 }}>
          {keys.map(({ id, display }) => {
            return <Picker.Item label={display} value={id} key={id} color="white" />;
          })}
        </Picker>
      ) : (
        <Text style={{ ...styles.keyPickerText, width: 50 }} onPress={showPicker}>
          {selectedKey.display}
        </Text>
      )}
    </View>
  );
};
