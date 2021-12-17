import React, { useState } from 'react';
import { NUMBER_MAP } from '../constants';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ChordButton } from './ChordButton';
import Sound from 'react-native-sound';
import styles from '../styles/styles';
import { Key, Chord } from '../interfaces';

interface ChordLayoutProps {
  selectedKey: Key;
  numbers: boolean;
}

export const ChordLayout: React.FC<ChordLayoutProps> = ({ selectedKey, numbers }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [playing, setPlaying] = useState<Sound | undefined>(undefined);

  const chords: { [key: string]: Chord } = Object.entries(selectedKey.chords).reduce((acc, [num, chord]) => {
    return {
      ...acc,
      [num]: {
        ...chord,
        sound: new Sound(chord.filename, Sound.MAIN_BUNDLE),
        number: NUMBER_MAP[num]
      }
    };
  }, {});

  const playChord = (chordId: string) => {
    setPlaying(currentlyPlaying => {
      if (currentlyPlaying) {
        currentlyPlaying.stop();
      }
      chords[chordId].sound?.play();
      return chords[chordId].sound;
    });
  };

  return (
    <Grid style={styles.chordGrid}>
      <Col />
      <Col>
        <Row style={styles.chordGridCell} />
        <Row style={styles.chordGridCell}>
          <ChordButton numbers={numbers} chord={chords.five_seven} playSound={() => playChord('five_seven')} />
        </Row>
        <Row style={styles.chordGridCellLarge} />
        <Row style={styles.chordGridCell}>
          <ChordButton numbers={numbers} chord={chords.six} playSound={() => playChord('six')} />
        </Row>
        <Row style={styles.chordGridCell} />
      </Col>
      <Col style={styles.chordGridCenterColumn}>
        <Row style={styles.chordGridCell}>
          <ChordButton numbers={numbers} chord={chords.two} playSound={() => playChord('two')} />
        </Row>
        <Row style={styles.chordGridCell} />
        <Row style={styles.chordGridCellLarge}>
          <ChordButton numbers={numbers} chord={chords.one} size="large" playSound={() => playChord('one')} />
        </Row>
        <Row style={styles.chordGridCell} />
        <Row style={styles.chordGridCell}>
          <ChordButton numbers={numbers} chord={chords.five} playSound={() => playChord('five')} />
        </Row>
      </Col>
      <Col>
        <Row style={styles.chordGridCell} />
        <Row style={styles.chordGridCell}>
          <ChordButton numbers={numbers} chord={chords.one_three} playSound={() => playChord('one_three')} />
          <ChordButton numbers={numbers} chord={chords.three} size="small" playSound={() => playChord('three')} />
        </Row>
        <Row style={styles.chordGridCellLarge} />
        <Row style={styles.chordGridCell}>
          <ChordButton numbers={numbers} chord={chords.four} playSound={() => playChord('four')} />
        </Row>
        <Row style={styles.chordGridCell} />
      </Col>
      <Col />
    </Grid>
  );
};
