import { makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ExitToAppOutlined, Visibility } from '@material-ui/icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { firebaseAuth } from 'utils/firebase';
import { dashboardPages } from './innerPages';
import { useDashboard } from './useDashboard';

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

export function DashboardDrawer() {
  const classes = useStyles();
  const { drawerOpen, setDrawerOpen } = useDashboard();

  return (
    <Drawer
      variant='permanent'
      classes={{
        paper: clsx(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose),
      }}
      open={drawerOpen}>
      <div className={classes.toolbarIcon}>
        <IconButton onClick={() => setDrawerOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <NavigationItems />
      </List>
      <Divider />
      <List>
        <ActionItems />
      </List>
    </Drawer>
  );
}

export const NavigationItems = () => {
  const classes = useStyles();

  return (
    <div>
      {dashboardPages
        .sort((a, b) => (a.visibleIndex || 0) - (b.visibleIndex || 0))
        .map(({ to, text, icon, component }) => (
          <React.Fragment key={to}>
            <ListItem button component={NavLink} to={'/dashboard' + to}>
              <ListItemIcon className={component ? classes.primaryIcon : classes.icon}>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            {to === '/inbox' && <Divider light />}
          </React.Fragment>
        ))}
    </div>
  );
};

export const ActionItems = () => {
  const { userData } = useDashboard();
  return (
    <div>
      {/* <ListSubheader inset>Saved reports</ListSubheader> */}

      {userData?.isPublic && (
        <ListItem component={NavLink} to={`/${userData.userName}`}>
          <ListItemIcon>
            <Visibility />
          </ListItemIcon>
          <ListItemText primary='Preview' />
        </ListItem>
      )}
      <ListItem button onClick={() => firebaseAuth.signOut()}>
        <ListItemIcon>
          <ExitToAppOutlined />
        </ListItemIcon>
        <ListItemText primary='Log Out' />
      </ListItem>
    </div>
  );
};
