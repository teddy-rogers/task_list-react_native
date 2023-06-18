import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../../libs/redux/actions';
import Button from '../shared/Button';
import Input from '../shared/Input';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  function onAddTaskToList() {
    dispatch(addTask(title));
    setTitle('');
  }

  return (
    <View style={styles.container}>
      <Input
        value={title}
        onChange={setTitle}
        placeholder="add a new task..."
      />
      <Button
        title="Add Task"
        onClick={onAddTaskToList}
        disabled={title.length < 3}
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
