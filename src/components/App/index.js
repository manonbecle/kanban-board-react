// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components / containers
import Header from 'src/components/Header';
import Lists from 'src/containers/Lists';
import ModalAddTask from 'src/containers/ModalAddTask';

// == Import css
import './styles.scss';

// == Composant
const App = ({ modalAddTaskIsOpen }) => {
  console.log('ouvert ? :', modalAddTaskIsOpen);
  return (
    <div className="app">
      <Header />
      <Lists />
      {modalAddTaskIsOpen && <ModalAddTask />}
    </div>
  );
};

App.propTypes = {
  modalAddTaskIsOpen: PropTypes.bool.isRequired,
};

// == Export
export default App;
