import React from 'react';
import { StateProvider } from './StateProvider'
import List from './List';
import Order from './Order';
import Random from './Random';

import {reducer} from './reducer';

const App = () => {

  const initialState = {
    isRandom: false,
    photographers: {
      'Helmut Newton': 0,
      'June Newton': 0,
      'David Lynch': 0,
      'Guy Bourdin': 0,
      'Nobuyoshi Araki': 0,
      'Daido Doriama': 0,
      'Britany Markert': 0,
      'Derek Woods': 0,
      'Chase Lisbon': 0,
      'Carla Sozzani': 0,
    },
    order: 'ASC',
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <h1>My Favorite photographers</h1>
      <Random />
      <Order />
      <List />
    </StateProvider>
  );
}

export default App;