import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthenticContext from '../../authentication/auth';

export const ChatRoute = props => {
  const { areAuth } = useContext(AuthenticContext);

  return areAuth ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  );
};
