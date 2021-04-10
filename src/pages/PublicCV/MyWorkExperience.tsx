import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ExperienceTimeline } from 'components/ExperienceTimeline';
import { Experience } from 'models/user.models';

export const MyWorkExperience = ({ experiences }: { experiences: Experience[] }) => (
  <Container maxWidth='lg'>
    {experiences?.length ? (
      <ExperienceTimeline experiences={experiences} />
    ) : (
      <Typography> I am still a fresh graduate looking to find my first job in the industry </Typography>
    )}
  </Container>
);
