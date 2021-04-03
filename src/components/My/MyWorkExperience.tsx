import { Avatar, Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import React from 'react';
import { Experience } from '../../models';

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
}));

export default function MyWorkExperience({ experience }: { experience: Experience[] }) {
  const classes = useStyles();

  return (
    <Container maxWidth='lg'>
      <Timeline align='alternate'>
        {experience
          .sort((a, b) => (a.endDate?.getTime() ?? 0) - (b.endDate?.getTime() ?? 0))
          .map(({ companyName, companyLogo, jobDescription, jobTitle, startDate, endDate }, i) => (
            <TimelineItem key={i}>
              <TimelineOppositeContent>
                <Typography variant='body1' color='textSecondary'>
                  {visualizeDate(startDate, endDate)}
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
                  <Typography variant='caption' component='p'>
                    {jobTitle}
                  </Typography>
                  <hr />
                  <Typography component='p'>{jobDescription}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
    </Container>
  );

  function visualizeDate(startDate: Date, endDate: Date | null): string {
    const startDateText = startDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    const endDateText = endDate?.toLocaleString('default', { month: 'long', year: 'numeric' }) ?? 'Present';

    return `${startDateText} - ${endDateText}`;
  }
}
