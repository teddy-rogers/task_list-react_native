import { useDispatch, useSelector } from 'react-redux';
import TaskForm from '../components/features/TaskForm';
import TasksList from '../components/features/TasksList';
import TasksListHeader from '../components/features/TasksListHeader';
import FadingView from '../components/shared/FadingView';
import FloatingButton from '../components/shared/FloatingButton';
import { Task } from '../libs/interfaces/Task';
import { isEditing } from '../libs/redux/actions';
import { RootState } from '../libs/redux/stores';

export default function TaskView() {
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
    <>
      <TasksListHeader count={countNotCompletedTasks(tasksList)} />
      {tasksListStatus.task === 'new_task' && (
        <FadingView duration={350}>
          <TaskForm />
        </FadingView>
      )}
      <TasksList data={tasksList} />
      <FloatingButton
        onPress={handleToggleFormStatus}
        isToggled={tasksListStatus.task === 'new_task'}
      />
    </>
  );
}
