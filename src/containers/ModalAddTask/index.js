// == Import npm
import { connect } from 'react-redux';

// == Import actions
import {
  closeModalAddTask,
  handleDescriptionAddTask,
  addTaskInDom,
  clearDescriptionAddTask,
} from 'src/actions/kanbanAction';

// == Import components
import ModalAddTask from 'src/components/ModalAddTask';

// == mapStateToProps
const mapStateToProps = (state) => ({
  descriptionAddTask: state.descriptionAddTask,
  listIdAddTask: state.listIdAddTask,
});

// == mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  closeModalAddTask: () => {
    dispatch(closeModalAddTask());
  },
  handleDescriptionAddTask: (value) => {
    dispatch(handleDescriptionAddTask(value));
  },
  addTaskInDom: (newPriority, newAssigment, listIdAddTask) => {
    dispatch(addTaskInDom(newPriority, newAssigment, listIdAddTask));
  },
  clearDescriptionAddTask: () => {
    dispatch(clearDescriptionAddTask());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ModalAddTask);
