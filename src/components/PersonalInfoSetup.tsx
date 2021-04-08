import { FormControl, FormControlLabel, FormGroup, FormLabel, Switch, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { useDashboard } from '../dashboardContext';
import { toCapitalizedWord } from '../utils';
import { Papered } from './Papered';

export function PersonalInfoSetup() {
  const { userData, setUserData } = useDashboard();

  const publicFields = [
    'isPublic',
    'countryOfResidence',
    'fullName',
    'imageURL',
    'userName',
    'resumeUrl',
    'shortDescriptions',
    'actionButtonText',
    'bio',
  ];

  const setField = ({ target: { value, name } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
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
              <Grid item xs={12} sm={6} key={key}>
                {key === 'isPublic' ? (
                  <FormControl component='fieldset'>
                    <FormLabel component='legend'>
                      {userData.isPublic
                        ? 'Your profile is now visible to the public'
                        : 'Your profile is currently hidden'}
                    </FormLabel>
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
                ) : (
                  <TextField
                    required
                    rows={key === 'bio' ? 5 : undefined}
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
