import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import { UserData } from 'models/user.models';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6),
  },
}));
export default function MyProjects(user: UserData) {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth='md'>
      <Grid container spacing={4}>
        {!user.portfolio && <Typography> I am fresh </Typography>}
        {user.portfolio?.map(({ title, description }) => (
          <Grid item key={title} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} image='https://source.unsplash.com/random' title='Image title' />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant='h5' component='h2'>
                  {title}
                </Typography>
                <Typography>{description}</Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>View</Button>
                <Button size='small'>Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
