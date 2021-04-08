import Typography from '@material-ui/core/Typography';
import { IProps } from 'models/user.models';

export default function Title({ children }: IProps) {
  return (
    <Typography component='h2' variant='h6' color='primary' gutterBottom>
      {children}
    </Typography>
  );
}
