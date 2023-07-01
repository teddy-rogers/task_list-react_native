import { Provider } from 'react-redux';
import { store } from './src/libs/redux/stores';
import TaskView from './src/views/TaskView';

function App() {
  return (
    <Provider store={store}>
      <TaskView />
    </Provider>
  );
}

export default App;
