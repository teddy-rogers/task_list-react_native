import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../shared/Button';
import Input from '../shared/Input';

export default function TaskForm({onAdd}: Props) {
  const [task, setTask] = useState('');

  function onAddTaskToList() {
    onAdd(task);
    setTask('');
  }

  return (
    <View style={styles.container}>
      <Input value={task} onChange={setTask} placeholder="add a new task..." />
      <Button
        title="Add Task"
        onClick={onAddTaskToList}
        disabled={task.length < 3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
});

type Props = {
  onAdd: (t: string) => void;
};
