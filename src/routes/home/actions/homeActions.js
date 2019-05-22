import axios from 'axios';


// Action Types
export const RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES';


// Action Creators
export const receiveCountries = countries => ({
  type: RECEIVE_COUNTRIES,
  countries,
});


// Actions
export const fetchCountries = () => (dispatch) => {
  axios.get('https://restcountries.eu/rest/v2/all')
    .then((response) => {
      dispatch(receiveCountries(response.data));
    });
};
