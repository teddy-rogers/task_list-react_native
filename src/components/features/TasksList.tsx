import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isEditing, setScrollPosition } from '../../libs/redux/actions';
import { RootState } from '../../libs/redux/stores';
import Tile from '../shared/Tile';

export default function TasksList() {
  const dispatch = useDispatch();

  const tasksList = useSelector((state: RootState) => state.tasksList);

  function shutdownHeaderForm() {
    dispatch(isEditing({task: null}));
  }

  function recordScrollPosition(
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) {
    dispatch(setScrollPosition(event.nativeEvent.contentOffset.y));
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        onScroll={recordScrollPosition}
        onScrollBeginDrag={shutdownHeaderForm}
        scrollEventThrottle={300}>
        {tasksList.map((d, index) => (
          <Tile
            key={d.id}
            item={d}
            style={index === tasksList.length - 1 ? null : styles.item}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    flexGrow: 1,
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
