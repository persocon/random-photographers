import { useReducer } from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { reducer } from './reducer';

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
}

it("should set isRandom to true", () => {
  expect.assertions(1);

  const { result } = renderHook(() => useReducer(reducer, initialState));
  const [, dispatch] = result.current;

  act(() => {
    dispatch({ type: "toggleRandom" });
  });

  expect(result.current[0].isRandom).toEqual(true);
});

it("should set isRandom to false", () => {
  expect.assertions(1);

  const { result } = renderHook(() => useReducer(reducer, {...initialState, isRandom: true}));
  const [, dispatch] = result.current;

  act(() => {
    dispatch({ type: "toggleRandom" });
  });

  expect(result.current[0].isRandom).toEqual(false);
});

it("should upvote one photographer", () => {
  expect.assertions(1);

  const { result } = renderHook(() => useReducer(reducer, initialState));
  const [, dispatch] = result.current;

  act(() => {
    dispatch({ type: "upvote", name: "Helmut Newton" });
  });

  expect(result.current[0].photographers["Helmut Newton"]).toEqual(1);
});

it("should downvote one photographer", () => {
  expect.assertions(1);

  const { result } = renderHook(() => useReducer(reducer, {
    ...initialState,
    photographers: {...initialState.photographers, "Helmut Newton": 1},
  }));
  const [, dispatch] = result.current;

  act(() => {
    dispatch({ type: "downvote", name: "Helmut Newton" });
  });

  expect(result.current[0].photographers["Helmut Newton"]).toEqual(0);
});

it("should not downvote if vote is zero", () => {
  expect.assertions(1);

  const { result } = renderHook(() => useReducer(reducer, initialState));
  const [, dispatch] = result.current;

  act(() => {
    dispatch({ type: "downvote", name: "Helmut Newton" });
  });

  expect(result.current[0].photographers["Helmut Newton"]).toEqual(0);
});

it("should change order to DESC", () => {
  expect.assertions(1);

  const { result } = renderHook(() => useReducer(reducer, initialState));
  const [, dispatch] = result.current;

  act(() => {
    dispatch({ type: "DESC" });
  });

  expect(result.current[0].order).toEqual("DESC");
});

it("should change order to ASC", () => {
  expect.assertions(1);

  const { result } = renderHook(() => useReducer(reducer, {...initialState, order: 'DESC'}));
  const [, dispatch] = result.current;

  act(() => {
    dispatch({ type: "ASC" });
  });

  expect(result.current[0].order).toEqual("ASC");
});