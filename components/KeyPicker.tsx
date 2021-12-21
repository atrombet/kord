import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Key } from '../interfaces';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
    <View style={styles.keyPicker__container}>
      <Text style={styles.keyPicker__text}>Select a key: </Text>
      {pickerVisible ? (
        <Picker
          style={styles.keyPicker}
          selectedValue={selectedKey.id}
          onValueChange={onValueChange}
          mode="dropdown"
          itemStyle={styles.keyPicker__item}>
          {keys.map(({ id, display }) => {
            return <Picker.Item label={display} value={id} key={id} color="white" />;
          })}
        </Picker>
      ) : (
        <Text style={styles.keyPicker__selectedKey} onPress={showPicker}>
          {selectedKey.display}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  keyPicker__container: {
    height: 216,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.white
  },
  keyPicker: {
    width: 100
  },
  keyPicker__item: {
    width: 100,
    textAlign: 'center'
  },
  keyPicker__text: {
    fontSize: 20,
    textAlign: 'right',
    color: Colors.white,
    marginLeft: 40
  },
  keyPicker__selectedKey: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.white,
    width: 100
  }
});
