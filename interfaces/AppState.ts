import React from 'react';
import { Key } from './Key';

export interface AppState {
  numbers: boolean;
  setNumbers: React.Dispatch<React.SetStateAction<boolean>>;
  selectedKey: Key;
  setSelectedKey: React.Dispatch<React.SetStateAction<Key>>;
  pickerVisible: boolean;
  setPickerVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
