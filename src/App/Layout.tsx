import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Copyright } from '../components/Copyright';
import Header from '../components/Header';
import { IProps } from '../models';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

interface LayoutProps extends IProps {
  noHeader?: true;
}
export default function Layout({ children, noHeader }: LayoutProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {!noHeader && <Header />}

      {noHeader ? (
        children
      ) : (
        <Container component='main' className={classes.main}>
          {children}
        </Container>
      )}
      <footer className={classes.footer}>
        <Container>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
