import { Container, makeStyles } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from 'utils/firebase';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

export const Copyright = () => {
  const classes = useStyles();
  const [user] = useAuthState(firebaseAuth);

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Typography variant='body2' color='textSecondary' align='center'>
        No Copyright Issues ©.
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      <br />
      {!user && (
        <Typography variant='caption' color='textSecondary' align='center'>
          <Link color='inherit' href='http://localhost:3000/'>
            Click here to create yours
          </Link>
        </Typography>
      )}
    </Container>
  );
};
