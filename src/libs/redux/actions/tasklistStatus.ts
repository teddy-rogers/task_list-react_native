export type StatusPayload =
  | {
      task: 'new_task' | null;
    }
  | {
      task: 'current_task';
      id: string;
    };

export type StatusAction = {
  type: 'IS_EDITING';
  payload: StatusPayload;
};

export const isEditing = (payload: StatusPayload): StatusAction => ({
  type: 'IS_EDITING',
  payload,
});
