import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { firebaseDatabase } from '../App/firebase';
import AboutMe from '../components/My/AboutMe';
import ConnectWithMeForm from '../components/My/ConnectWithMeForm';
import MyFooter from '../components/My/MyFooter';
import MyHeader from '../components/My/MyHeader';
import MyIntro from '../components/My/MyIntro';
import MySkills from '../components/My/MySkills';
import MyStats from '../components/My/MyStats';
import MyVideos from '../components/My/MyVideos';
import MyWorkExperience from '../components/My/MyWorkExperience';
import Quotes from '../components/My/Quotes';
import { userDataDemo } from './userDataDemo';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function PublicCVPage() {
  const classes = useStyles();
  const { userName } = useParams<{ userName: string }>();
  const [user, setUser] = useState(userDataDemo);

  React.useEffect(() => {
    (() => {
      firebaseDatabase
        .ref('/users/')
        .orderByChild('userName')
        .equalTo(userName)
        .once('value')
        .then((snapshot) => {
          console.log('--', snapshot.val());

          const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
          console.log(username);
        });
    })();
  }, [userName]);

  if (true) {
    return (
      <div>
        <MyHeader /*{...user}*/ />
        <Container>
          <MyIntro {...user} />
          <AboutMe {...user} />
          <hr className='num' />
          <MyStats /*{...user}*/ />
          {/* <MyVideos {...user} /> */}
          <MySkills /*{...user}*/ />
          <MyWorkExperience {...user} />
          {/* <Quotes {...user} /> */}
          <ConnectWithMeForm /*{...user}*/ />
        </Container>
        <MyFooter /*{...user}*/ />
      </div>
    );
  } else
    return (
      <main>
        <hr />

        <Container maxWidth='md'>
          <Typography component='h2' variant='h4' align='center' color='textPrimary' gutterBottom>
            About me.
          </Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>
            {user.bio}
          </Typography>
        </Container>
        <hr />

        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Heading
                    </Typography>
                    <Typography>This is a media card. You can use this section to describe the content.</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>View</Button>
                    <Button size='small'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <footer className={classes.footer}>
          <Typography variant='h6' align='center' gutterBottom>
            Footer
          </Typography>
          <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </footer>
      </main>
    );
}
