import React from 'react';
import { useStateValue } from './StateProvider';
import {useInterval} from './utils';

const Random = () => {
  const [{ isRandom, photographers }, dispatch] = useStateValue();
  const getRandomPhotographer = () => {
    const keys = Object.keys(photographers);
    return keys[ keys.length * Math.random() << 0]
  }
  const getRandomInterval = () => {
    const availableIntervals = [100, 300, 500, 1000, 1300, 1500, 2000, 2300, 2500, 3000];
    return availableIntervals[Math.floor(Math.random()*availableIntervals.length)];
  }

  const getRandomVote = () => {
    const availableVotes = ['upvote', 'downvote'];
    return availableVotes[Math.floor(Math.random()*availableVotes.length)];
  }

  useInterval(() => {
    if (isRandom) {
      dispatch({
        type: getRandomVote(),
        name: getRandomPhotographer(),
      });
    }
  }, getRandomInterval());

  const toggleRandom = () => {
    dispatch({
      type: 'toggleRandom'
    })
  }

  return (
    <>
      <p>machine: "{isRandom.toString()}"</p>
      <button onClick={() => toggleRandom()}>Random vote machine</button>
    </>
  )
}

export default Random;