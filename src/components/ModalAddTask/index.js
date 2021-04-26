// == Import npm
import React from 'react';
import { XCircle } from 'react-feather';

// == Import css
import './modalAddTask.scss';

// == Composant
const ModalAddTask = () => (
  <div className="modalAddTask">
    <div className="modal">
      <XCircle className="modal__close" />
      <h2 className="modal__title">Ajouter une tâche</h2>
      <form className="modal__form">
        <div className="row">
          <label className="modal__label" htmlFor="description">
            Description
            <textarea className="modal__field" type="text" name="description" id="description" />
          </label>
        </div>
        <div className="row">
          <label className="modal__label" htmlFor="priority">
            Priorité
            <select className="modal__field" name="priority" id="priority">
              <option value="">Basse</option>
              <option value="dog">Moyenne</option>
              <option value="cat">Haute</option>
            </select>
          </label>
        </div>
        <div className="row">
          <label className="modal__label" htmlFor="assigment">
            Assigné à
            <select className="modal__field" name="assigment" id="assigment">
              <option value="">Elsa M</option>
              <option value="dog">Estelle L</option>
              <option value="cat">Julien B</option>
              <option value="cat">Vincent F</option>
            </select>
          </label>
        </div>
        <div className="row row--right">
          <button className="modal__submit" type="submit">Ajouter</button>
        </div>
      </form>
    </div>
  </div>
);

// == Export
export default ModalAddTask;
