import { connect } from 'react-redux';
import { setAppLoading } from '../../../shared/redux/actions';
import { fetchCountries } from '../actions/homeActions';
import Home from '../components/Home';

const mapStateToProps = ({ appReducer, homeReducer }) => ({
  isLoading: appReducer.isLoading,
  countries: homeReducer.countries,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    setAppLoading: state => dispatch(setAppLoading(state)),
    fetchCountries: () => dispatch(fetchCountries()),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
