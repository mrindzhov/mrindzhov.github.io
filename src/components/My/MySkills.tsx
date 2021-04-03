import { Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';
import { UserData } from '../../models';
import { RadarData, UserSkillsChart } from './UserSkillsChart';

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

  const data: RadarData[] = [
    { subject: 'Math', level: 120 },
    { subject: 'Chinese', level: 98 },
    { subject: 'English', level: 86 },
    { subject: 'Geography', level: 99 },
    { subject: 'Physics', level: 85 },
    { subject: 'History', level: 65 },
  ];

  return (
    <Container className={classes.flex} maxWidth='lg'>
      <Typography variant='h3'>Skills.</Typography>
      <Grid container justify='center'>
        <Grid item md={6} className={classes.skills}>
          <UserSkillsChart data={data} />
        </Grid>
        <Grid item md={6} className={classes.skills}>
          <UserSkillsChart data={data} />
        </Grid>
        <Grid item md={6} className={classes.skills}>
          <UserSkillsChart data={data} />
        </Grid>
      </Grid>

      <Typography variant='h5'>Download my Resume</Typography>

      <IconButton color='secondary' size='medium' onClick={() => {}}>
        <CloudDownload style={{ fontSize: 40 }} />
      </IconButton>
    </Container>
  );
}
