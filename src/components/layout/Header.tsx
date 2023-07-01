import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../libs/redux/stores';
import { dateConstants } from '../../libs/utils/constants';
import Counter from '../shared/Counter';

export default function Header({count}: Props) {
  const tasksListStatus = useSelector(
    (state: RootState) => state.taskListStatus,
  );
  const scrollPosition = useSelector(
    (state: RootState) => state.scrollPosition,
  );

  console.log(scrollPosition);

  const date = new Date();

  return (
    <View
      style={[
        styles.container,
        tasksListStatus.task !== 'new_task' ? styles.notAddingTask : null,
      ]}>
      <Text style={styles.date}>
        {`${dateConstants.days[date.getDay()]} ${date.getDate()} ${
          dateConstants.months[date.getMonth()]
        }`}
      </Text>
      <Counter count={count} />
    </View>
  );
}

type Props = {
  count: number;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  notAddingTask: {
    backgroundColor: '#ffffff',
  },
  date: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
