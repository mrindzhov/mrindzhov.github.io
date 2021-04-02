import { Container, IconButton, makeStyles, Typography } from '@material-ui/core';
import { CloudDownload, FontDownload } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  fullWidth: { width: '100%', display: 'flex', flexDirection: 'column' },
}));

export default function MySkills() {
  const classes = useStyles();

  return (
    <Container className={classes.flex} maxWidth='lg'>
      <Typography variant='h3'>Skills.</Typography>
      <Typography component='pre'>//TODO:</Typography>

      <Typography variant='h5'>Download my Resume</Typography>

      <IconButton
        color='secondary'
        size='medium'
        onClick={() => {
          // 'changeImage()'
        }}>
        <CloudDownload style={{ fontSize: 40 }} />
      </IconButton>
    </Container>
  );
}
