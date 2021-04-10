import { Button, Card, CardContent } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import React from 'react';
import { usePortfolio } from './portfolioContext';
import { useStyles } from './PortfolioSetup';

export function AddNewProjectCard() {
  const classes = useStyles();
  const { openProjectDialog } = usePortfolio();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Button
          variant='outlined'
          color='primary'
          size='large'
          className={classes.addButton}
          startIcon={<AddCircle />}
          onClick={openProjectDialog(null)}>
          Add new entry
        </Button>
      </CardContent>
    </Card>
  );
}
