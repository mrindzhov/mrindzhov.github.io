import Grid from '@material-ui/core/Grid';
import { PersonalInfoSetup } from './PersonalInfoSetup';
import { InterestsSetup } from './Skills/SkillsSetup';
import { SocialLinksSetup } from './SocialLinksSetup';

export function BasicsSetup() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={8}>
        <PersonalInfoSetup />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <SocialLinksSetup />
      </Grid>

      <Grid item xs={12}>
        <InterestsSetup />
      </Grid>
    </Grid>
  );
}
