import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { firebaseAuth } from '../App/firebase';
import { useDrawer } from './Dashboard/DashboardDrawer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { flexGrow: 1 },
    menuButton: { marginRight: theme.spacing(2) },
    title: { flexGrow: 1 },
    menuButtonHidden: { display: 'none' },
  })
);

export default function Header() {
  const classes = useStyles();
  const [user] = useAuthState(firebaseAuth);
  const [drawer, open, close] = useDrawer();
  return (
    <AppBar position='static'>
      {drawer}
      <Toolbar>
        {!!user && (
          <IconButton
            edge='start'
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            color='inherit'
            aria-label='menu'
            onClick={() => {}}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant='h6' className={classes.title}>
          <Button color='inherit' component={NavLink} variant='text' to='/dashboard'>
            Home
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
        {user && (
          <Button color='inherit' variant='text' onClick={() => firebaseAuth.signOut()}>
            Log out
          </Button>
        )}
        {/* <IconButton color='inherit'>
            <Badge badgeContent={4} color='secondary'>
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
      </Toolbar>
    </AppBar>
  );
}
