import {useState} from 'react';
import {KEY_MAP} from '../constants';

const useAppState = () => {
  /**
   * Whether chords should be displayed as Numbers or Chord names.
   * Defaults to True = display as numbers
   */
  const [numbers, setNumbers] = useState(true);

  /**
   * Indicates the user's selected key.
   * Defaults to 'C'
   */
  const [selectedKey, setSelectedKey] = useState(KEY_MAP.get('c'));

  /**
   * Whether the key picker is visible on screen.
   * Defaults to false.
   */
  const [pickerVisible, setPickerVisible] = useState(false);

  return {
    numbers,
    setNumbers,
    selectedKey,
    setSelectedKey,
    pickerVisible,
    setPickerVisible,
  };
};

export default useAppState;
