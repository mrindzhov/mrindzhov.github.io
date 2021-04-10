import { Grid } from '@material-ui/core';
import { CardButton } from 'components/CardButton';
import { Papered } from 'components/Papered';
import { useDashboard } from '../../useDashboard';
import { PortfolioProvider, usePortfolio } from './portfolioContext';
import { ProjectCard } from './ProjectCard';
import { ProjectDialog } from './ProjectDialog';

export function PortfolioSetupContainer() {
  return (
    <PortfolioProvider>
      <ProjectDialog />
      <PortfolioSetup />
    </PortfolioProvider>
  );
}

function PortfolioSetup() {
  const { userData } = useDashboard();
  const { openProjectDialog } = usePortfolio();

  return (
    <Papered title='Portfolio'>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <CardButton onClick={openProjectDialog(null)} />
        </Grid>

        {userData.portfolio?.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={3}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Papered>
  );
}
