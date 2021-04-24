// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import css
import './card.scss';

// == Composant
const Card = ({ title, assigment, priority }) => {
  // Transformer le nom de la personne assignée : minuscules et espaces remplacés par des tirets
  const imgAssigment = assigment.toLowerCase().replace(/ /g, '-');

  return (
    <div className="card">
      <em className={`card__priority card__priority--${priority}`}>{`Priorité ${priority}`}</em>
      <h3 className="card__title">{title}</h3>
      <div className="card__assignment">
        <img className="card__assignment__img" src={`/images/${imgAssigment}.jpg`} alt="" title={`Tâche assigné à ${assigment}`} />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  assigment: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
};

// == Export
export default Card;
