import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { Experience, IProps } from 'models/user.models';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { addOrUpdateListItem, removeListItemById } from 'utils';
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

type ExperiencesContextState = {
  open: boolean;
  experience: Experience;
  openExperienceDialog: (selectedExperience: Experience | null) => () => void;
  handleClose: () => void;
  saveExperience: () => void;
  deleteExperience: (experienceId: number) => () => void;
  handleFieldChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  handleDateChange: (dateField: string) => (date: MaterialUiPickersDate) => void;
};

const ExperiencesContext = createContext<ExperiencesContextState>({} as ExperiencesContextState);

export function ExperiencesProvider({ children }: IProps) {
  const [open, setOpen] = useState(false);
  const [experience, setExperience] = useState<Experience>(defaultExperience);
  const { setUserData } = useDashboard();

  const handleFieldChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setExperience((prevState) => ({ ...prevState, [target.name]: target.value }));
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

  const deleteExperience = useCallback(
    (experienceId: number) => () => {
      setUserData((prevState) => ({ ...prevState, portfolio: removeListItemById(experienceId, prevState?.portfolio) }));
    },
    [setUserData]
  );

  const saveExperience = useCallback(() => {
    setUserData((prevState) => ({
      ...prevState,
      experiences: addOrUpdateListItem(experience, prevState?.experiences),
    }));
    handleClose();
  }, [handleClose, experience, setUserData]);

  return (
    <ExperiencesContext.Provider
      value={{
        open,
        openExperienceDialog,
        handleClose,
        experience,
        saveExperience,
        handleFieldChange,
        handleDateChange,
        deleteExperience,
      }}>
      {children}
    </ExperiencesContext.Provider>
  );
}

export function useExperiences() {
  const context = useContext(ExperiencesContext);
  if (context === undefined) {
    throw new Error('useExperiences must be used within a ExperiencesProvider');
  }
  return context;
}
