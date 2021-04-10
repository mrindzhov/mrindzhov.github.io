import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Project } from 'models/user.models';
import { useDashboard } from '../../useDashboard';
import { useStyles } from './PortfolioSetup';

type ProjectProps = {
  project: Project;
  openDialog: (selectedProject: Project | null) => () => void;
};

export function ProjectCard({ project, openDialog }: ProjectProps) {
  const classes = useStyles();
  const { setUserData } = useDashboard();

  const deleteValue = (projectId: number) => () => {
    setUserData((prevState) => ({
      ...prevState,
      portfolio: prevState.portfolio?.filter((pr) => pr.id !== projectId) || [],
    }));
  };

  return (
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

        <Button size='small' color='primary' onClick={openDialog(project)}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
