import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import HomePage from '../pages/HomePage';
import PublicCVPage from '../pages/PublicCVPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { firebaseAuth } from './firebase';
import Layout from './Layout';

export const Routes = () => (
  <Switch>
    <RouteWrapper exact path='/' render={() => <HomePage />} hasLayout />
    <RouteWrapper exact path='/dashboard' render={() => <Dashboard />} hasLayout noAuth />

    <RouteWrapper exact path='/sign/in' render={() => <SignIn />} noAuth />
    <RouteWrapper exact path='/sign/up' render={() => <SignUp />} noAuth />

    <RouteWrapper exact path='/:userName' render={() => <PublicCVPage />} />
  </Switch>
);

interface RouteWrapperProps extends RouteProps {
  hasLayout?: true;
  noAuth?: true;
}

function RouteWrapper({ hasLayout, noAuth, component, render, ...rest }: RouteWrapperProps) {
  const [user] = useAuthState(firebaseAuth);
  if (noAuth && user) {
    return <Redirect to='/' />;
  }
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
