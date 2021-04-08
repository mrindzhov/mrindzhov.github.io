import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Alert } from '@material-ui/lab';
import { UserEntrance } from 'components/UserEntrance';
import { UserData } from 'models/user.models';
import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { NavLink, Redirect } from 'react-router-dom';
import { firebaseAuth, firebaseDatabase } from 'utils/firebase';
import { initialUserDataState } from 'utils/mockData';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function SignUp() {
  const classes = useStyles();

  const [signUpForm, setSignUpForm] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [createUserWithEmailAndPassword, , , error] = useCreateUserWithEmailAndPassword(firebaseAuth);
  const [user] = useAuthState(firebaseAuth);
  useEffect(() => {
    if (user) {
      firebaseDatabase
        .ref('users/' + user.uid)
        .set({
          ...initialUserDataState,
          fullName: `${signUpForm.firstName} ${signUpForm.lastName}`,
          userName: user.email,
        } as UserData)

        .then((a) => {
          console.log(a);
        });
    }
  }, [user, signUpForm]);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  const setFormField = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    setSignUpForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  if (user) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <UserEntrance title='Sign Up' icon={<LockOutlinedIcon />}>
      <form className={classes.form} noValidate onSubmit={submitForm}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete='fname'
              name='firstName'
              variant='outlined'
              required
              fullWidth
              id='firstName'
              label='First Name'
              autoFocus
              onChange={setFormField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='lastName'
              label='Last Name'
              name='lastName'
              autoComplete='lname'
              onChange={setFormField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              onChange={setFormField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={setFormField}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value='allowExtraEmails' color='primary' />}
              label='I want to receive inspiration, marketing promotions and updates via email.'
            />
            {!!error && <Alert severity='error'>{error.message}</Alert>}
          </Grid>
        </Grid>
        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
          Sign Up
        </Button>
        <Grid container justify='flex-end'>
          <Grid item>
            <Link component={NavLink} to='/sign/in' variant='body2'>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </UserEntrance>
  );
}
