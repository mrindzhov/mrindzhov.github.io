import { Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';
import { useMemo } from 'react';
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
  downloadIcon: { fontSize: 40 },
  downlaodText: { margin: theme.spacing(2) },
  downloadButton: { width: 'max-content' },
}));

export default function MySkills(user: UserData) {
  const classes = useStyles();

  const skillsMap = useMemo(() => {
    return [
      { data: user.techSkills, title: 'Tech skills' },
      { data: user.softSkills, title: 'Soft skills' },
      { data: user.interests, title: 'Interests' },
    ];
  }, [user.interests, user.softSkills, user.techSkills]);

  return (
    <Container className={classes.flex} maxWidth='lg'>
      <Typography variant='h3'>Skills.</Typography>
      <Grid container justify='center'>
        {skillsMap
          .filter((i) => i.data?.length > 2)
          .map(({ data, title }) => (
            <Grid item key={title} md={6} className={classes.skills}>
              <Title>{title}</Title>
              <SkillsChart data={data} />
            </Grid>
          ))}
      </Grid>
      <Grid item xs={12}>
        <IconButton color='secondary' size='medium' href={user.resumeUrl} className={classes.downloadButton}>
          <CloudDownload className={classes.downloadIcon} />
          <Typography component='h2' variant='h4' className={classes.downlaodText}>
            Download my Resume
          </Typography>
        </IconButton>
      </Grid>
    </Container>
  );
}
