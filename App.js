/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styles from './styles/styles';
import {
  Section,
  NumberLetterSwitch,
} from './components';

const App: () => React$Node = () => {
  const stepOne = {
    title: 'Step One',
    description: (
      <Text>
        Edit <Text style={styles.highlight}>App.js </Text>
        to change this screen and then come back to see your edits.
      </Text>
    ),
  };
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
            <NumberLetterSwitch />
            {steps.map((step, index) => {
              return (
                <Section title={step.title} description={step.description} key={index} />
              );
            })}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
