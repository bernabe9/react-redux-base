import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';

import RouteFromPath from '../src/components/routes/RouteFromPath';

const App = ({ authenticated, checked, routes }) => {
  if (!checked) {
    return false;
  }

  return (
    <Switch>
      {routes.map((route, index) =>
        <RouteFromPath
          key={`route${index}`}
          {...route}
          authenticated={authenticated}
        />)
      }
    </Switch>
  );
};

App.propTypes = {
  authenticated: bool.isRequired,
  checked: bool.isRequired
};

const mapState = state => ({
  checked: state.getIn(['session', 'checked']),
  authenticated: state.getIn(['session', 'authenticated'])
});

export default connect(mapState)(App);
