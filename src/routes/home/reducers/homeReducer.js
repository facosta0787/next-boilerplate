import { RECEIVE_COUNTRIES } from '../actions/homeActions';

export const initialState = {
  countries: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_COUNTRIES:
      return { ...state, countries: action.countries };
    default:
      return state;
  }
};
