import { Button, Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { ExperienceTimeline } from 'components/ExperienceTimeline';
import { Papered } from 'components/Papered';
import { useDashboard } from '../../useDashboard';
import { useExperienceDialog } from './useExperienceDialog';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  addButton: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
}));

export function ExperienceSetup() {
  const classes = useStyles();
  const { dialog, openExperienceDialog } = useExperienceDialog();
  const { userData } = useDashboard();

  return (
    <Papered title='Experience'>
      {dialog}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Button
                variant='outlined'
                color='primary'
                size='large'
                className={classes.addButton}
                startIcon={<AddCircle />}
                onClick={openExperienceDialog(null)}>
                Add new entry
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <ExperienceTimeline experiences={userData.experiences} />
        </Grid>
      </Grid>
    </Papered>
  );
}
