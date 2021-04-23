// == Import npm
import React from 'react';

// == Import css
import './card.scss';

// == Composant
const Card = () => (
  <div className="card">
    <em className="card__priority card__priority--hight">Urgent</em>
    <h3 className="card__title">Faire un kanban pour alimenter mon Github</h3>
    <div className="card__assignment">
      <img className="card__assignment__img" src="/images/julien.jpg" alt="" title="Tâche assigné à Julien" />
    </div>
  </div>
);

// == Export
export default Card;
