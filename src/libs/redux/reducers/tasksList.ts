import { uuid } from '../../utils/others';
import { TaskAction } from '../actions/tasksLists';

export const initialState = [
  {id: uuid(), title: 'Hello World!', isCompleted: false},
];

export function tasksList(state = initialState, action: TaskAction) {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {id: uuid(), title: action.payload.title, isCompleted: false},
      ];
    case 'UPDATE':
      return [...state].map(t => {
        if (t.id === action.payload.id) {
          return {...t, isCompleted: !t.isCompleted};
        }
        return t;
      });
    case 'UPDATE_TITLE':
      return [...state].map(t => {
        if (t.id === action.payload.id) {
          return {...t, title: action.payload.title};
        }
        return t;
      });
    case 'DELETE':
      return [...state].filter(t => t.id !== action.payload.id);
    default:
      return state;
  }
}
