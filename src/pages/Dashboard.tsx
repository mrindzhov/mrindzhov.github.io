import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import DashboardDrawer, { dashboardPages, drawerWidth } from '../components/Dashboard/DashboardDrawer';
import Header from '../components/Header';
import { DashboardProvider } from '../dashboard.context';
import { Papered } from '../components/Papered';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
    height: '100vh',
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
  const classes = useStyles();

  return (
    <DashboardProvider>
      <div className={classes.root}>
        <Header />
        <DashboardDrawer />

        <Container maxWidth='xl' className={classes.container}>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            {dashboardPages.map(({ to, component, text }) => (
              <Route
                exact
                path={'/dashboard' + to}
                render={() => component ?? <Papered title={`${text} page to be implemented`} />}
              />
            ))}
          </main>
        </Container>
      </div>
    </DashboardProvider>
  );
}
