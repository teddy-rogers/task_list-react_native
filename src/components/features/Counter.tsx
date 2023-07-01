import { StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Task } from '../../libs/interfaces/Task';
import { RootState } from '../../libs/redux/stores';

export default function Counter() {
  const tasksList = useSelector((state: RootState) => state.tasksList);

  function countNotCompletedTasks(tasks: Task[]): number {
    return tasks.filter(t => !t.isCompleted).length;
  }

  return <Text style={styles.text}>{countNotCompletedTasks(tasksList)}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#f00b42',
  },
});
