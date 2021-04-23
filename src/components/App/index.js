// == Import npm
import React from 'react';

// == Import components
import Header from 'src/components/Header';
import List from 'src/components/List';

// == Import css
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <List />
  </div>
);

// == Export
export default App;
