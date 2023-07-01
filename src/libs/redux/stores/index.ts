import { combineReducers, createStore } from 'redux';
import { scrollPosition, taskListStatus, tasksList } from '../reducers';

const rootReducers = combineReducers({
  tasksList,
  taskListStatus,
  scrollPosition,
});

export const store = createStore(rootReducers);

export type RootState = ReturnType<typeof rootReducers>;
