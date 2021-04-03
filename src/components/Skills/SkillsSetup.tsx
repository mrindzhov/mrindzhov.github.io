import { Box, Grid, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { AddCircle } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { Papered } from '../Papered';
import { SkillsSlider } from './SkillsSlider';

interface SkillData {
  index: number;
  skill: string;
  level: number;
}

const fakeData: SkillData[] = [
  { index: 0, skill: 'React', level: 90 },
  { index: 1, skill: 'C#', level: 80 },
  { index: 2, skill: 'Agile', level: 100 },
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
  const [values, setValues] = React.useState<SkillData[]>(fakeData);

  const addNewValue = () => {
    //  TODO: Add proper type setValues([...values, TYPE]);
    setValues([...values, { index: 0, level: 20, skill: '' }]);
  };

  const handleSkillChange = (index: number, e: string) => {
    //   TODO: Save skill change to values
  };

  const handleLevelChange = (index: number, value: number | number[]) => {
    //   TODO: Save level change to values
  };

  const deleteValue = (skill: string) => setValues(values.filter((j: SkillData) => j.skill !== skill));

  const saveChanges = () => {
    // TODO: Save changes to BE
    // console.log("save this marsolski");
  };

  return (
    <Papered title='Skills'>
      <div>
        {values.map(({ index, skill, level }: SkillData) => (
          <Box key={`"skill"${index}`}>
            <Grid container spacing={1} alignItems='flex-end'>
              <Grid item xs={10}>
                <div className={classes.skillRow}>
                  <TextField
                    className={classes.inputField}
                    autoFocus
                    margin='dense'
                    label='Value'
                    variant='outlined'
                    value={skill || ''}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                  />
                  <SkillsSlider
                    valueLabelDisplay='auto'
                    aria-label='skills slider'
                    defaultValue={level || 20}
                    onChange={(_, value) => handleLevelChange(index, value)}
                  />
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className='font-icon-wrapper' onClick={() => deleteValue(skill)}>
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
