import { StyleSheet, Text, View } from 'react-native';
import { dateConstants } from '../../libs/utils/constants';

export default function TasksListHeader() {
  const date = new Date();

  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        {`${dateConstants.days[date.getDay()]} ${date.getDate()} ${
          dateConstants.months[date.getMonth()]
        }`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingTop: 16,
  },
  date: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
