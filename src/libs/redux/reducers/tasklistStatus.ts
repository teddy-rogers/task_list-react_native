import { StatusAction, StatusPayload } from '../actions/tasklistStatus';

export const initialState: StatusPayload = {task: null};

export function taskListStatus(
  state = initialState,
  action: StatusAction,
): StatusPayload {
  switch (action.type) {
    case 'IS_EDITING':
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
}
