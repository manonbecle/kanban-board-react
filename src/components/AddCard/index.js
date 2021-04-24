// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { PlusCircle } from 'react-feather';

// == Import actions
// import { openModalAddTask } from 'src/actions/kanbanAction';

// == Import css
import './addcard.scss';

// == Composant
const AddCard = ({ openModalAddTask }) => (
  <div
    className="addcard"
    onClick={() => {
      // déclenche l'action d'ouvrir la modal "Ajouter une tâche"
      openModalAddTask();
    }}
  >
    <PlusCircle />
    <span className="addcard__text">Ajouter une tâche</span>
  </div>
);

AddCard.propTypes = {
  openModalAddTask: PropTypes.func.isRequired,
};

// == Export
export default AddCard;
