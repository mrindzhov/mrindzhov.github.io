import React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import HomePage from '../pages/HomePage';
import PublicCVPage from '../pages/PublicCVPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Layout from './Layout';

export const Routes = () => (
  <Switch>
    <RouteWrapper exact path='/' render={() => <HomePage />} hasLayout />
    <RouteWrapper exact path='/dashboard' render={() => <Dashboard />} hasLayout />

    <RouteWrapper exact path='/sign/in' render={() => <SignIn />} />
    <RouteWrapper exact path='/sign/up' render={() => <SignUp />} />

    <RouteWrapper exact path='/:userName' render={() => <PublicCVPage />} />
  </Switch>
);

interface RouteWrapperProps extends RouteProps {
  hasLayout?: true;
}

function RouteWrapper({ hasLayout, component, render, ...rest }: RouteWrapperProps) {
  return (
    <Route
      {...rest}
      render={
        hasLayout && render
          ? (props) => (
              <Layout>
                <>{render(props)}</>
              </Layout>
            )
          : render
      }
    />
  );
}
