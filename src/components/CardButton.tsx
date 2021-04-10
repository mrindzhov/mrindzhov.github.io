import { Button, Card, CardContent, makeStyles } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles(() => ({
  card: { height: '100%', display: 'flex', flexDirection: 'column' },
  cardContent: { flexGrow: 1 },
  addButton: { width: '100%', height: '100%', border: 'none' },
}));

type CardButtonProps = { onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined };

export function CardButton({ onClick }: CardButtonProps) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Button
          variant='outlined'
          color='primary'
          size='large'
          className={classes.addButton}
          startIcon={<AddCircle />}
          onClick={onClick}>
          Add new entry
        </Button>
      </CardContent>
    </Card>
  );
}
