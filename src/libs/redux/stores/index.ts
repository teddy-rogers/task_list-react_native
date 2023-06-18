import { combineReducers, createStore } from 'redux';
import { tasksList } from '../reducers';

const rootReducers = combineReducers({tasksList});

export const store = createStore(rootReducers);

export type RootState = ReturnType<typeof rootReducers>;
