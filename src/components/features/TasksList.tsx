import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Task } from '../../libs/interfaces/Task';
import Tile from '../shared/Tile';

export default function TasksList({data, onScroll}: Props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView onScrollBeginDrag={onScroll}>
        {data.map((d, index) => (
          <Tile
            key={d.id}
            item={d}
            style={index === data.length - 1 ? null : styles.item}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

type Props = {
  data: Task[];
  onScroll: () => void;
};

const styles = StyleSheet.create({
  item: {
    borderStyle: 'solid',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'silver',
  },
});
