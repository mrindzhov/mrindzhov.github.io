import { Fab } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { DeleteSweep, Save } from '@material-ui/icons';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardDrawer, { drawerWidth } from './Drawer';
import { dashboardPages } from "./innerPages";
import Header from './Header';
import { Papered } from 'components/Papered';
import { DashboardProvider, useDashboard } from './useDashboard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  rootFab: {
    position: 'fixed',
    bottom: theme.spacing(6),
    right: theme.spacing(6),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100%',
    overflow: 'auto',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function DashboardContainer() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
}

function Dashboard() {
  const classes = useStyles();
  const { hasChanges, saveChanges, discardChanges } = useDashboard();

  return (
    <div className={classes.root}>
      <Header />
      <DashboardDrawer />

      <Container maxWidth='xl' className={classes.container}>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Switch>
            {dashboardPages.map(({ to, component, text }) => (
              <Route
                exact
                key={to}
                path={'/dashboard' + to}
                render={() => component ?? <Papered title={`${text} page to be implemented`} />}
              />
            ))}
            <Route render={() => <Redirect to={'/dashboard'} />} />
          </Switch>
        </main>
      </Container>
      {hasChanges && (
        <div role='presentation' className={classes.rootFab}>
          <Fab variant='extended' color='primary' onClick={saveChanges}>
            <Save />
            Save changes
          </Fab>
          <Fab variant='extended' color='secondary' onClick={discardChanges}>
            <DeleteSweep />
            Discard changes
          </Fab>
        </div>
      )}
    </div>
  );
}
