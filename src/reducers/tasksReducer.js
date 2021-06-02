// import data from 'src/data';
import { OPEN_MODAL_ADD_TASK, CLOSE_MODAL_ADD_TASK, HANDLE_DESCRIPTION_ADD_TASK, ADD_TASK_IN_DOM } from 'src/actions/kanbanAction';

const initialState = {
  // data,
  modalAddTaskIsOpen: false,
  descriptionAddTask: '',
  listIdAddTask: 0,
  lists: [
    {
      id: 1,
      title: 'A faire',
      slug: 'to-do',
      cards: [
        {
          id: 3,
          title: 'Installer Redux pour gérer les changements du state',
          priority: 'basse',
          assigment: 'Estelle L',
        },
        {
          id: 4,
          title: 'Gestion du Drag and drop et donc de la position de chaque \'Card\' dans une liste',
          priority: 'normale',
          assigment: 'Elsa M',
        },
      ],
    },
    {
      id: 2,
      title: 'En cours',
      slug: 'in-progress',
      cards: [
        {
          id: 1,
          title: 'Creer un fichier de data pour dynamiser l\'affichage',
          priority: 'haute',
          assigment: 'Julien B',
        },
      ],
    },
    {
      id: 3,
      title: 'A tester',
      slug: 'to-test',
      cards: [
        {
          id: 2,
          title: 'Responsive design',
          priority: 'haute',
          assigment: 'Vincent F',
        },

      ],
    },
    {
      id: 4,
      title: 'Terminé',
      slug: 'finished',
      cards: [
        {
          id: 5,
          title: 'Ajouter les composants et créer le css de ceux-ci',
          priority: 'basse',
          assigment: 'Elsa M',
        },

      ],
    },
  ],
};

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL_ADD_TASK:
      return {
        ...state,
        modalAddTaskIsOpen: true,
        listIdAddTask: action.listId,
      };

    case CLOSE_MODAL_ADD_TASK:
      return {
        ...state,
        modalAddTaskIsOpen: false,
      };

    case HANDLE_DESCRIPTION_ADD_TASK:
      return {
        ...state,
        descriptionAddTask: action.value,
      };
    case ADD_TASK_IN_DOM: {
      const newCard = {
        id: action.listIdAddTask,
        title: state.descriptionAddTask,
        priority: action.newPriority,
        assigment: action.newAssigment,
      };
      const lists = [...state.lists];
      lists[action.listIdAddTask - 1] = {
        ...lists[action.listIdAddTask - 1],
        cards: [
          ...lists[action.listIdAddTask - 1].cards,
          newCard,
        ],
      };
      return {
        ...state,
        lists,
      };
    }

    default:
      return state;
  }
}

export default tasksReducer;
