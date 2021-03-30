import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

export const Copyright = () => (
  <Typography variant='body2' color='textSecondary'>
    {'Copyright © '}
    Martin Indzhov
    {new Date().getFullYear()}
    {'.'}
    <br />
    Create yours at{' '}
    <Link color='inherit' component={NavLink} to='/'>
      {window.location.origin}
    </Link>
  </Typography>
);
