import { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskForm from '../components/features/TaskForm';
import TasksList from '../components/features/TasksList';
import TasksListHeader from '../components/features/TasksListHeader';
import FadingView from '../components/shared/FadingView';
import FloatingButton from '../components/shared/FloatingButton';
import { Task } from '../libs/interfaces/Task';
import { RootState } from '../libs/redux/stores';

export default function TaskView() {
  const [displayForm, setDisplayForm] = useState<Boolean>(false);
  const tasksList = useSelector((state: RootState) => state.tasksList);

  function handleToggleForm(): void {
    setDisplayForm(prevState => !prevState);
  }

  function countNotCompletedTasks(tasks: Task[]): number {
    return tasks.filter(t => !t.isCompleted).length;
  }

  return (
    <>
      <TasksListHeader count={countNotCompletedTasks(tasksList)} />
      {displayForm && (
        <FadingView duration={350}>
          <TaskForm />
        </FadingView>
      )}
      <TasksList data={tasksList} onScroll={() => setDisplayForm(false)} />
      <FloatingButton onPress={handleToggleForm} isToggled={displayForm} />
    </>
  );
}
