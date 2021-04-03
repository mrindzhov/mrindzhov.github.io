import { Avatar, Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { UserData } from '../../models';
import { socialLinksInfo } from './socialLinksInfo';

const useStyles = makeStyles((theme) => ({
  large: {
    // backgroundColor: theme.palette.background.default,
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function AboutMe(user: UserData) {
  const classes = useStyles();

  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item md={4} sm={12} className={classes.flex}>
          <Avatar src='https://source.unsplash.com/random' className={classes.large} />
          <div>
            {socialLinksInfo.map(({ component }, i) => (
              <IconButton size='medium' key={i}>
                {component}
              </IconButton>
            ))}
          </div>
        </Grid>
        <Grid item md={8}>
          <Typography component='h3' variant='h3' align='center' color='textPrimary' gutterBottom>
            About me.
          </Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>
            {user.bio}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
