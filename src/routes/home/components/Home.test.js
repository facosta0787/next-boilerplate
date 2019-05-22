import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

const defaultProps = {
  actions: {
    fetchCountries: jest.fn(),
  },
};

describe('Home Component', () => {
  it('Should render without error', () => {
    shallow(<Home {...defaultProps} />);
  });

  it('Should have called fetchCountries function', () => {
    shallow(<Home {...defaultProps} />);
    expect(defaultProps.actions.fetchCountries).toHaveBeenCalled();
  });
});
