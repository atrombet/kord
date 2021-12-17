import { useState } from 'react';
import { KEYS } from '../constants';
import { Key, AppState } from '../interfaces';

export const useAppState = (): AppState => {
  /**
   * Whether chords should be displayed as Numbers or Chord names.
   * Defaults to True = display as numbers
   */
  const [numbers, setNumbers] = useState<boolean>(true);

  /**
   * Indicates the user's selected key.
   * Defaults to 'C'
   */
  const [selectedKey, setSelectedKey] = useState<Key>(KEYS.c);

  /**
   * Whether the key picker is visible on screen.
   * Defaults to false.
   */
  const [pickerVisible, setPickerVisible] = useState<boolean>(false);

  return {
    numbers,
    setNumbers,
    selectedKey,
    setSelectedKey,
    pickerVisible,
    setPickerVisible
  };
};
