import { FlatList, SafeAreaView } from 'react-native';
import { Task } from '../../libs/interfaces/Task';
import Tile from '../shared/Tile';
import TasksListHeader from './TasksListHeader';

export default function TasksList({data}: Props) {
  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <FlatList
        ListHeaderComponent={TasksListHeader}
        data={data}
        keyExtractor={task => task.id}
        renderItem={Tile}
      />
    </SafeAreaView>
  );
}

type Props = {
  data: Task[];
};
