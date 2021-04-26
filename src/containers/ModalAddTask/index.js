// == Import npm
import { connect } from 'react-redux';

// == Import actions
import { closeModalAddTask } from 'src/actions/kanbanAction';

// == Import components
import ModalAddTask from 'src/components/ModalAddTask';

// == mapStateToProps
const mapStateToProps = (state) => ({

});

// == mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  closeModalAddTask: () => {
    dispatch(closeModalAddTask());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ModalAddTask);
