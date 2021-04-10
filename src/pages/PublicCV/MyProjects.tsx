import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
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
export function MyProjects(user: UserData) {
  const classes = useStyles();

  return user.portfolio?.length ? (
    <Container className={classes.cardGrid} maxWidth='md'>
      <Grid container spacing={4}>
        {user.portfolio.map(({ title, description, id, imageUrl, projectUrl }) => (
          <Grid item key={id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={imageUrl ? imageUrl : 'https://source.unsplash.com/random'}
                title='Image title'
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant='h5' component='h2'>
                  {title}
                </Typography>
                <Typography>{description}</Typography>
              </CardContent>
              <CardActions>
                <Button size='small' href={projectUrl}>
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  ) : null;
}
