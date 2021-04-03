import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { firebaseDatabase } from '../App/firebase';
import { Copyright } from '../components/Copyright';
import AboutMe from '../components/My/AboutMe';
import ConnectWithMeForm from '../components/My/ConnectWithMeForm';
import MyHeader from '../components/My/MyHeader';
import MyIntro from '../components/My/MyIntro';
import MyProjects from '../components/My/MyProjects';
import MySkills from '../components/My/MySkills';
import MyStats from '../components/My/MyStats';
import MyWorkExperience from '../components/My/MyWorkExperience';
import { userDataDemo } from './userDataDemo';

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

  return (
    <div>
      <MyHeader /*{...user}*/ />
      <Container>
        <MyIntro {...user} />
        <AboutMe {...user} />
        <hr className='num' />
        <MyStats /*{...user}*/ />
        <MyProjects {...user} />
        <MySkills {...user} />
        <MyWorkExperience {...user} />

        <ConnectWithMeForm {...user} />
      </Container>
      <Copyright />
    </div>
  );
}
