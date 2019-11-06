import * as actions from './actions';
import initialState from './initialState';

// eslint-disable-next-line max-lines-per-function
const reducer = (state = initialState, action) => {
  const { type, posts } = action;

  switch (type) {
    case actions.INITIALIZATION:
      return {
        ...state,
        initialized: true,
      };

    case actions.SAGAS_INITIALIZATION:
      return {
        ...state,
        sagasInitialization: true,
      };
    case actions.SAGAS_GET_POSTS:
      return {
        ...state,
        posts,
      };
    default:
      return state;
  }
};

export default reducer;
