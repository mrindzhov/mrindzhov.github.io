import { InputAdornment, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { useDashboard } from '../dashboardContext';
import { Social } from '../models';
import { socialLinksInfo } from './My/socialLinksInfo';
import { Papered } from './Papered';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export function SocialLinksInfo() {
  const classes = useStyles();

  const { userData, setUserData } = useDashboard();

  const setSocial = ({ target: { value, name } }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setUserData((prev) => ({ ...prev, social: { ...prev.social, [name]: value } }));
  };

  return (
    <Papered title='Social Info'>
      {Object.entries(userData.social).map(([provider, userId]) => (
        <TextField
          className={classes.margin}
          label={provider}
          name={provider}
          fullWidth
          defaultValue={userData.social[provider as keyof Social]}
          onChange={setSocial}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                {socialLinksInfo.find((l) => l.provider === provider)?.component}
              </InputAdornment>
            ),
          }}
        />
      ))}
    </Papered>
  );
}
