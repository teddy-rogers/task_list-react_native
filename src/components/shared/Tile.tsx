import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Task } from '../../libs/interfaces/Task';

export default function Tile({item, onUpdateTaskStatus, onDeleteTask}: Props) {
  const isCompletedIcon = item.isCompleted
    ? require(`../../../assets/icons/checked.png`)
    : require(`../../../assets/icons/unchecked.png`);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.subContainer}
        onPress={() => onUpdateTaskStatus(item.id)}>
        <Image style={styles.check} source={isCompletedIcon} />
        <Text style={styles.title}>{item.title}</Text>
      </Pressable>
      <Pressable onPress={() => onDeleteTask(item.id)}>
        <Image
          style={styles.check}
          source={require(`../../../assets/icons/bin.png`)}
        />
      </Pressable>
    </View>
  );
}

type Props = {
  item: Task;
  onUpdateTaskStatus: (id: string) => void;
  onDeleteTask: (id: string) => void;
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
