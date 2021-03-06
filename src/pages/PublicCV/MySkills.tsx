import { Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';
import { useMemo } from 'react';
import { SkillsChart } from 'components/SkillsChart';
import { Title } from 'components/Title';
import { UserData } from 'models/user.models';

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

export function MySkills(user: UserData) {
  const classes = useStyles();

  const skillsMap = useMemo(() => {
    return [
      { data: user.techSkills, title: 'Tech skills' },
      { data: user.softSkills, title: 'Soft skills' },
      { data: user.interests, title: 'Interests' },
    ];
  }, [user.interests, user.softSkills, user.techSkills]);

  return skillsMap.some((s) => s.data?.length) ? (
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
  ) : null;
}
