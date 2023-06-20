import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/libs/redux/stores';
import TaskView from './src/views/TaskView';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{backgroundColor: 'whitesmoke', flex: 1}}>
        <TaskView />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
