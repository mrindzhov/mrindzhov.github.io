import { Box, Grid, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { AddCircle } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDashboard } from '../../dashboardContext';
import { Skill, UserData } from '../../models';
import { Papered } from '../Papered';
import { SkillsSlider } from './SkillsSlider';

const tempData: Skill[] = [
  { name: 'React', level: 90 },
  { name: 'C#', level: 80 },
  { name: 'Agile', level: 100 },
];

const useStyles = makeStyles((theme) => ({
  skillRow: {
    display: 'flex',
    alignItems: 'center',
  },
  inputField: {
    width: '80%',
    marginRight: theme.spacing(8),
  },
}));

export default function SkillsSetup() {
  const classes = useStyles();

  const { userData, setUserData, saveChanges } = useDashboard();

  const addNewValue = () => {
    //  TODO: Add proper type setValues([...values, TYPE]);
    const newValue: Skill = { level: 20, name: '' };

    setUserData((prevState) => ({
      ...prevState,
      techSkills: [...(prevState?.techSkills || []), newValue],
    }));
    // setValues([...values, { index: 0, level: 20, skill: '' }]);
  };

  const handleSkillChange = (name: string, e: string) => {
    //   TODO: Save skill change to values
  };

  const handleLevelChange = (name: string, value: number | number[]) => {
    //   TODO: Save level change to values
  };

  const deleteValue = (skillName: string) => {
    setUserData((prevState) => {
      const techSkills = prevState?.techSkills.filter((skill) => skill.name !== skillName) || [];
      const newState: UserData = { ...prevState, techSkills };
      return newState;
    });
  };

  return (
    <Papered title='Skills'>
      <div>
        {userData?.techSkills.map(({ name, level }) => (
          <Box key={name}>
            <Grid container spacing={1} alignItems='flex-end'>
              <Grid item xs={10}>
                <div className={classes.skillRow}>
                  <TextField
                    className={classes.inputField}
                    autoFocus
                    margin='dense'
                    label='Value'
                    variant='outlined'
                    value={name || ''}
                    onChange={(e) => handleSkillChange(name, e.target.value)}
                  />
                  <SkillsSlider
                    valueLabelDisplay='auto'
                    aria-label='skills slider'
                    defaultValue={level || 20}
                    onChange={(_, value) => handleLevelChange(name, value)}
                  />
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className='font-icon-wrapper' onClick={() => deleteValue(name)}>
                  <IconButton aria-label='delete'>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Box>
        ))}
        <IconButton onClick={addNewValue} aria-label='add-slider'>
          <AddCircle />
        </IconButton>
        <Button onClick={saveChanges} color='primary'>
          Save changes
        </Button>
      </div>
    </Papered>
  );
}
