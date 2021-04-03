import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { IProps } from '../models';
import Title from './Dashboard/Title';

export const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

type PaperedProps = IProps & {
  title: string;
};

export function Papered({ title, children }: PaperedProps) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Title>{title}</Title>
      {children}
    </Paper>
  );
}
