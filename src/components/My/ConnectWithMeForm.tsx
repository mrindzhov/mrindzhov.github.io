import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Contacts } from '@material-ui/icons';
import React, { useState } from 'react';
import { UserData } from '../../models';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ConnectWithMeForm(user: UserData) {
  const classes = useStyles();
  const [form, setForm] = useState({ name: '', emailOrPhone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setIsSubmitted(true);
  };

  const setFormField = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  return (
    <Container component='main' maxWidth='md' className={classes.paper}>
      {isSubmitted ? (
        <Typography variant='h4' component='h2'>
          Thank you! I'll contact you shortly :)
        </Typography>
      ) : (
        <>
          <Avatar className={classes.avatar}>
            <Contacts />
          </Avatar>

          <Typography component='h1' variant='h3'>
            Chat with me.
          </Typography>
          <Typography component='p'>
            I am always excited to work on some awesome projects, message me and let's discuss over coffee.
          </Typography>
          <form className={classes.form} noValidate onSubmit={submitForm}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  autoComplete='fullName'
                  name='name'
                  label='Your name'
                  onChange={setFormField}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  autoComplete='email'
                  name='emailOrPhone'
                  label='Your email / phone number'
                  onChange={setFormField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  multiline
                  rows={3}
                  autoFocus
                  label='Your message to me'
                  name='message'
                  onChange={setFormField}
                />
              </Grid>
            </Grid>
            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
              Send
            </Button>
          </form>
        </>
      )}
    </Container>
  );
}
