import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import FloatingButton from '../components/features/FloatingButton';
import TasksList from '../components/features/TasksList';
import Header from '../components/layout/Header';
import { Task } from '../libs/interfaces/Task';
import { RootState } from '../libs/redux/stores';

export default function TaskView() {
  const [isSecondaryStyle, setIsSecondaryStyle] = useState<boolean>(false);

  const tasksList = useSelector((state: RootState) => state.tasksList);

  function countNotCompletedTasks(tasks: Task[]): number {
    return tasks.filter(t => !t.isCompleted).length;
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: isSecondaryStyle ? '#f5F5F5' : '#ffffff',
        flex: 1,
      }}>
      <Header
        count={countNotCompletedTasks(tasksList)}
        onChange={setIsSecondaryStyle}
      />
      <View style={styles.content}>
        <TasksList data={tasksList} />
      </View>
      <FloatingButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flexGrow: 1,
  },
});
