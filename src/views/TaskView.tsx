import { useState } from 'react';
import TaskForm from '../components/features/TaskForm';
import TasksList from '../components/features/TasksList';
import { Task } from '../libs/interfaces/Task';
import { uuid } from '../libs/utils/others';

export default function TaskView() {
  const [tasks, setTasks] = useState<Task[]>([
    {id: uuid(), title: 'Hello World!', isCompleted: false},
  ]);

  function handleAddTask(t: string) {
    setTasks(prevState => [
      ...prevState,
      {id: uuid(), title: t, isCompleted: false},
    ]);
  }

  return (
    <>
      <TaskForm onAdd={handleAddTask} />
      <TasksList data={tasks} />
    </>
  );
}
