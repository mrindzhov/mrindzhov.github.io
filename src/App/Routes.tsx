import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import HomePage from '../pages/HomePage';
import PublicCVPage from '../pages/PublicCVPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export function PrivateRoutes() {
  return (
    <Switch>
      <Route exact path='/' render={() => <HomePage />} />
      <Route exact path='/app/dashboard' render={() => <Dashboard />} />
      <Route render={() => <Redirect to='/' />} />
    </Switch>
  );
}

export function PublicRoutes() {
  return (
    <Switch>
      <Route exact path='/' render={() => <HomePage />} />
      <Route exact path='/enter' render={() => <SignIn />} />
      <Route exact path='/register' render={() => <SignIn />} />
      <Route exact path='/sign/up' render={() => <SignUp />} />
      <Route exact path='/:userName' render={() => <PublicCVPage />} />
    </Switch>
  );
}
