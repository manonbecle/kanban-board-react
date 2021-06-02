// == Import npm
import { connect } from 'react-redux';

// == Import components
import Lists from 'src/components/Lists';

// == mapStateToProps
const mapStateToProps = (state) => ({
  lists: state.lists,
});

// == mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Lists);
