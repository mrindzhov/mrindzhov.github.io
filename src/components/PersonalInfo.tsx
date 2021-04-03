import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Switch, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { useDashboard } from '../dashboardContext';
import { Papered } from './Papered';

export function PersonalInfo() {
  const { userData, setUserData } = useDashboard();

  const publicFields = [
    'isPublic',
    'fullName',
    'bio',
    'userName',
    'shortDescriptions',
    'actionButtonText',
    'countryOfResidence',
    'resumeUrl',
    'imageURL',
  ];

  const setField = ({ target: { value, name } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      [name]: name === 'shortDescriptions' ? value.split('') : value,
    }));
  };

  return (
    <Papered title='Personal Info'>
      <Grid container spacing={3}>
        {Object.entries(userData)
          .filter(([key]) => publicFields.includes(key))
          .sort(([key1], [key2]) => publicFields.indexOf(key2) - publicFields.indexOf(key1))
          .reverse()
          .map(([key, value]) => {
            return (
              <Grid item xs={12} sm={4} key={key}>
                {key === 'isPublic' ? (
                  <Grid item xs={12} sm={4}>
                    <FormControl component='fieldset'>
                      <FormLabel component='legend'>Make your profile public</FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={userData.isPublic}
                              onChange={(e) => setUserData((prev) => ({ ...prev, isPublic: !prev.isPublic }))}
                              name='isPublic'
                            />
                          }
                          label={userData.isPublic ? 'Public' : 'Private'}
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                ) : (
                  <TextField
                    required
                    rows={key === 'bio' ? 3 : undefined}
                    multiline={key === 'bio'}
                    name={key}
                    label={toCapitalizedWord(key)}
                    fullWidth
                    autoComplete={key}
                    onChange={setField}
                    value={value}
                  />
                )}
              </Grid>
            );
          })}
      </Grid>
    </Papered>
  );
}

function toCapitalizedWord(name: string) {
  var words = name.match(/[A-Za-z][a-z]*/g) || [];

  return words.map(capitalize).join(' ');
}

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}
