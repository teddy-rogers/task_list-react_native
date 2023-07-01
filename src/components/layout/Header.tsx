import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../libs/redux/stores';
import { dateConstants } from '../../libs/utils/constants';
import Counter from '../features/Counter';
import TaskForm from '../features/TaskForm';
import FadingView from '../shared/FadingView';

export default function Header({styleVariant = 'primary'}: Props) {
  const tasksListStatus = useSelector(
    (state: RootState) => state.taskListStatus,
  );

  const date = new Date();

  const currentDate = `${dateConstants.days[date.getDay()]} ${date.getDate()} ${
    dateConstants.months[date.getMonth()]
  }`;

  return (
    <View style={[styles.base, styles[styleVariant]]}>
      <View style={[styles.header]}>
        <Text style={styles.date}>{currentDate}</Text>
        <Counter />
      </View>
      {tasksListStatus.task === 'new_task' && (
        <FadingView duration={350}>
          <TaskForm />
        </FadingView>
      )}
    </View>
  );
}

type Props = {
  styleVariant: 'primary' | 'secondary';
};

const styles = StyleSheet.create({
  base: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  primary: {
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#ffffff',
  },
  secondary: {
    background: '#f5f5f5',
    borderStyle: 'solid',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#dcdcdc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  date: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
