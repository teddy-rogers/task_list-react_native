export type TaskAction =
  | {
      type: 'ADD';
      payload: {title: string};
    }
  | {
      type: 'UPDATE' | 'DELETE';
      payload: {id: string};
    }
  | {
      type: 'UPDATE_TITLE';
      payload: {id: string; title: string};
    };

export const addTask = (title: string): TaskAction => ({
  type: 'ADD',
  payload: {title},
});

export const updateTask = (id: string): TaskAction => ({
  type: 'UPDATE',
  payload: {id},
});

export const updateTitle = (id: string, title: string): TaskAction => ({
  type: 'UPDATE_TITLE',
  payload: {id, title},
});

export const deleteTask = (id: string): TaskAction => ({
  type: 'DELETE',
  payload: {id},
});
