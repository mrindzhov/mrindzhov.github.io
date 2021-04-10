import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { toCapitalizedWord } from 'utils';
import { usePortfolio } from './portfolioContext';

export function ProjectDialog() {
  const { open, handleClose, project, handleFieldChange, saveProject } = usePortfolio();

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
              multiline={key === 'description'}
              rows={key === 'description' ? 4 : undefined}
              margin='dense'
              key={key}
              name={key}
              label={toCapitalizedWord(key)}
              onChange={handleFieldChange}
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
}
