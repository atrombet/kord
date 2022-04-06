import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
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
  const iosPicker = pickerVisible ? (
    <Picker
      style={styles.keyPicker__iOS}
      selectedValue={selectedKey.id}
      onValueChange={onValueChange}
      itemStyle={styles.keyPicker__item__iOS}>
      {keys.map(({ id, display }) => {
        return <Picker.Item label={display} value={id} key={id} color="white" />;
      })}
    </Picker>
  ) : (
    <Text style={styles.keyPicker__selectedKey} onPress={showPicker}>
      {selectedKey.display}
    </Text>
  );

  const androidPicker = (
    <Picker
      style={styles.keyPicker__android}
      selectedValue={selectedKey.id}
      onValueChange={onValueChange}
      mode="dropdown"
      dropdownIconColor="white">
      {keys.map(({ id, display }) => {
        return <Picker.Item label={display} value={id} key={id} />;
      })}
    </Picker>
  );

  return (
    <View style={styles.keyPicker__container}>
      <Text style={styles.keyPicker__text}>Select a key: </Text>
      {Platform.OS === 'ios' ? iosPicker : androidPicker}
    </View>
  );
};

const styles = StyleSheet.create({
  keyPicker__container: {
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.white
  },
  keyPicker__iOS: {
    width: 100
  },
  keyPicker__android: {
    width: 120,
    color: Colors.white
  },
  keyPicker__item__iOS: {
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
