import * as actions from './actions';
import initialState from './initialState';

// eslint-disable-next-line max-lines-per-function
const reducer = (state = initialState, action) => {
  const { type } = action;

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
    default:
      return state;
  }
};

export default reducer;
