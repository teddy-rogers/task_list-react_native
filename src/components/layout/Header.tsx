import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../libs/redux/stores';
import { dateConstants } from '../../libs/utils/constants';
import TaskForm from '../features/TaskForm';
import Counter from '../shared/Counter';
import FadingView from '../shared/FadingView';

export default function Header({count, onChange}: Props) {
  const tasksListStatus = useSelector(
    (state: RootState) => state.taskListStatus,
  );
  const scrollPosition = useSelector(
    (state: RootState) => state.scrollPosition,
  );

  const date = new Date();

  const currentDate = `${dateConstants.days[date.getDay()]} ${date.getDate()} ${
    dateConstants.months[date.getMonth()]
  }`;

  function isSecondaryStyle(): boolean {
    return tasksListStatus.task === 'new_task' || scrollPosition > 0;
  }

  useEffect(() => {
    onChange(isSecondaryStyle());
  }, [tasksListStatus.task, scrollPosition]);

  return (
    <View
      style={[
        styles.base,
        isSecondaryStyle() ? styles.secondary : styles.primary,
      ]}>
      <View style={[styles.header]}>
        <Text style={styles.date}>{currentDate}</Text>
        <Counter count={count} />
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
  count: number;
  onChange: (isSecondaryStyle: boolean) => void;
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
