import React, { useState } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ChordButton } from './ChordButton';
import Sound from '../plugins/Sound';
import { Chords } from '../interfaces';
import { StyleSheet } from 'react-native';

interface ChordLayoutProps {
  chords: Chords;
  numbers: boolean;
}

export const ChordLayout: React.FC<ChordLayoutProps> = ({ chords, numbers }) => {
  const [playing, setPlaying] = useState<Sound | undefined>(undefined);

  const playChord = (chordId: string) => {
    playing?.stop();
    setPlaying(() => {
      const newSound = chords[chordId].sound;
      newSound?.play();
      return newSound;
    });
  };

  return (
    <Grid style={styles.chordGrid}>
      <Col />
      <Col>
        <Row style={styles.chordGrid__cell} />
        <Row style={styles.chordGrid__cell}>
          <ChordButton numbers={numbers} chord={chords.five_seven} playSound={() => playChord('five_seven')} />
        </Row>
        <Row style={styles.chordGrid__cellLarge} />
        <Row style={styles.chordGrid__cell}>
          <ChordButton numbers={numbers} chord={chords.six} playSound={() => playChord('six')} />
        </Row>
        <Row style={styles.chordGrid__cell} />
      </Col>
      <Col style={styles.chordGrid__centerColumn}>
        <Row style={styles.chordGrid__cell}>
          <ChordButton numbers={numbers} chord={chords.two} playSound={() => playChord('two')} />
        </Row>
        <Row style={styles.chordGrid__cell} />
        <Row style={styles.chordGrid__cellLarge}>
          <ChordButton numbers={numbers} chord={chords.one} size="large" playSound={() => playChord('one')} />
        </Row>
        <Row style={styles.chordGrid__cell} />
        <Row style={styles.chordGrid__cell}>
          <ChordButton numbers={numbers} chord={chords.five} playSound={() => playChord('five')} />
        </Row>
      </Col>
      <Col>
        <Row style={styles.chordGrid__cell} />
        <Row style={styles.chordGrid__cell}>
          <ChordButton numbers={numbers} chord={chords.one_three} playSound={() => playChord('one_three')} />
          <ChordButton numbers={numbers} chord={chords.three} size="small" playSound={() => playChord('three')} />
        </Row>
        <Row style={styles.chordGrid__cellLarge} />
        <Row style={styles.chordGrid__cell}>
          <ChordButton numbers={numbers} chord={chords.four} playSound={() => playChord('four')} />
        </Row>
        <Row style={styles.chordGrid__cell} />
      </Col>
      <Col />
    </Grid>
  );
};

const styles = StyleSheet.create({
  chordGrid: {
    alignItems: 'center',
    height: '60%'
  },
  chordGrid__centerColumn: {
    marginHorizontal: 20
  },
  chordGrid__cell: {
    marginVertical: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56
  },
  chordGrid__cellLarge: {
    marginVertical: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  }
});
