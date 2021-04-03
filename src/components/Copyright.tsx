import { Container, makeStyles } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
}));

export const Copyright = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Typography variant='body2' color='textSecondary' align='center'>
        No Copyright Issues ©.
        {new Date().getFullYear()}
        {'.'}
        <Typography>
          <Link color='inherit' href='http://localhost:3000/'>
            Click here to create yours
          </Link>
        </Typography>
      </Typography>
    </Container>
  );
};
