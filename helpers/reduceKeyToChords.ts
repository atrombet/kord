import { NUMBER_MAP } from '../constants';
import { Chords, Key } from '../interfaces';
import Sound from '../plugins/Sound';

export const reduceKeyToChords: (key: Key) => Chords = key => {
  return Object.entries(key.chords).reduce((acc, [num, chord]) => {
    return {
      ...acc,
      [num]: {
        ...chord,
        sound: new Sound(chord.filename, Sound.MAIN_BUNDLE),
        number: NUMBER_MAP[num]
      }
    };
  }, {});
};
