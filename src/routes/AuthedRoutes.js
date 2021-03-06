import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Account from '../views/Account';
import CreateFlow from '../views/CreateFlow';
import YogaDetails from '../views/YogaDetails';

export default function AuthedRoutes({ user, admin }) {
  return (
    <Switch>
      <Route
        user={user}
        admin={admin}
        exact
        path="/account/:uid"
        component={() => <Account user={user} admin={admin} />}
      />
      <Route
        user={user}
        admin={admin}
        exact
        path="/createflow"
        component={() => <CreateFlow user={user} admin={admin} />}
      />
      <Route
        user={user}
        admin={admin}
        exact
        path="/flows/:flowKey"
        component={() => <YogaDetails user={user} admin={admin} />}
      />
    </Switch>
  );
}

AuthedRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
  admin: PropTypes.shape(PropTypes.obj),
};

AuthedRoutes.defaultProps = {
  user: null,
  admin: null,
};
