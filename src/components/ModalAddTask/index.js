// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { XCircle } from 'react-feather';

// == Import css
import './modalAddTask.scss';

// == Composant
const ModalAddTask = ({
  closeModalAddTask,
  handleDescriptionAddTask,
  descriptionAddTask,
  listIdAddTask,
  addTaskInDom,
  clearDescriptionAddTask,
}) => (
  <div className="modalAddTask">
    <div className="modal">
      <XCircle
        className="modal__close"
        onClick={() => {
          /* Fermer la modal d'ajout d'une tache : modifier le state en passant
          modalAddTaskIsOpen à false */
          closeModalAddTask();

          // Vider le state de la description (champ controlé)
          clearDescriptionAddTask();
        }}
      />
      <h2 className="modal__title">Ajouter une tâche</h2>
      <form
        className="modal__form"
        onSubmit={(event) => {
          // Enlever le rechargement de la page par défaut
          event.preventDefault();

          // Ajouter une nouvelle tache dans le DOM
          const newPriority = event.target.priority.value;
          const newAssigment = event.target.assigment.value;
          addTaskInDom(newPriority, newAssigment, listIdAddTask);

          /* Fermer la modal d'ajout d'une tache : modifier le state en passant
          modalAddTaskIsOpen à false */
          closeModalAddTask();

          // Vider le state de la description (champ controlé)
          clearDescriptionAddTask();
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
                handleDescriptionAddTask(event.target.value);
              }}
            />
          </label>
        </div>
        <div className="row">
          <label className="modal__label" htmlFor="priority">
            Priorité
            <select className="modal__field" name="priority" id="priority">
              <option value="basse">Basse</option>
              <option value="normale">Normale</option>
              <option value="haute">Haute</option>
            </select>
          </label>
        </div>
        <div className="row">
          <label className="modal__label" htmlFor="assigment">
            Assigné à
            <select className="modal__field" name="assigment" id="assigment">
              <option value="Elsa M">Elsa M</option>
              <option value="Estelle L">Estelle L</option>
              <option value="Julien B">Julien B</option>
              <option value="Vincent F">Vincent F</option>
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
  listIdAddTask: PropTypes.number.isRequired,
  addTaskInDom: PropTypes.func.isRequired,
  clearDescriptionAddTask: PropTypes.func.isRequired,
};

// == Export
export default ModalAddTask;
