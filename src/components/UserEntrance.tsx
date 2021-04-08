import { Avatar, Box, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';
import { IProps } from 'models/user.models';
import { Copyright } from './Copyright';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface UserEntranceProps extends IProps {
  title: string;
  icon?: ReactNode;
}
export function UserEntrance({ children, title, icon }: UserEntranceProps) {
  const classes = useStyles();

  return (
    <Grid container component='main' className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {icon && <Avatar className={classes.avatar}>{icon}</Avatar>}
          <Typography component='h1' variant='h5'>
            {title}
          </Typography>
          {children}
          <Box mt={8}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
