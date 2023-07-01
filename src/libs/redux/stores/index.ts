import { combineReducers, createStore } from 'redux';
import { taskListStatus, tasksList } from '../reducers';

const rootReducers = combineReducers({tasksList, taskListStatus});

export const store = createStore(rootReducers);

export type RootState = ReturnType<typeof rootReducers>;
