import { Key } from '../interfaces';
import { CHORDS } from './chord-constants';

export const KEYS: { [key: string]: Key } = {
  c: {
    id: 'c',
    display: 'C',
    chords: {
      one: CHORDS.C,
      two: CHORDS.Dm,
      three: CHORDS.Em,
      one_three: CHORDS.C_E,
      four: CHORDS.F,
      five: CHORDS.G,
      six: CHORDS.Am,
      five_seven: CHORDS.G_B
    }
  },
  cs: {
    id: 'cs',
    display: 'C#',
    chords: {
      one: CHORDS.CS,
      two: CHORDS.DSm,
      three: CHORDS.Fm,
      one_three: CHORDS.CS_F,
      four: CHORDS.FS,
      five: CHORDS.GS,
      six: CHORDS.ASm,
      five_seven: CHORDS.GS_C
    }
  },
  d: {
    id: 'd',
    display: 'D',
    chords: {
      one: CHORDS.D,
      two: CHORDS.Em,
      three: CHORDS.FSm,
      one_three: CHORDS.D_FS,
      four: CHORDS.G,
      five: CHORDS.A,
      six: CHORDS.Bm,
      five_seven: CHORDS.A_CS
    }
  },
  ds: {
    id: 'ds',
    display: 'D#',
    chords: {
      one: CHORDS.DS,
      two: CHORDS.Fm,
      three: CHORDS.Gm,
      one_three: CHORDS.DS_G,
      four: CHORDS.GS,
      five: CHORDS.AS,
      six: CHORDS.Cm,
      five_seven: CHORDS.AS_D
    }
  },
  e: {
    id: 'e',
    display: 'E',
    chords: {
      one: CHORDS.E,
      two: CHORDS.FSm,
      three: CHORDS.GSm,
      one_three: CHORDS.E_GS,
      four: CHORDS.A,
      five: CHORDS.B,
      six: CHORDS.CSm,
      five_seven: CHORDS.B_DS
    }
  },
  f: {
    id: 'f',
    display: 'F',
    chords: {
      one: CHORDS.F,
      two: CHORDS.Gm,
      three: CHORDS.Am,
      one_three: CHORDS.F_A,
      four: CHORDS.AS,
      five: CHORDS.C,
      six: CHORDS.Dm,
      five_seven: CHORDS.C_E
    }
  },
  fs: {
    id: 'fs',
    display: 'F#',
    chords: {
      one: CHORDS.FS,
      two: CHORDS.GSm,
      three: CHORDS.ASm,
      one_three: CHORDS.FS_AS,
      four: CHORDS.B,
      five: CHORDS.CS,
      six: CHORDS.DSm,
      five_seven: CHORDS.CS_F
    }
  },
  g: {
    id: 'g',
    display: 'G',
    chords: {
      one: CHORDS.G,
      two: CHORDS.Am,
      three: CHORDS.Bm,
      one_three: CHORDS.G_B,
      four: CHORDS.C,
      five: CHORDS.D,
      six: CHORDS.Em,
      five_seven: CHORDS.D_FS
    }
  },
  gs: {
    id: 'gs',
    display: 'G#',
    chords: {
      one: CHORDS.GS,
      two: CHORDS.ASm,
      three: CHORDS.Cm,
      one_three: CHORDS.GS_C,
      four: CHORDS.CS,
      five: CHORDS.DS,
      six: CHORDS.Fm,
      five_seven: CHORDS.DS_G
    }
  },
  a: {
    id: 'a',
    display: 'A',
    chords: {
      one: CHORDS.A,
      two: CHORDS.Bm,
      three: CHORDS.CSm,
      one_three: CHORDS.A_CS,
      four: CHORDS.D,
      five: CHORDS.E,
      six: CHORDS.FSm,
      five_seven: CHORDS.E_GS
    }
  },
  as: {
    id: 'as',
    display: 'A#',
    chords: {
      one: CHORDS.AS,
      two: CHORDS.Cm,
      three: CHORDS.Dm,
      one_three: CHORDS.AS_D,
      four: CHORDS.DS,
      five: CHORDS.F,
      six: CHORDS.Gm,
      five_seven: CHORDS.F_A
    }
  },
  b: {
    id: 'b',
    display: 'B',
    chords: {
      one: CHORDS.B,
      two: CHORDS.CSm,
      three: CHORDS.DSm,
      one_three: CHORDS.B_DS,
      four: CHORDS.E,
      five: CHORDS.FS,
      six: CHORDS.GSm,
      five_seven: CHORDS.FS_AS
    }
  }
};
