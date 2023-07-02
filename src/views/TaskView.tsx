import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import FloatingButton from '../components/features/FloatingButton';
import TasksList from '../components/features/TasksList';
import Header from '../components/layout/Header';
import styleConstants from '../libs/constants/styleConstants';
import { RootState } from '../libs/redux/stores';

export default function TaskView() {
  const tasksListStatus = useSelector(
    (state: RootState) => state.taskListStatus,
  );
  const scrollPosition = useSelector(
    (state: RootState) => state.scrollPosition,
  );

  function getStyleVariant(): ['primary' | 'secondary', string] {
    return tasksListStatus.task === 'new_task' || scrollPosition > 0
      ? ['secondary', styleConstants.smokeWhite]
      : ['primary', styleConstants.white];
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: getStyleVariant()[1],
        flex: 1,
      }}>
      <Header styleVariant={getStyleVariant()[0]} />
      <TasksList />
      <FloatingButton />
    </SafeAreaView>
  );
}
