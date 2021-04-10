import { Grid } from '@material-ui/core';
import { CardButton } from 'components/CardButton';
import { ExperienceTimeline } from 'components/ExperienceTimeline';
import { Papered } from 'components/Papered';
import { useDashboard } from '../../dashboardContext';
import { ExperienceDialog } from './ExperienceDialog';
import { ExperiencesProvider, useExperiences } from './experiencesContext';

export function ExperiencesSetupContainer() {
  return (
    <ExperiencesProvider>
      <ExperienceDialog />
      <ExperiencesSetup />
    </ExperiencesProvider>
  );
}

function ExperiencesSetup() {
  const { openExperienceDialog } = useExperiences();
  const { userData } = useDashboard();

  return (
    <Papered title='Experience'>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <CardButton onClick={openExperienceDialog(null)} />
        </Grid>
        <Grid item xs={12}>
          <ExperienceTimeline experiences={userData.experiences} />
        </Grid>
      </Grid>
    </Papered>
  );
}
