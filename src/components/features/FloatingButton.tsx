import { useEffect, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styleConstants from '../../libs/constants/styleConstants';
import { isEditing } from '../../libs/redux/actions';
import { RootState } from '../../libs/redux/stores';

export default function FloatingButton() {
  const [toggled, setToggled] = useState<Boolean>(false);
  const [rotateValue, _] = useState(new Animated.Value(0));

  const dispatch = useDispatch();
  const tasksListStatus = useSelector(
    (state: RootState) => state.taskListStatus,
  );

  const rotateData = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  function rotateView(angle: '45' | '-45') {
    Animated.timing(rotateValue, {
      toValue: angle === '45' ? 0 : 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }

  function displayTaskForm() {
    dispatch(
      isEditing(
        tasksListStatus.task === 'new_task' ? {task: null} : {task: 'new_task'},
      ),
    );
    setToggled(prev => !prev);
  }

  useEffect(() => {
    if (tasksListStatus.task !== 'new_task') {
      setToggled(false);
    }
    toggled ? rotateView('45') : rotateView('-45');
  }, [tasksListStatus.task, toggled]);

  return (
    <Pressable onPress={displayTaskForm} style={styles.btn}>
      <Animated.View style={{transform: [{rotate: rotateData}]}}>
        <Text style={styles.cross}>✕</Text>
      </Animated.View>
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
    backgroundColor: styleConstants.red,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    ...styleConstants.shadow,
  },
  cross: {
    bottom: 0,
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 48,
    color: styleConstants.white,
    ...styleConstants.shadow,
  },
});
