// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import Card from 'src/components/Card';
import AddCard from 'src/components/AddCard';

// == Import css
import './list.scss';

// == Composant
const List = ({ tasks }) => {
  const tasksToDo = tasks.filter((task) => task.list === 1);
  const tasksInProgress = tasks.filter((task) => task.list === 2);
  const tasksToTest = tasks.filter((task) => task.list === 3);
  const tasksFinished = tasks.filter((task) => task.list === 4);

  return (
    <div className="lists">
      <div className="list list--todo">
        <h2 className="list__title">A faire</h2>
        {tasksToDo.map((task) => (
          <Card key={task.id} {...task} />
        ))}
        <AddCard />
      </div>
      <div className="list list--in-progress">
        <h2 className="list__title">En cours</h2>
        {tasksInProgress.map((task) => (
          <Card key={task.id} {...task} />
        ))}
        <AddCard />
      </div>
      <div className="list list--to-test">
        <h2 className="list__title">A tester</h2>
        {tasksToTest.map((task) => (
          <Card key={task.id} {...task} />
        ))}
        <AddCard />
      </div>
      <div className="list list--finished">
        <h2 className="list__title">Terminé</h2>
        {tasksFinished.map((task) => (
          <Card key={task.id} {...task} />
        ))}
        <AddCard />
      </div>
    </div>
  );
};

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      list: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default List;
