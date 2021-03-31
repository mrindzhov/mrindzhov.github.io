import { LinearProgress } from '@material-ui/core';
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
    <RouteWrapper exact path='/dashboard' render={() => <Dashboard />} hasLayout privateOnly />

    <RouteWrapper exact path='/sign/in' render={() => <SignIn />} publicOnly />
    <RouteWrapper exact path='/sign/up' render={() => <SignUp />} publicOnly />

    <RouteWrapper exact path='/:userName' render={() => <PublicCVPage />} />
  </Switch>
);

interface RouteWrapperProps extends RouteProps {
  hasLayout?: true;
  publicOnly?: true;
  privateOnly?: true;
}

function RouteWrapper({ hasLayout, publicOnly, privateOnly, component, render, ...rest }: RouteWrapperProps) {
  const [user, loading] = useAuthState(firebaseAuth);

  if (!user && loading) return <LinearProgress />;
  else if (publicOnly && user) return <Redirect to='/dashboard' />;
  else if (privateOnly && !user) return <Redirect to='/sign/in' />;
  else
    return (
      <Route {...rest} render={hasLayout && render ? (props) => <Layout>{<>{render(props)}</>}</Layout> : render} />
    );
}
