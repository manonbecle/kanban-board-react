// == Import npm
import React from 'react';

// == Import components
import Card from 'src/components/Card';
import AddCard from 'src/components/AddCard';

// == Import css
import './list.scss';

// == Composant
const List = () => (
  <div className="lists">
    <div className="list list--todo">
      <h2 className="list__title">A faire</h2>
      <Card />
      <Card />
      <AddCard />
    </div>
    <div className="list list--in-progress">
      <h2 className="list__title">En cours</h2>
      <AddCard />
    </div>
    <div className="list list--to-test">
      <h2 className="list__title">A tester</h2>
      <Card />
      <AddCard />
    </div>
    <div className="list list--finished">
      <h2 className="list__title">Terminé</h2>
      <Card />
      <Card />
      <AddCard />
    </div>
  </div>
);

// == Export
export default List;
