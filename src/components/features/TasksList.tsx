import { SafeAreaView, ScrollView } from 'react-native';
import { Task } from '../../libs/interfaces/Task';
import Tile from '../shared/Tile';

export default function TasksList({data}: Props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        {data.map(d => (
          <Tile key={d.id} item={d} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

type Props = {
  data: Task[];
};
