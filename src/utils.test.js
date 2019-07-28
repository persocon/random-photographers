import { setOrder } from './utils';

const DESC = {
  'Helmut Newton': 1,
  'June Newton': 2,
  'David Lynch': 3,
  'Guy Bourdin': 4,
  'Nobuyoshi Araki': 5,
  'Daido Doriama': 6,
  'Britany Markert': 7,
  'Derek Woods': 8,
  'Chase Lisbon': 9,
  'Carla Sozzani': 10,
};

const ASC = {
  'Helmut Newton': 10,
  'June Newton': 9,
  'David Lynch': 8,
  'Guy Bourdin': 7,
  'Nobuyoshi Araki': 6,
  'Daido Doriama': 5,
  'Britany Markert': 4,
  'Derek Woods': 3,
  'Chase Lisbon': 2,
  'Carla Sozzani': 1,
};

it('should order ASC', () => {
  const descReordered = {
    'Carla Sozzani': 10,
    'Chase Lisbon': 9,
    'Derek Woods': 8,
    'Britany Markert': 7,
    'Daido Doriama': 6,
    'Nobuyoshi Araki': 5,
    'Guy Bourdin': 4,
    'David Lynch': 3,
    'June Newton': 2,
    'Helmut Newton': 1,
  };
  expect(setOrder(DESC, 'ASC')).toEqual(descReordered);
})

it('should order DESC', () => {
  const ascReordered = {
    'Carla Sozzani': 1,
    'Chase Lisbon': 2,
    'Derek Woods': 3,
    'Britany Markert': 4,
    'Daido Doriama': 5,
    'Nobuyoshi Araki': 6,
    'Guy Bourdin': 7,
    'David Lynch': 8,
    'June Newton': 9,
    'Helmut Newton': 10,
  };
  expect(setOrder(ASC, 'DESC')).toEqual(ascReordered);
})