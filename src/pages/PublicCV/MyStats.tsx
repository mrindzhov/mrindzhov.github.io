import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
}));
const isImplemented = false;

export function MyStats() {
  const classes = useStyles();

  return isImplemented ? (
    <Container className={classes.flex}>
      <div className='numbers'>
        <h4 id='coded-lines'>160 000</h4>
        <span>lines of code</span>
      </div>
      <div className='numbers'>
        <h4 id='rendered-pixels'>301 783 509</h4>
        <span>pixels rendered</span>
      </div>
      <div className='numbers'>
        <h4 id='coffee-cups'>1512</h4>
        <span>cups of coffee drunk</span>
      </div>
      <div className='numbers'>
        <h4 id='projects-completed'>26</h4>
        <span>projects completed</span>
      </div>
    </Container>
  ) : null;
}
