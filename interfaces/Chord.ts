import Sound from '../plugins/Sound';

export interface Chord {
  number?: string;
  name: string;
  display: string;
  filename: string;
  sound?: Sound;
}
