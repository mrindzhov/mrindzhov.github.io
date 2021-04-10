import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { Experience } from 'models/user.models';
import React, { useCallback, useMemo, useState } from 'react';
import { getNewId, toCapitalizedWord } from 'utils';
import { useDashboard } from '../../useDashboard';

const defaultExperience: Experience = {
  id: 0,
  companyName: '',
  jobTitle: '',
  jobDescription: '',
  companyLogo: '',
  startDate: new Date(),
  endDate: new Date(),
};

export function useExperienceDialog() {
  const [open, setOpen] = useState(false);
  const [experience, setExperience] = useState<Experience>(defaultExperience);
  const { setUserData } = useDashboard();

  const handleChange = ({ target: { value, name } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setExperience((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDateChange = (dateField: string) => (date: MaterialUiPickersDate) => {
    setExperience((prevState) => ({ ...prevState, [dateField]: date }));
  };

  const openExperienceDialog = useCallback((selectedExperience: Experience | null) => {
    return () => {
      setExperience(selectedExperience ?? defaultExperience);
      setOpen(true);
    };
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setExperience(defaultExperience);
  }, []);

  const saveExperience = useCallback(() => {
    setUserData((prevState) => {
      const newExperience = prevState?.experiences || [];

      const correctExperience: Experience[] =
        experience.id > 0
          ? newExperience.map((p) => (p.id === experience.id ? experience : p)) // edit
          : [...newExperience, { ...experience, id: getNewId(newExperience) }]; // add
      return { ...prevState, experiences: correctExperience };
    });
    handleClose();
  }, [handleClose, experience, setUserData]);

  const dialog = useMemo(() => {
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
                    onChange={handleChange}
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
  }, [handleClose, open, experience, saveExperience]);

  return { dialog, open, openExperienceDialog };
}
