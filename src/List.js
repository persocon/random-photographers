import React from 'react';
import { useStateValue } from './StateProvider';
import {setOrder} from './utils';

const List = () => {
  const [{ photographers, order }, dispatch] = useStateValue();
  const orderedPhotographers = setOrder(photographers, order)
  return Object.keys(orderedPhotographers).map((photographer) => {
    return (
      <div key={photographer}>
        <p key={photographer}>{photographer} - {orderedPhotographers[photographer]}</p>
        <button onClick={() => dispatch({
          type: 'upvote',
          name: photographer,
        })}>
          <span role="img" aria-label="point up">👆</span>Upvote
        </button>
        <button onClick={() => dispatch({
          type: 'downvote',
          name: photographer,
        })}>
          <span role="img" aria-label="point down">👇</span>Downvote
        </button>
      </div>
    )
  }
  );
}

export default List;