import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TasksList from '../components/features/TasksList';
import Header from '../components/layout/Header';
import FloatingButton from '../components/shared/FloatingButton';
import { Task } from '../libs/interfaces/Task';
import { isEditing } from '../libs/redux/actions';
import { RootState } from '../libs/redux/stores';

export default function TaskView() {
  const [isSecondaryStyle, setIsSecondaryStyle] = useState<boolean>(false);
  const dispatch = useDispatch();

  const tasksList = useSelector((state: RootState) => state.tasksList);
  const tasksListStatus = useSelector(
    (state: RootState) => state.taskListStatus,
  );

  function countNotCompletedTasks(tasks: Task[]): number {
    return tasks.filter(t => !t.isCompleted).length;
  }

  function handleToggleFormStatus() {
    dispatch(
      isEditing(
        tasksListStatus.task === 'new_task' ? {task: null} : {task: 'new_task'},
      ),
    );
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
      <FloatingButton
        onPress={handleToggleFormStatus}
        isToggled={tasksListStatus.task === 'new_task'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flexGrow: 1,
  },
});
