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
import { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import { firebaseAuth } from 'utils/firebase';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function SignIn() {
  const classes = useStyles();
  const [signInWithEmailAndPassword, , , error] = useSignInWithEmailAndPassword(firebaseAuth);
  const [signInForm, setSignInForm] = useState({ email: '', password: '' });
  const [user] = useAuthState(firebaseAuth);

  const setFormField = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    setSignInForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(signInForm.email, signInForm.password);
  };

  if (user) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <UserEntrance title='Sign In' icon={<LockOutlinedIcon />}>
      <form className={classes.form} noValidate onSubmit={submitForm}>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          autoFocus
          onChange={setFormField}
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
          onChange={setFormField}
        />
        <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
        {!!error && <Alert severity='error'>{error.message}</Alert>}
        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
          Sign In
        </Button>

        <Grid container>
          <Grid item xs>
            <Link href='#' variant='body2'>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link component={NavLink} to='/sign/up' variant='body2'>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </UserEntrance>
  );
}
