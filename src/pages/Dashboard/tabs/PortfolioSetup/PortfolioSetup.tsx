import { Button, Card, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { Papered } from 'components/Papered';
import { useDashboard } from '../../useDashboard';
import { usePortfolioDialog } from './usePortfolioDialog';

const useStyles = makeStyles((theme) => ({
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
  addButton: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
}));

export function PortfolioSetup() {
  const classes = useStyles();

  const { dialog, openProjectDialog } = usePortfolioDialog();
  const { userData, setUserData } = useDashboard();

  const deleteValue = (projectId: number) => () => {
    setUserData((prevState) => ({
      ...prevState,
      portfolio: prevState.portfolio?.filter((pr) => pr.id !== projectId) || [],
    }));
  };

  return (
    <Papered title='Portfolio'>
      {dialog}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Button
                variant='outlined'
                color='primary'
                size='large'
                className={classes.addButton}
                startIcon={<AddCircle />}
                onClick={openProjectDialog(null)}>
                Add new entry
              </Button>
            </CardContent>
          </Card>
        </Grid>
        {userData.portfolio?.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={project.imageUrl ? project.imageUrl : 'https://source.unsplash.com/random'}
                title={project.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant='h5' component='h2'>
                  {project.title}
                </Typography>
                <Typography>{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={deleteValue(project.id)} color='secondary' variant='outlined'>
                  Delete
                </Button>

                <Button size='small' color='primary' onClick={openProjectDialog(project)}>
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Papered>
  );
}
