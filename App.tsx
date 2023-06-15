import type { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TaskView from './src/views/TaskView';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App({children, title}: SectionProps) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TaskView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
