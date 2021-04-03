import { makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Book, Comment, ExitToAppOutlined, Flag, Person, Visibility, Work } from '@material-ui/icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LayersIcon from '@material-ui/icons/Layers';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { firebaseAuth } from '../../App/firebase';
import { useDashboard } from '../../dashboardContext';
import { BasicsSetup } from '../BasicsSetup';
import SkillsSetup from '../Skills/SkillsSetup';

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },

  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  icon: {
    color: 'red',
  },
  primaryIcon: {
    color: theme.palette.primary.main,
  },
}));

export default function DashboardDrawer() {
  const classes = useStyles();
  const { open, setDrawerState } = useDashboard();

  return (
    <Drawer
      variant='permanent'
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}>
      <div className={classes.toolbarIcon}>
        <IconButton onClick={() => setDrawerState(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <DashboardListItems />
      </List>
      <Divider />
      <List>
        <SecondaryListItems />
      </List>
    </Drawer>
  );
}

type RouteElement = {
  to: string;
  text: string;
  icon: JSX.Element;
  component: JSX.Element | null;
};

export const dashboardPages: RouteElement[] = [
  { to: '/', text: 'Basic', icon: <Person />, component: <BasicsSetup /> },
  { to: '/experience', text: 'Experience', icon: <Work />, component: null },
  { to: '/education', text: 'Education', icon: <Book />, component: null },
  { to: '/skills', text: 'Skills', icon: <Flag />, component: <SkillsSetup /> },
  { to: '/portfolio', text: 'Portfolio', icon: <LayersIcon />, component: null },
  { to: '/testimonials', text: 'Testimontials', icon: <Comment />, component: null },
];

export const DashboardListItems = () => {
  const classes = useStyles();

  return (
    <div>
      {dashboardPages.map(({ to, text, icon, component }) => (
        <ListItem button component={NavLink} to={'/dashboard' + to} key={to}>
          <ListItemIcon className={component ? classes.primaryIcon : classes.icon}>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </div>
  );
};

export const SecondaryListItems = () => {
  const { username } = useDashboard();
  return (
    <div>
      {/* <ListSubheader inset>Saved reports</ListSubheader> */}
      <ListItem component={NavLink} to={`/${username}`}>
        <ListItemIcon>
          <Visibility />
        </ListItemIcon>
        <ListItemText primary='Preview' />
      </ListItem>

      <ListItem button onClick={() => firebaseAuth.signOut()}>
        <ListItemIcon>
          <ExitToAppOutlined />
        </ListItemIcon>
        <ListItemText primary='Log Out' />
      </ListItem>
    </div>
  );
};
