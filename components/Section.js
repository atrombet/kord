import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';

const Section = ({title, description}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{description}</Text>
    </View>
  );
};

export default Section;
