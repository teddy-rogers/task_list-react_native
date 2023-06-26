import { StyleSheet, Text } from 'react-native';

export default function Counter({count}: {count: number}) {
  return <Text style={styles.text}>{count}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#f00b42',
  },
});
