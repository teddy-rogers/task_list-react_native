export type ScrollPositionAction = {
  type: 'SET_SCROLL_POSITION';
  payload: {
    y: number;
  };
};

export const setScrollPosition = (y: number): ScrollPositionAction => ({
  type: 'SET_SCROLL_POSITION',
  payload: {y},
});
