import React from 'react';
import {
  bool,
  shape,
  func,
  array,
} from 'prop-types';
import './Home.scss';

class Home extends React.Component {
  componentDidMount() {
    const { fetchCountries } = this.props.actions;
    fetchCountries();
  }

  handleClick = () => {
    const { setAppLoading } = this.props.actions;
    setAppLoading();
  }

  render() {
    const { isLoading, countries } = this.props;
    return (
      <div>
        <h1>{'Logytec\'s boilerplate'}</h1>
        <h3>{`${isLoading}`}</h3>
        <button type="button" onClick={this.handleClick}>Change Loading</button>
        <div className="list--container">
          <ul>
            {
              countries && countries.map(country => (
                <li key={country.alpha3Code}>{country.name}</li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  isLoading: bool,
  countries: array,
  actions: shape({
    setAppLoading: func,
    fetchCountries: func,
  }),
};

export default Home;
