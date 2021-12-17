import Sound from 'react-native-sound';

export interface Chord {
  number?: string;
  name: string;
  display: string;
  filename: string;
  sound?: Sound;
}
