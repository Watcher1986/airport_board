import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Search from '../search/Search';
import Scoreboard from '../scoreboard/ScoreBoard';

import { flightsListSelector, inputValueSelector } from '../../flights/flights.selectors';
import * as flightsActions from '../../flights/flights.actions';

const Main = ({ flightsList, getFlightsList, inputValueChanged, value }) => {
  return (
    <main className="main">
      <BrowserRouter>
        <Search inputValueChanged={inputValueChanged} value={value} />
        <Scoreboard value={value} flightsList={flightsList} getFlightsList={getFlightsList} />
      </BrowserRouter>
    </main>
  );
};

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsList,
  inputValueChanged: flightsActions.inputValueChanged,
};

const mapState = state => {
  return {
    flightsList: flightsListSelector(state),
    value: inputValueSelector(state),
  };
};

Main.propTypes = {
  flightsList: PropTypes.array.isRequired,
  getFlightsList: PropTypes.func.isRequired,
  inputValueChanged: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default connect(mapState, mapDispatch)(Main);
