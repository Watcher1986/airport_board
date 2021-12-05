import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Options from '../options/Options';
import Table from '../table/Table';
import FlightsNotFound from '../flightsNotFound/FlightsNotFound';

import './scoreboard.scss';

const Scoreboard = ({ flightsList, getFlightsList, value }) => {
  const flightsTable = flightsList.length 
    ? (
    <Table flightsList={flightsList} />) 
    : (
    <FlightsNotFound />
  );

  return (
    <div className="scoreboard">
      <Switch>
        <Route exact path="/">
          <Options getFlightsList={getFlightsList} />
          {flightsTable}
        </Route>
        <Route path="/:pathType">
          <Options getFlightsList={getFlightsList} />
          {flightsTable}
        </Route>
        <Route path={`/departures${value ? `?search=${value}` : ''}`}>
          <Options getFlightsList={getFlightsList} />
          {flightsTable}
        </Route>
      </Switch>
    </div>
  );
};

Scoreboard.propTypes = {
  flightsList: PropTypes.array.isRequired,
  getFlightsList: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Scoreboard;
