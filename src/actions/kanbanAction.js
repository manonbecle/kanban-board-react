// === action types
export const OPEN_MODAL_ADD_TASK = 'OPEN_MODAL_ADD_TASK';
export const CLOSE_MODAL_ADD_TASK = 'CLOSE_MODAL_ADD_TASK';
export const HANDLE_DESCRIPTION_ADD_TASK = 'HANDLE_DESCRIPTION_ADD_TASK';
export const ADD_TASK_IN_DOM = 'ADD_TASK_IN_DOM';

// === action creators
export const openModalAddTask = (listId) => ({
  type: OPEN_MODAL_ADD_TASK,
  listId,
});

export const closeModalAddTask = () => ({
  type: CLOSE_MODAL_ADD_TASK,
});

export const handleDescriptionAddTask = (value) => ({
  type: HANDLE_DESCRIPTION_ADD_TASK,
  value,
});

export const addTaskInDom = (newPriority, newAssigment, listIdAddTask) => ({
  type: ADD_TASK_IN_DOM,
  newPriority,
  newAssigment,
  listIdAddTask,
});
