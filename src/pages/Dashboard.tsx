import { Fab } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Save } from '@material-ui/icons';

import { Route } from 'react-router-dom';
import DashboardDrawer, { dashboardPages, drawerWidth } from '../components/Dashboard/DashboardDrawer';
import Header from '../components/Header';
import { Papered } from '../components/Papered';
import { DashboardProvider, useDashboard } from '../dashboardContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
    height: '91vh',
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
  const { hasChanges, saveChanges } = useDashboard();

  return (
    <div className={classes.root}>
      <Header />
      <DashboardDrawer />

      <Container maxWidth='xl' className={classes.container}>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          {dashboardPages.map(({ to, component, text }) => (
            <Route
              exact
              key={to}
              path={'/dashboard' + to}
              render={() => component ?? <Papered title={`${text} page to be implemented`} />}
            />
          ))}
        </main>
      </Container>
      {hasChanges && (
        <div onClick={() => saveChanges()} role='presentation' className={classes.rootFab}>
          <Fab variant='extended' color='primary' aria-label='add'>
            <Save />
            Save changes
          </Fab>
        </div>
      )}
    </div>
  );
}
