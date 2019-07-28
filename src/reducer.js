export const reducer = (state, action) => {
  switch (action.type) {
    case 'upvote': {
      const newState = {
        ...state.photographers,
        [action.name]: state.photographers[action.name] + 1,
      };
      
      return {...state, photographers: newState};
    }
    case 'downvote': {
      const newState = {
        ...state.photographers,
        [action.name]: state.photographers[action.name] > 0 ? state.photographers[action.name] - 1 : 0,
      };
      
      return {...state, photographers: newState};
    }
    case 'toggleRandom': {
      return {
        ...state,
        isRandom: !state.isRandom,
      };
    }
    case 'ASC': {
      return {
        ...state,
        order: 'ASC',
      };
    }
    case 'DESC': {
      return {
        ...state,
        order: 'DESC',
      };
    }
    default:
      return state;
  }
};