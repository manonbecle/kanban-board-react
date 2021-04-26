// === action types
export const OPEN_MODAL_ADD_TASK = 'OPEN_MODAL_ADD_TASK';
export const CLOSE_MODAL_ADD_TASK = 'CLOSE_MODAL_ADD_TASK';

// === action creators
export const openModalAddTask = () => ({
  type: OPEN_MODAL_ADD_TASK,
});

export const closeModalAddTask = () => ({
  type: CLOSE_MODAL_ADD_TASK,
});
