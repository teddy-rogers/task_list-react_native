import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Task } from '../../libs/interfaces/Task';
import { isEditing } from '../../libs/redux/actions';
import Tile from '../shared/Tile';

export default function TasksList({data}: Props) {
  const dispatch = useDispatch();

  function handleFormStatus() {
    dispatch(isEditing({task: null}));
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        onScrollBeginDrag={handleFormStatus}>
        {data.map((d, index) => (
          <Tile
            key={d.id}
            item={d}
            style={index === data.length - 1 ? null : styles.item}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

type Props = {
  data: Task[];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#ffffff',
  },
  item: {
    borderStyle: 'solid',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#dcdcdc',
  },
});
