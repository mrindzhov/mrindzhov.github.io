import { LinearProgress } from '@material-ui/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import { firebaseAuth } from 'utils/firebase';
import Dashboard from 'pages/Dashboard';
import HomePage from 'pages/Home';
import PublicCVPage from 'pages/PublicCV';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

export const Routes = () => (
  <Switch>
    <RouteWrapper exact path='/' render={() => <HomePage />} publicOnly />
    <RouteWrapper path='/dashboard' render={() => <Dashboard />} privateOnly />

    <RouteWrapper exact path='/sign/in' render={() => <SignIn />} />
    <RouteWrapper exact path='/sign/up' render={() => <SignUp />} />

    <RouteWrapper exact path='/:userName' render={() => <PublicCVPage />} />
  </Switch>
);

interface RouteWrapperProps extends RouteProps {
  publicOnly?: true;
  privateOnly?: true;
}

function RouteWrapper({ publicOnly, privateOnly, ...rest }: RouteWrapperProps) {
  const [user, loading] = useAuthState(firebaseAuth);

  if (!user && loading) return <LinearProgress />;
  else if (publicOnly && user) return <Redirect to='/dashboard' />;
  else if (privateOnly && !user) return <Redirect to='/' />;
  else return <Route {...rest} />;
}
