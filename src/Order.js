import React from 'react';
import { useStateValue } from './StateProvider';

const Order = () => {
  const [{ order }, dispatch] = useStateValue();
  const orderToggle = () => (order === 'ASC' ? 'DESC' : 'ASC');
  return (<p><button onClick={() => dispatch({
    type: orderToggle()
  })}>Change Order to "{orderToggle()}"</button></p>);
}

export default Order;