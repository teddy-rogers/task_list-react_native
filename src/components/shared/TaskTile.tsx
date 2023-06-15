import { Image, StyleSheet, Text, View } from 'react-native';
import { Task } from '../../libs/interfaces/Task';

export default function TaskTile({item}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.check}
          source={require(`../../../assets/icons/unchecked.png`)}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Image
        style={styles.check}
        source={require(`../../../assets/icons/bin.png`)}
      />
    </View>
  );
}

type Props = {
  item: Task;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    marginLeft: 16,
  },
  check: {
    width: 24,
    height: 24,
  },
});
