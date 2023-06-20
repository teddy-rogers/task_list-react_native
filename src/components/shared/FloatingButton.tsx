import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function FloatingButton({onPress}: Props) {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <Text style={styles.cross}>+</Text>
    </Pressable>
  );
}

type Props = {
  onPress: () => void;
};

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    backgroundColor: 'peru',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 3,
  },
  cross: {
    fontSize: 48,
    lineHeight: 56,
    color: 'white',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
