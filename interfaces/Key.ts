import { Chord } from '.';

export interface Key {
  id: string;
  display: string;
  chords: { [key: string]: Chord };
}
