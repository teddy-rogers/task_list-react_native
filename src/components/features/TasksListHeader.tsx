import { StyleSheet, Text, View } from 'react-native';
import { dateConstants } from '../../libs/utils/constants';
import Counter from '../shared/Counter';

export default function TasksListHeader({count}: Props) {
  const date = new Date();

  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        {`${dateConstants.days[date.getDay()]} ${date.getDate()} ${
          dateConstants.months[date.getMonth()]
        }`}
      </Text>
      <Counter count={count} />
    </View>
  );
}

type Props = {
  count: number;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  date: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
