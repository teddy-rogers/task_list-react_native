import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App({children, title}: SectionProps) {
  return (
    <View>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
