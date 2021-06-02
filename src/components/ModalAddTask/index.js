// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { XCircle } from 'react-feather';

// == Import css
import './modalAddTask.scss';

// == Composant
const ModalAddTask = ({ closeModalAddTask, handleDescriptionAddTask, descriptionAddTask }) => (
  <div className="modalAddTask">
    <div className="modal">
      <XCircle
        className="modal__close"
        onClick={() => {
          // Doit modifier le state : passer modalAddTaskIsOpen à false
          closeModalAddTask();
        }}
      />
      <h2 className="modal__title">Ajouter une tâche</h2>
      <form
        className="modal__form"
        onSubmit={(event) => {
          // Enlever le rechargement de la page par défaut
          event.preventDefault();
          // Envoyer les informations du formulaire
          console.log('envoyer le formulaire');
          // Fermer la modal
          closeModalAddTask();
        }}
      >
        <div className="row">
          <label className="modal__label" htmlFor="description">
            Description
            <textarea
              className="modal__field"
              type="text"
              name="description"
              id="description"
              value={descriptionAddTask}
              onChange={(event) => {
                // Mise en place d'un champ controlé
                // console.log('onchange', event.target.value);
                handleDescriptionAddTask(event.target.value);
              }}
            />
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

ModalAddTask.propTypes = {
  closeModalAddTask: PropTypes.func.isRequired,
  descriptionAddTask: PropTypes.string.isRequired,
  handleDescriptionAddTask: PropTypes.func.isRequired,
};

// == Export
export default ModalAddTask;
