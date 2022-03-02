import React from 'react';
import type {Node} from 'react';
import {SafeAreaView,StyleSheet,} from 'react-native';
import Header from './components/Header';
import Title from './components/Title';


export default function App(props) {
  return (
    <SafeAreaView style={styles.sectionContainer}>
        <Title title="My to do list"></Title>
        <Header/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    height: 1000,
    paddingHorizontal: 24,
    backgroundColor: "#2d3436"
  },
});

