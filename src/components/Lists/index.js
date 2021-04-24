// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import List from 'src/components/List';

// == Import css
import './lists.scss';

// == Composant
const Lists = ({ lists }) => (
  <div className="lists">
    {lists.map((list) => (
      <List key={list.id} {...list} />
    ))}
  </div>
);

Lists.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Lists;
