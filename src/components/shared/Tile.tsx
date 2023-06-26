import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Task } from '../../libs/interfaces/Task';
import { deleteTask, updateTask } from '../../libs/redux/actions';

export default function Tile({item, style}: Props) {
  const dispatch = useDispatch();

  const isCompletedIcon = item.isCompleted
    ? require(`../../../assets/icons/checked.png`)
    : require(`../../../assets/icons/unchecked.png`);

  return (
    <View style={[styles.container, style]}>
      <Pressable
        style={styles.subContainer}
        onPress={() => dispatch(updateTask(item.id))}>
        <Image style={styles.check} source={isCompletedIcon} />
        <Text style={styles.title}>{item.title}</Text>
      </Pressable>
      <Pressable onPress={() => dispatch(deleteTask(item.id))}>
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
  style: {} | null;
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
    fontSize: 24,
  },
  check: {
    width: 24,
    height: 24,
  },
});
