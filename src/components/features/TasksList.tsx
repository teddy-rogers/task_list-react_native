import { useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Task } from '../../libs/interfaces/Task';
import { uuid } from '../../libs/utils/others';
import TaskTile from '../shared/TaskTile';
import TasksListHeader from './TasksListHeader';

export default function TasksList() {
  const [tasks, _] = useState<Task[]>([
    {id: uuid(), title: 'Hello World!', isCompleted: false},
  ]);

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={TasksListHeader}
        contentContainerStyle={{flexGrow: 1}}
        data={tasks}
        keyExtractor={task => task.id}
        renderItem={item => TaskTile(item)}
      />
    </SafeAreaView>
  );
}
