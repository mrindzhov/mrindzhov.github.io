import { Button, makeStyles, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { AddCircle } from '@material-ui/icons';
import { IProps } from '../models';

export const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  addButton: {
    width: 'max-content',
    margin: theme.spacing(2),
  },
}));

type PaperedProps = IProps & {
  title: string;
  onEntityAdded?: React.MouseEventHandler<HTMLButtonElement>;
  addEntityButtonText?: string;
};

export function Papered({ title, children, onEntityAdded, addEntityButtonText = 'Add new entry' }: PaperedProps) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography component='h2' variant='h4' color='primary' gutterBottom>
        {title}
      </Typography>
      {onEntityAdded && (
        <Button
          variant='contained'
          color='primary'
          size='large'
          className={classes.addButton}
          startIcon={<AddCircle />}
          onClick={onEntityAdded}>
          {addEntityButtonText}
        </Button>
      )}

      {children}
    </Paper>
  );
}
