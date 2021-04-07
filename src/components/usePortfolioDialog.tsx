import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { useCallback, useMemo, useState } from 'react';
import { useDashboard } from '../dashboardContext';
import { Project } from '../models';
import { getNewId, toCapitalizedWord } from '../utils';

const defaultProject: Project = {
  id: 0,
  title: '',
  description: '',
  imageUrl: '',
  projectUrl: '',
};

export function usePortfolioDialog() {
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState<Project>(defaultProject);
  const { setUserData } = useDashboard();

  const handleChange = ({ target: { value, name } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setProject((prevState) => ({ ...prevState, [name]: value }));
  };

  const openProjectDialog = useCallback((selectedProject: Project | null) => {
    return () => {
      setProject(selectedProject ?? defaultProject);
      setOpen(true);
    };
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setProject(defaultProject);
  }, []);

  const saveProject = useCallback(() => {
    setUserData((prevState) => {
      const newPortfolio = prevState?.portfolio || [];

      const portfolio: Project[] =
        project.id > 0
          ? newPortfolio.map((p) => (p.id === project.id ? project : p)) // edit
          : [...newPortfolio, { ...project, id: getNewId(newPortfolio) }]; // add
      return { ...prevState, portfolio };
    });
    handleClose();
  }, [handleClose, project, setUserData]);

  const dialog = useMemo(() => {
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{project.id > 0 ? 'Edit project' : 'Add new project'}</DialogTitle>
        <DialogContent>
          {Object.entries(project)
            .filter(([key]) => key !== 'id')
            .map(([key, value], i) => (
              <TextField
                required
                fullWidth
                autoFocus={i === 0}
                margin='dense'
                key={key}
                name={key}
                label={toCapitalizedWord(key)}
                onChange={handleChange}
                value={value}
              />
            ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary' variant='outlined'>
            Cancel
          </Button>
          <Button onClick={saveProject} color='primary' variant='contained'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }, [handleClose, open, project, saveProject]);

  return { dialog, open, openProjectDialog };
}
