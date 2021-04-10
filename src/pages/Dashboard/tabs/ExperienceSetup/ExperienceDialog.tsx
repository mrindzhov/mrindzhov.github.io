import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import React from 'react';
import { toCapitalizedWord } from 'utils';
import { useExperiences } from './experiencesContext';

export function ExperienceDialog() {
  const { open, handleClose, experience, handleDateChange, handleFieldChange, saveExperience } = useExperiences();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{experience.id > 0 ? 'Edit experience' : 'Add new experience'}</DialogTitle>
      <DialogContent>
        {Object.entries(experience)
          .filter(([key]) => key !== 'id')
          .map(([key, value]) => (
            <React.Fragment key={key}>
              {key === 'startDate' || key === 'endDate' ? (
                <KeyboardDatePicker
                  disableToolbar
                  variant='inline'
                  format='MM/dd/yyyy'
                  margin='dense'
                  value={value}
                  onChange={handleDateChange(key)}
                />
              ) : (
                <TextField
                  required
                  fullWidth
                  margin='dense'
                  key={key}
                  name={key}
                  label={toCapitalizedWord(key)}
                  onChange={handleFieldChange}
                  value={value}
                />
              )}
            </React.Fragment>
          ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='secondary' variant='outlined'>
          Cancel
        </Button>
        <Button onClick={saveExperience} color='primary' variant='contained'>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
