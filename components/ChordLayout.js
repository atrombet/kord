import React from 'react';
import {CHORD_MAP} from '../constants';
import {Col, Row, Grid} from 'react-native-easy-grid';
import ChordButton from './ChordButton';

const ChordLayout = ({selectedKey, numbers}) => {
  const chords = Object.keys(selectedKey.chords).reduce(
    (chordMap, chordNum) => {
      return {
        ...chordMap,
        [chordNum]: CHORD_MAP.get(selectedKey.chords[chordNum]),
      };
    },
    {},
  );
  return (
    <Grid>
      <Col></Col>
      <Col>
        <Row></Row>
        <Row><ChordButton numbers={numbers} number="5/7" chord={chords.five_seven}/></Row>
        <Row></Row>
        <Row><ChordButton numbers={numbers} number="6-" chord={chords.six}/></Row>
        <Row></Row>
      </Col>
      <Col>
        <Row><ChordButton numbers={numbers} number="2-" chord={chords.two}/></Row>
        <Row></Row>
        <Row><ChordButton numbers={numbers} number="1" chord={chords.one}/></Row>
        <Row></Row>
        <Row><ChordButton numbers={numbers} number="5" chord={chords.five}/></Row>
      </Col>
      <Col>
        <Row></Row>
        <Row><ChordButton numbers={numbers} number="1/3" chord={chords.one_three}/></Row>
        <Row></Row>
        <Row><ChordButton numbers={numbers} number="4" chord={chords.four}/></Row>
        <Row></Row>
      </Col>
      <Col></Col>
    </Grid>
  );
};

export default ChordLayout;
