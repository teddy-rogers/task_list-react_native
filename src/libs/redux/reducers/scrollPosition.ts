import { ScrollPositionAction } from '../actions/scrollPostion';

export const initialState: number = 0;

export function scrollPosition(
  state = initialState,
  action: ScrollPositionAction,
) {
  switch (action.type) {
    case 'SET_SCROLL_POSITION':
      return action.payload.y;
    default:
      return state;
  }
}
