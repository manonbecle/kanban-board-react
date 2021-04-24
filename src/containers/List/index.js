// == Import npm
import { connect } from 'react-redux';

// == Import components
import List from 'src/components/List';

// == mapStateToProps
const mapStateToProps = (state) => ({
  tasks: state.data,
});

// == mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(List);
