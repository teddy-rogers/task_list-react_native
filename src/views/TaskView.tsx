import { useSelector } from 'react-redux';
import TaskForm from '../components/features/TaskForm';
import TasksList from '../components/features/TasksList';
import { RootState } from '../libs/redux/stores';

export default function TaskView() {
  const tasksList = useSelector((state: RootState) => state.tasksList);

  return (
    <>
      <TaskForm />
      <TasksList data={tasksList} />
    </>
  );
}
