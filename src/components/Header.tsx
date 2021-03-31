import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { firebaseAuth } from '../App/firebase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { flexGrow: 1 },
    menuButton: { marginRight: theme.spacing(2) },
    title: { flexGrow: 1 },
  })
);

export default function Header() {
  const classes = useStyles();
  const [user] = useAuthState(firebaseAuth);

  return (
    <AppBar position='static'>
      <Toolbar>
        {!!user && (
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant='h6' className={classes.title}>
          <Button color='inherit' component={NavLink} variant='text' to='/dashboard'>
            Home
          </Button>
        </Typography>
        {!user ? (
          <>
            <Button color='inherit' component={NavLink} variant='text' to='/sign/in'>
              Login
            </Button>
            <Button color='inherit' component={NavLink} variant='text' to='/sign/up'>
              Sign Up
            </Button>
          </>
        ) : (
          <Button color='inherit' variant='text' onClick={() => firebaseAuth.signOut()}>
            Log out
          </Button>
        )}
        {/* <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
            <MenuIcon />
          </IconButton>
          <IconButton color='inherit'>
            <Badge badgeContent={4} color='secondary'>
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
      </Toolbar>
    </AppBar>
  );
}
