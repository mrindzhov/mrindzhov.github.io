import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import React from 'react';
import Orders from './Dashboard/Orders';
import { PersonalInfoSetup } from './PersonalInfoSetup';
import { SocialLinksSetup } from './SocialLinksSetup';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export function BasicsSetup() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={9}>
        {/* <Paper className={fixedHeightPaper}> */}
        <PersonalInfoSetup />
        {/* </Paper> */}
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        {/* <Paper className={fixedHeightPaper}> */}
        <SocialLinksSetup />
        {/* </Paper> */}
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Orders />
        </Paper>
      </Grid>
    </Grid>
  );
}
