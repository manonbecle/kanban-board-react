// == Import npm
import { connect } from 'react-redux';

// == Import actions
import { openModalAddTask } from 'src/actions/kanbanAction';

// == Import components
import AddCard from 'src/components/AddCard';

// == mapStateToProps
const mapStateToProps = (state) => ({

});

// == mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // fonction qui doit ouvrir la modal "ajouter une tâche"
  openModalAddTask: (listId) => {
    // dispatch de l'action présente dans l'annuaire des actions
    dispatch(openModalAddTask(listId));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
