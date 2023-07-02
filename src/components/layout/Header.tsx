import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import styleConstants from '../../libs/constants/styleConstants';
import { RootState } from '../../libs/redux/stores';
import { dateConstants } from '../../libs/utils/constants';
import Counter from '../features/Counter';
import TaskForm from '../features/TaskForm';
import FadingView from '../shared/FadingView';

export default function Header({styleVariant = 'primary'}: Props) {
  const tasksListStatus = useSelector(
    (state: RootState) => state.taskListStatus,
  );

  const date = new Date();

  const currentDate = `${dateConstants.days[date.getDay()]} ${date.getDate()} ${
    dateConstants.months[date.getMonth()]
  }`;

  return (
    <View style={[styles.base, {...(styles[styleVariant] as any)}]}>
      <View style={[styles.header]}>
        <Text style={styles.date}>{currentDate}</Text>
        <Counter />
      </View>
      {tasksListStatus.task === 'new_task' && (
        <FadingView duration={350}>
          <TaskForm />
        </FadingView>
      )}
    </View>
  );
}

type Props = {
  styleVariant: 'primary' | 'secondary';
};

const styles = StyleSheet.create({
  base: {
    paddingTop: styleConstants.magicUnit,
    paddingBottom: styleConstants.magicUnit * 2,
  },
  primary: {
    backgroundColor: styleConstants.white,
    ...styleConstants.borderBottomWhite,
  },
  secondary: {
    background: styleConstants.smokeWhite,
    ...styleConstants.borderBottomGrey,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingHorizontal: styleConstants.magicUnit * 2,
  },
  date: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
