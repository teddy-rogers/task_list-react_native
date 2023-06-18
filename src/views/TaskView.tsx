import { useState } from 'react';
import TaskForm from '../components/features/TaskForm';
import TasksList from '../components/features/TasksList';
import { Task } from '../libs/interfaces/Task';
import { uuid } from '../libs/utils/others';

export default function TaskView() {
  const [tasksList, setTasksList] = useState<Task[]>([
    {id: uuid(), title: 'Hello World!', isCompleted: false},
  ]);

  function onAddTask(t: string) {
    setTasksList(prevState => [
      ...prevState,
      {id: uuid(), title: t, isCompleted: false},
    ]);
  }

  function onUpdateTaskStatus(taskId: string) {
    const updatedTasksList = tasksList.map(t => {
      if (t.id === taskId) {
        return {...t, isCompleted: !t.isCompleted};
      }
      return t;
    });
    setTasksList(updatedTasksList);
  }

  function onDeleteTask(taskId: string) {
    const filteredTasks = tasksList.filter(t => t.id !== taskId);
    setTasksList(filteredTasks);
  }

  return (
    <>
      <TaskForm onAdd={onAddTask} />
      <TasksList
        data={tasksList}
        onUpdateTaskStatus={id => onUpdateTaskStatus(id)}
        onDeleteTask={id => onDeleteTask(id)}
      />
    </>
  );
}
