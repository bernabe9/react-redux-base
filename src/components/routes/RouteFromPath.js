import React from 'react';
import { object, bool } from 'prop-types';
import { Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

const RouteFromPath = ({ route, authenticated }) => (
  route.private ?
    <PrivateRoute
      {...route}
      authenticated={authenticated}
    /> :
    <Route
      {...route}
    />
);

RouteFromPath.propTypes = {
  route: object.isRequired,
  authenticated: bool.isRequired
};

export default RouteFromPath;
