import { useEffect, useRef } from 'react';

export const setOrder = (items, order) => {
  return order === 'DESC'
    ? Object.entries(items)
      .sort(([,v1], [,v2]) => +v1 - +v2)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})
    : Object.entries(items)
      .sort(([,v1], [,v2]) => +v2 - +v1)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})
}

export const useInterval = (callback, delay) => {
  // SOURCE: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}