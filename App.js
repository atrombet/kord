/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import {Header, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import styles from './styles/styles';
import {Section, NumberLetterSwitch, ChordButton} from './components';
import useAppState from './state/AppState';

const App: () => React$Node = () => {
  const {letters, setLetters} = useAppState();
  const updateLetters = value => {
    setLetters(value);
  }
  const steps = [
    {
      title: 'Step One',
      description: (
        <Text>
          Edit <Text style={styles.highlight}>App.js </Text>
          to change this screen and then come back to see your edits.
        </Text>
      ),
    },
    {
      title: 'See Your Changes',
      description: <ReloadInstructions />,
    },
  ];

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <ChordButton letters={letters} />
            <NumberLetterSwitch letters={letters} onValueChange={updateLetters} />
            {steps.map((step, index) => {
              return (
                <Section
                  title={step.title}
                  description={step.description}
                  key={index}
                />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
