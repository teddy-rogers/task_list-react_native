import { FlatList, SafeAreaView } from 'react-native';
import { Task } from '../../libs/interfaces/Task';
import Tile from '../shared/Tile';

export default function TasksList({
  data,
  onUpdateTaskStatus,
  onDeleteTask,
}: Props) {
  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <FlatList
        data={data}
        keyExtractor={task => task.id}
        renderItem={data =>
          Tile({
            item: data.item,
            onDeleteTask,
            onUpdateTaskStatus,
          })
        }
      />
    </SafeAreaView>
  );
}

type Props = {
  data: Task[];
  onUpdateTaskStatus: (id: string) => void;
  onDeleteTask: (id: string) => void;
};
