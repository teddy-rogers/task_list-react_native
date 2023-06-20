import { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskForm from '../components/features/TaskForm';
import TasksList from '../components/features/TasksList';
import FadingView from '../components/shared/FadingView';
import FloatingButton from '../components/shared/FloatingButton';
import { RootState } from '../libs/redux/stores';

export default function TaskView() {
  const [displayForm, setDisplayForm] = useState<Boolean>(false);
  const tasksList = useSelector((state: RootState) => state.tasksList);

  function handleToggleForm() {
    setDisplayForm(prevState => !prevState);
  }

  return (
    <>
      {displayForm && (
        <FadingView>
          <TaskForm />
        </FadingView>
      )}
      <TasksList data={tasksList} />
      <FloatingButton onPress={handleToggleForm} />
    </>
  );
}
