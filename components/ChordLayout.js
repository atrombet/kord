import React, {useState} from 'react';
import {CHORD_MAP, NUMBER_MAP} from '../constants';
import {Col, Row, Grid} from 'react-native-easy-grid';
import ChordButton from './ChordButton';
import Sound from 'react-native-sound';

const ChordLayout = ({selectedKey, numbers}) => {
  const [playing, setPlaying] = useState(null);

  const chords = Object.keys(selectedKey.chords).reduce(
    (chordMap, chordNum) => {
      const chordInfo = CHORD_MAP.get(selectedKey.chords[chordNum]);
      return {
        ...chordMap,
        [chordNum]: {
          ...chordInfo,
          sound: new Sound(chordInfo.fileName, Sound.MAIN_BUNDLE),
          number: NUMBER_MAP[chordNum],
        },
      };
    },
    {},
  );

  const playChord = chordId => {
    setPlaying(currentlyPlaying => {
      if (currentlyPlaying) {
        currentlyPlaying.stop();
      }
      chords[chordId].sound.play();
      return chords[chordId].sound;
    });
  };

  return (
    <Grid>
      <Col></Col>
      <Col>
        <Row></Row>
        <Row><ChordButton numbers={numbers} chord={chords.five_seven} playSound={() => playChord('five_seven')}/></Row>
        <Row></Row>
        <Row><ChordButton numbers={numbers} chord={chords.six} playSound={() => playChord('six')}/></Row>
        <Row></Row>
      </Col>
      <Col>
        <Row><ChordButton numbers={numbers} chord={chords.two} playSound={() => playChord('two')}/></Row>
        <Row></Row>
        <Row><ChordButton numbers={numbers} chord={chords.one} playSound={() => playChord('one')}/></Row>
        <Row></Row>
        <Row><ChordButton numbers={numbers} chord={chords.five} playSound={() => playChord('five')}/></Row>
      </Col>
      <Col>
        <Row></Row>
        <Row><ChordButton numbers={numbers} chord={chords.one_three} playSound={() => playChord('one_three')}/></Row>
        <Row></Row>
        <Row><ChordButton numbers={numbers} chord={chords.four} playSound={() => playChord('four')}/></Row>
        <Row></Row>
      </Col>
      <Col></Col>
    </Grid>
  );
};

export default ChordLayout;
