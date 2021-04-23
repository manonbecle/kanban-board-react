// == Import npm
import React from 'react';
import { PlusCircle } from 'react-feather';

// == Import css
import './addcard.scss';

// == Composant
const AddCard = () => (
  <div className="addcard">
    <PlusCircle />
    <span className="addcard__text">Ajouter une tâche</span>
  </div>
);

// == Export
export default AddCard;
