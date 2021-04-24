// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components / containers
import Card from 'src/components/Card';
import AddCard from 'src/containers/AddCard';

// == Import css
import './list.scss';

const List = ({ title, slug, cards }) => (
  <div className={`list list--${slug}`}>
    <h2 className="list__title">{title}</h2>
    {cards.map((task) => (
      <Card key={task.id} {...task} />
    ))}
    <AddCard />
  </div>
);

List.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default List;
