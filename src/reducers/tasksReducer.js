import {
  OPEN_MODAL_ADD_TASK,
  CLOSE_MODAL_ADD_TASK,
  HANDLE_DESCRIPTION_ADD_TASK,
  ADD_TASK_IN_DOM,
  CLEAR_DESCRIPTION_ADD_TASK,
} from 'src/actions/kanbanAction';

const initialState = {
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
          id: 1,
          title: 'Gestion du Drag and drop et donc de la position de chaque \'Card\' dans une liste',
          priority: 'normale',
          assigment: 'Elsa M',
        },
        {
          id: 2,
          title: 'Responsive design',
          priority: 'haute',
          assigment: 'Vincent F',
        },
      ],
    },
    {
      id: 2,
      title: 'En cours',
      slug: 'in-progress',
      cards: [
        {
          id: 3,
          title: 'Installer Redux pour gérer les changements du state',
          priority: 'basse',
          assigment: 'Estelle L',
        },
      ],
    },
    {
      id: 3,
      title: 'A tester',
      slug: 'to-test',
      cards: [
        {
          id: 4,
          title: 'Modifier les data : plus un fichier de data mais uniquement les données du state',
          priority: 'haute',
          assigment: 'Julien B',
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
      // Calculer le prochain id de ma nouvelle carte
      let newId = 0;
      state.lists.forEach((list) => {
        // pour chaque liste, je veux parcourir les cartes
        list.cards.forEach((card) => {
          // pour chaque carte, si l'id de la carte est plus grand ou égal à newId en cours
          // alors newId prend une nouvelle valeur : id de la carte "lu" + 1
          if (card.id >= newId) {
            newId = card.id + 1;
          }
        });
      });

      const newCard = {
        id: newId,
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

    case CLEAR_DESCRIPTION_ADD_TASK:
      return {
        ...state,
        descriptionAddTask: '',
      };

    default:
      return state;
  }
}

export default tasksReducer;
