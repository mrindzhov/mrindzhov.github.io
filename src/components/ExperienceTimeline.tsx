import Timeline from '@material-ui/lab/Timeline';
import { Experience } from 'models/user.models';
import { ExperienceTimelineItem } from './ExperienceTimelineItem';

export const ExperienceTimeline = ({ experiences }: { experiences: Experience[] }) =>
  experiences?.length ? (
    <Timeline align='alternate'>
      {experiences
        .sort((a, b) => (a.endDate?.getTime() ?? 0) - (b.endDate?.getTime() ?? 0))
        .map((experience) => (
          <ExperienceTimelineItem {...experience} key={experience.id} />
        ))}
    </Timeline>
  ) : null;
