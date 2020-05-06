import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const pullOfUsers = [
  { name: 'Rafael', route: 1 },
  { name: 'Michael', route: 2 },
  { name: 'Gabriel', route: 3 },
  { name: 'Asrael', route: 4 },
  { name: 'Asasel', route: 5 },
  { name: 'Sentiel', route: 6 },
  { name: 'Uriel', route: 7 },
  { name: 'Selaphiel', route: 8 },
  { name: 'Jegudiel', route: 9 },
];

ReactDOM.render(<App pullOfUsers={ pullOfUsers } />, document.getElementById('root'));
