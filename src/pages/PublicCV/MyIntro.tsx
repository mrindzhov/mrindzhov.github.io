import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { UserData } from 'models/user.models';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    marginTop: 8,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export function MyIntro(user: UserData) {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth='md'>
        <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
          {user.fullName}
        </Typography>
        {/* https://material-ui.com/components/steppers/#text-with-carousel-effect */}
        {/* TODO: I am{' '} */}
        {/* {user.shortDescriptions?.map((d, i) => (
          <Typography key={i} variant='h5' align='center' color='textSecondary' paragraph>
            {d}
          </Typography>
        ))} */}

        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify='center'>
            <Grid item>
              <Button variant='contained' href='#chat'>
                {user.actionButtonText ?? 'Chat with me'}
              </Button>
            </Grid>
            {/* <Grid item>
              <Button variant='outlined'>Secondary action</Button>
            </Grid> */}
          </Grid>
        </div>
      </Container>
    </div>
  );
}
