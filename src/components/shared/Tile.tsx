import { useState } from 'react';
import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styleConstants from '../../libs/constants/styleConstants';
import { Task } from '../../libs/interfaces/Task';
import {
  deleteTask,
  isEditing,
  updateTask,
  updateTitle
} from '../../libs/redux/actions';
import { RootState } from '../../libs/redux/stores';
import Button from '../shared/Button';
import FadingView from '../shared/FadingView';
import SimpledInput from './SimpleInput';

export default function Tile({item, style}: Props) {
  const [newTitle, setNewTitle] = useState<string>(item.title);

  const dispatch = useDispatch();

  const tasksListStatus = useSelector(
    (state: RootState) => state.taskListStatus,
  );

  const isCompletedIcon = item.isCompleted
    ? require(`../../../assets/icons/checked.png`)
    : require(`../../../assets/icons/unchecked.png`);

  const isCurrentlyEditedTask = (taskId: string) =>
    tasksListStatus.task === 'current_task' && tasksListStatus.id === taskId;

  const isNotCurrentlyEditedTask = (taskId: string) =>
    tasksListStatus.task === 'current_task' && tasksListStatus.id !== taskId;

  function handleUpdateTitle() {
    dispatch(updateTitle(item.id, newTitle));
    dispatch(isEditing({task: null}));
  }

  function handleFormStatus() {
    dispatch(isEditing({task: 'current_task', id: item.id}));
  }

  function HandleDeleteTask() {
    dispatch(deleteTask(item.id));
  }

  function handleUpdateTask() {
    dispatch(updateTask(item.id));
  }

  return (
    <FadingView duration={460}>
      <View style={[styles.container, style]}>
        <Pressable onPress={handleUpdateTask}>
          <Image style={styles.check} source={isCompletedIcon} />
        </Pressable>

        <Pressable style={[styles.subContainer]} onPress={handleFormStatus}>
          {isCurrentlyEditedTask(item.id) ? (
            <>
              <SimpledInput value={newTitle} onChange={setNewTitle} />
              <Button
                title="OK"
                onClick={handleUpdateTitle}
                disabled={newTitle.length < 3}
              />
            </>
          ) : (
            <Text
              style={{
                fontSize: 24,
                padding: 4,
                color: isNotCurrentlyEditedTask(item.id)
                  ? styleConstants.grey
                  : styleConstants.black,
              }}>
              {item.title}
            </Text>
          )}
        </Pressable>

        <Pressable onPress={HandleDeleteTask}>
          <Image
            style={styles.check}
            source={require(`../../../assets/icons/bin.png`)}
          />
        </Pressable>
      </View>
    </FadingView>
  );
}

type Props = {
  item: Task;
  style: StyleProp<any>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '100%',
    padding: styleConstants.magicUnit * 2,
  },
  subContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: styleConstants.magicUnit * 3,
    paddingLeft: styleConstants.magicUnit * 2,
  },
  check: {
    width: 24,
    height: 24,
  },
});
