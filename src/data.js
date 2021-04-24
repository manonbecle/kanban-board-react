export default {
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
