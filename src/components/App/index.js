// == Import npm
import React from 'react';

// == Import components
import Header from 'src/components/Header';
// import List from 'src/containers/List';
import Lists from 'src/containers/Lists';

// == Import css
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Lists />
  </div>
);

// == Export
export default App;
