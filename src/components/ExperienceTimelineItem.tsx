import { Avatar } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import { Experience } from 'models/user.models';
import { visualizeDatesRange } from 'utils';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  companyLogo: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  companyDescription: {
    whiteSpace: 'pre',
  },
}));
export const ExperienceTimelineItem = (experience: Experience) => {
  const { companyName, companyLogo, jobDescription, jobTitle, startDate, endDate } = experience;
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant='body1' color='textSecondary'>
          {visualizeDatesRange(startDate, endDate)}
        </Typography>
        <Typography variant='h5' component='h2' color='primary'>
          {jobTitle}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          <Avatar src='https://source.unsplash.com/random' alt={companyLogo} className={classes.companyLogo} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant='h6' component='h1'>
            {companyName}
          </Typography>
          <Typography variant='caption' component='p' className={classes.companyDescription}>
            {jobTitle}
          </Typography>
          <hr />
          <Typography component='p'>{jobDescription}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};
