import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { firebaseAuth } from '../App/firebase';
import { useDashboard } from '../dashboardContext';
import { drawerWidth } from './Dashboard/DashboardDrawer';

const useStyles = makeStyles((theme: Theme) => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1 },
  menuButtonHidden: { display: 'none' },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export default function Header() {
  const classes = useStyles();
  const [user] = useAuthState(firebaseAuth);
  const { drawerOpen, setDrawerOpen } = useDashboard();
  return (
    <AppBar position='absolute' className={clsx(classes.appBar, drawerOpen && classes.appBarShift)}>
      <Toolbar>
        <IconButton
          edge='start'
          className={clsx(classes.menuButton, drawerOpen && classes.menuButtonHidden)}
          color='inherit'
          onClick={() => setDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>

        <Typography variant='h6' className={classes.title}>
          <Button color='inherit' component={NavLink} variant='text' to='/dashboard'>
            Dashboard
          </Button>
        </Typography>
        {!user && (
          <>
            <Button color='inherit' component={NavLink} variant='text' to='/sign/in'>
              Login
            </Button>
            <Button color='inherit' component={NavLink} variant='text' to='/sign/up'>
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
