import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import { Papered } from 'components/Papered';
import { SkillsSlider } from 'components/SkillsSlider';
import { UserData } from 'models/user.models';
import { addOrUpdateListItem, removeListItemById } from 'utils';
import { useDashboard } from '../dashboardContext';

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

export function AllSkillsSetup() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TechnicalSkillsSetup />
      </Grid>

      <Grid item xs={12} md={6}>
        <SoftSkillsSetup />
      </Grid>

      <Grid item xs={12} md={6}>
        <InterestsSetup />
      </Grid>
    </Grid>
  );
}
export function TechnicalSkillsSetup() {
  return <SkillsCategorySetup category={'techSkills'} title='Technical Skills' />;
}
export function SoftSkillsSetup() {
  return <SkillsCategorySetup category={'softSkills'} title='Soft Skills' />;
}

export function InterestsSetup() {
  return <SkillsCategorySetup category={'interests'} title='Interests' />;
}

type SkillsCategorySetupProps = {
  title: string;
  category: keyof Pick<UserData, 'softSkills' | 'techSkills' | 'interests'>;
};

function SkillsCategorySetup({ category, title }: SkillsCategorySetupProps) {
  const classes = useStyles();

  const { userData, setUserData } = useDashboard();

  const addNewValue = () => {
    setUserData((prevState) => ({
      ...prevState,
      [category]: addOrUpdateListItem({ id: 0, level: 20, name: '' }, prevState?.[category]),
    }));
  };

  const handleSkillNameChange = (id: number, name: string) => {
    setUserData((prevState) => ({
      ...prevState,
      [category]: prevState[category].map((s) => (s.id === id ? { ...s, name } : s)),
    }));
  };

  const handleLevelChange = (id: number, level: number) => {
    setUserData((prevState) => ({
      ...prevState,
      [category]: prevState[category].map((s) => (s.id === id ? { ...s, level } : s)),
    }));
  };

  const deleteValue = (skillId: number) => {
    setUserData((prevState) => ({ ...prevState, [category]: removeListItemById(skillId, prevState?.[category]) }));
  };

  return (
    <Papered title={title} onEntityAdded={addNewValue}>
      {(userData?.[category]?.length || 0) < 3 && (
        <Typography> List atleast 3 skills in order to have them shown on your public pag</Typography>
      )}
      {userData?.[category]?.map(({ name, level, id }) => (
        <Box key={id}>
          <Grid container spacing={1} alignItems='flex-end'>
            <Grid item xs={10}>
              <div className={classes.skillRow}>
                <TextField
                  className={classes.inputField}
                  autoFocus
                  margin='dense'
                  label='Text'
                  defaultValue={name}
                  onChange={(e) => handleSkillNameChange(id, e.target.value)}
                />
                <SkillsSlider
                  valueLabelDisplay='on'
                  defaultValue={level}
                  step={10}
                  onChange={(_, value) => handleLevelChange(id, Array.isArray(value) ? value[0] : value)}
                />
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className='font-icon-wrapper' onClick={() => deleteValue(id)}>
                <IconButton aria-label='delete'>
                  <DeleteIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Papered>
  );
}
