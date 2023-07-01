import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../../libs/redux/actions';
import Button from '../shared/Button';
import StyledInput from '../shared/StyledInput';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  function onAddTaskToList() {
    dispatch(addTask(title));
    setTitle('');
  }

  return (
    <View style={styles.container}>
      <StyledInput
        value={title}
        onChange={setTitle}
        placeholder="add a new task..."
      />
      <Button
        title="ADD TASK"
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
  },
});
