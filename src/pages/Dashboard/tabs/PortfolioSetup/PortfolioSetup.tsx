import { Grid, makeStyles } from '@material-ui/core';
import { Papered } from 'components/Papered';
import { useDashboard } from '../../useDashboard';
import { AddNewProjectCard } from './AddNewProjectCard';
import { PortfolioProvider } from './portfolioContext';
import { ProjectCard } from './ProjectCard';
import { ProjectDialog } from './ProjectDialog';

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
  const { userData } = useDashboard();
  return (
    <PortfolioProvider>
      <ProjectDialog />

      <Papered title='Portfolio'>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <AddNewProjectCard />
          </Grid>

          {userData.portfolio.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={3}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Papered>
    </PortfolioProvider>
  );
}
