// == Import npm
import { connect } from 'react-redux';

// == Import components
import App from 'src/components/App';

// == mapStateToProps
const mapStateToProps = (state) => ({
  modalAddTaskIsOpen: state.modalAddTaskIsOpen,
});

// == mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
