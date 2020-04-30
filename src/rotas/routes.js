import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Login from '../components/Login';
import Chat from '../components/Chat';

import { ChatRoute } from '../components/Chat/route';

import AuthenticContext from '../authentication/auth';

function Routes() {
  return (
    <BrowserRouter>
      <AuthenticContext.Provider value={{ areAuth: false }}>
        <Switch>
          <Route exact path="/" component={() => <Login />} />
          <Route path="/cadastro" />
          <ChatRoute path="/chat" component={() => <Chat />} />
        </Switch>
      </AuthenticContext.Provider>
    </BrowserRouter>
  );
}

export default Routes;
