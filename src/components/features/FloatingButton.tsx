import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isEditing } from '../../libs/redux/actions';
import { RootState } from '../../libs/redux/stores';

export default function FloatingButton() {
  const [toggled, setToggled] = useState<Boolean>(false);
  const dispatch = useDispatch();

  const tasksListStatus = useSelector(
    (state: RootState) => state.taskListStatus,
  );

  function handlePress() {
    dispatch(
      isEditing(
        tasksListStatus.task === 'new_task' ? {task: null} : {task: 'new_task'},
      ),
    );
    setToggled(true);
  }

  useEffect(() => {
    if (tasksListStatus.task !== 'new_task') {
      setToggled(false);
    }
  }, [tasksListStatus.task]);

  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.btn,
        {transform: toggled ? 'rotate(45deg)' : 'rotate(0deg)'},
      ]}>
      <Text style={styles.cross}>+</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    right: 16,
    bottom: 24,
    width: 56,
    height: 56,
    backgroundColor: '#f00b42',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 3,
  },
  cross: {
    fontSize: 48,
    lineHeight: 56,
    color: 'white',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
