import { AppBar, Toolbar } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
}));
export function HomePageHeader() {
  const classes = useStyles();

  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <div className={classes.left} />
        <Link variant='h6' underline='none' color='inherit' className={classes.title} component={NavLink} to='/'>
          Tiny Business Card
        </Link>

        <div className={classes.right}>
          <Link
            color='inherit'
            variant='h6'
            underline='none'
            className={classes.rightLink}
            component={NavLink}
            to='/sign/in'>
            Sign In
          </Link>
          <Link
            variant='h6'
            underline='none'
            className={clsx(classes.rightLink, classes.linkSecondary)}
            component={NavLink}
            to='/sign/up'>
            Sign Up
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
