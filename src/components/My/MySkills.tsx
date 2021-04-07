import { Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';
import { UserData } from '../../models';
import Title from '../Dashboard/Title';
import { SkillsChart } from '../Skills/SkillsChart';

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  fullWidth: { width: '100%', display: 'flex', flexDirection: 'column' },
  skills: { height: 500, width: 500 },
}));

export default function MySkills(user: UserData) {
  const classes = useStyles();

  return (
    <Container className={classes.flex} maxWidth='lg'>
      <Typography variant='h3'>Skills.</Typography>
      <Grid container justify='center'>
        {user.techSkills.length > 2 && (
          <Grid item md={6} className={classes.skills}>
            <Title>Tech skills</Title>
            <SkillsChart data={user.techSkills} />
          </Grid>
        )}
        {user.softSkills.length > 2 && (
          <Grid item md={6} className={classes.skills}>
            <Title>Soft skills</Title>
            <SkillsChart data={user.softSkills} />
          </Grid>
        )}
        {user.interests.length > 2 && (
          <Grid item md={6} className={classes.skills}>
            <Title>Interests</Title>
            <SkillsChart data={user.interests} />
          </Grid>
        )}
      </Grid>

      <Typography variant='h5'>Download my Resume</Typography>

      <IconButton color='secondary' size='medium' onClick={() => {}}>
        <CloudDownload style={{ fontSize: 40 }} />
      </IconButton>
    </Container>
  );
}
