import { Button, Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { Papered } from 'components/Papered';
import { useDashboard } from '../../useDashboard';
import { ProjectCard } from './ProjectCard';
import { usePortfolioDialog } from './usePortfolioDialog';

export const useStyles = makeStyles((theme) => ({
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
  const { userData } = useDashboard();

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
            <ProjectCard project={project} openDialog={openProjectDialog} />
          </Grid>
        ))}
      </Grid>
    </Papered>
  );
}
