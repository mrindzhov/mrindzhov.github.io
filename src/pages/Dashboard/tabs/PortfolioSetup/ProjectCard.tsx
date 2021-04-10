import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Project } from 'models/user.models';
import { useStyles } from './PortfolioSetup';
import { usePortfolio } from './portfolioContext';

type ProjectCardProps = { project: Project };

export function ProjectCard({ project }: ProjectCardProps) {
  const classes = useStyles();
  const { openProjectDialog, deleteProject } = usePortfolio();

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
        <Button onClick={deleteProject(project.id)} color='secondary' variant='outlined'>
          Delete
        </Button>

        <Button size='small' color='primary' onClick={openProjectDialog(project)}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
