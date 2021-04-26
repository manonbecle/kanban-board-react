import data from 'src/data';
import { OPEN_MODAL_ADD_TASK, CLOSE_MODAL_ADD_TASK } from 'src/actions/kanbanAction';

const initialState = {
  data,
  modalAddTaskIsOpen: false,
};

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL_ADD_TASK:
      return {
        ...state,
        modalAddTaskIsOpen: true,
      };

    case CLOSE_MODAL_ADD_TASK:
      return {
        ...state,
        modalAddTaskIsOpen: false,
      };

    default:
      return state;
  }
}

export default tasksReducer;
